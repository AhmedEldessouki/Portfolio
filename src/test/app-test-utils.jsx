import React from 'react'
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'

import {QueryClient, QueryClientProvider} from 'react-query'
import {AuthProvider} from '../context/AuthProvider'
import {buildUser} from './generate'
import * as usersDB from './data/user'

async function loginAsUser(userProperties) {
  const user = buildUser(userProperties)
  await usersDB.create(user)
  const authUser = await usersDB.authenticate(user)
  window.localStorage.setItem(usersDB.usersKey, JSON.stringify(authUser.token))
  return user
}

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByLabelText(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    {timeout: 4000},
  )

async function render(
  ui,
  {route = '/', user, doWait = true, ...renderOptions} = {},
) {
  // if you want to render the app unauthenticated then pass "null" as the user
  // eslint-disable-next-line no-param-reassign
  user = typeof user === 'undefined' ? await loginAsUser() : user
  window.history.pushState({}, 'Test page', route)

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AuthProvider,
      ...renderOptions,
    }),
    user,
  }

  // wait for react-query to settle before allowing the test to continue
  if (doWait) {
    await waitForLoadingToFinish()
  }
  return returnValue
}

const queryClient = new QueryClient()

function AllProviders({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

const renderWithAllProviders = (
  ui,
  {route = '/', doWait, ...renderOptions} = {},
) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: AllProviders, doWait, ...renderOptions})
}

export * from '@testing-library/react'
export {
  render,
  userEvent,
  waitForLoadingToFinish,
  renderWithAllProviders,
  loginAsUser,
}
