/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'

import {formWrapper, h1XL, btnStyle, warning, spinner} from '../Styles'
import {useAuth} from '../../context/AuthProvider'
import Layout from '../Layout'
import Input from '../Utils/Input'
import {useAsync} from '../Utils/hooks'

const SignIn = (): React.ReactNode => {
  const {useVerifyUserSignInCredentials} = useAuth()
  const [
    verificationFailed,
    checkUserCredentials,
  ] = useVerifyUserSignInCredentials()
  const {status, dispatch} = useAsync()

  async function submitUserCredentials(e: React.SyntheticEvent) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {email, password} = e.target as typeof e.target & {
      email: {value: string}
      password: {value: string}
    }
    const credentials = {
      email: email.value,
      password: password.value,
    }

    await checkUserCredentials(credentials)

    dispatch({type: 'resolved'})
  }

  return (
    <Layout height="74.5vmin">
      <h1 css={h1XL}>Sign-in</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
        `}
      >
        <form onSubmit={submitUserCredentials} css={formWrapper}>
          <div css={{width: '89%'}}>
            <Input
              name="email"
              placeholder="Email"
              autoComplete="email"
              type="email"
              required
              cleanColor={status === 'resolved'}
            />
            <Input
              type="password"
              name="password"
              autoComplete="password"
              minLength={6}
              maxLength={20}
              required
              placeholder="Password"
              cleanColor={status === 'resolved'}
            />
          </div>
          {verificationFailed && (
            <div role="alert" css={warning}>
              {verificationFailed}
            </div>
          )}
          {status === 'pending' ? (
            <div
              css={css`
                width: 100%;
              `}
            >
              <div css={spinner} aria-busy="true" />
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'pending'}
              css={btnStyle}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </Layout>
  )
}

export default SignIn