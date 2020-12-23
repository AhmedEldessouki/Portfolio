/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'

import {signWrapper, h1XL, btnStyle, warning, spinner} from '../Styles'
import {useAuth} from '../../context/AuthProvider'
import Layout from '../Layout'
import Input from '../Utils/Input'
import {useAsync} from '../Utils/util'

const SignIn = () => {
  const {useSignIn} = useAuth(null)
  const [authError, signIn] = useSignIn()
  const {status, dispatch} = useAsync()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type: 'pending'})
    const {email, password} = e.target.elements
    const formData = {
      email: email.value,
      password: password.value,
    }

    signIn(formData)

    dispatch({type: 'resolved'})
    e.target.reset()
  }

  return (
    <Layout>
      <h1 css={h1XL}>Sign-in</h1>
      <div
        css={css`
          width: 100%;
          display: flex;
          place-content: center;
        `}
      >
        <form onSubmit={handleSubmit} css={signWrapper}>
          <div className="field-container">
            <Input
              type="email"
              autoComplete="email"
              placeholder="Email"
              name="email"
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
          {authError ? (
            <div type="alert" css={warning}>
              {authError}
            </div>
          ) : null}
          {status === 'pending' ? (
            <div
              css={css`
                width: 100%;
              `}
            >
              <div css={spinner} />
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
