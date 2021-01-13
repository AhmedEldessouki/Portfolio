import React from 'react'
import {render, userEvent, screen} from '../../../../test/app-test-utils'
import PopUp from '../PopUp'

const func = jest.fn().mockName('mockedFunction')

test('should display PopUp then reject then PopUp closes', async () => {
  await render(<PopUp info="Entered Titled" onClickYes={func} />, {
    user: null,
    doWait: false,
  })

  userEvent.click(screen.getByTestId('delete-button'))

  // const buttons = screen.getAllByRole('button')
  const buttons = await screen.findAllByRole('button')

  expect(screen.getByText(/warning/i)).toBeInTheDocument()
  expect(screen.getByText(/Entered Titled/i)).toBeInTheDocument()

  expect(buttons).toHaveLength(3)
  expect(buttons[0]).not.toHaveTextContent()
  expect(buttons[1]).toHaveTextContent(/nah/i)
  expect(buttons[2]).toHaveTextContent(/yup/i)

  userEvent.click(buttons[1])
  expect(screen.queryByTitle(/warning/i)).not.toBeInTheDocument()
})

test('should display PopUp then accept then PopUp closes', async () => {
  await render(<PopUp info="Entered Titled" onClickYes={func} />, {
    doWait: false,
  })

  userEvent.click(screen.getByTestId('delete-button'))

  const buttons = await screen.findAllByRole('button')

  expect(screen.getByText(/warning/i)).toBeInTheDocument()
  expect(screen.getByText(/Entered Titled/i)).toBeInTheDocument()

  userEvent.click(buttons[2])

  expect(func).toBeCalledTimes(1)

  expect(screen.queryByTitle(/warning/i)).not.toBeInTheDocument()
})
