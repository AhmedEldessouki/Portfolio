/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {ErrorBoundary} from 'react-error-boundary'

import {btnStyle, h2XL, formWrapper} from '../Styles'
import Input from '../Utils/Input'
import {ErrorMessageFallback, Spinner} from '../Utils/util'

import type {Status} from '../Utils/interfaces'

function TagForm({
  status,
  handleSubmit,
}: {
  status: Status
  handleSubmit: (e: React.SyntheticEvent) => void
}) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        place-content: center;
        flex-wrap: wrap;
      `}
    >
      <h2 css={h2XL}>Create Tag</h2>
      <ErrorBoundary FallbackComponent={ErrorMessageFallback}>
        <form onSubmit={e => handleSubmit(e)} css={formWrapper}>
          <div className="field-container">
            <Input
              type="text"
              placeholder="Enter Tag's Name"
              name="name"
              required
              cleanColor={status === 'resolved'}
            />
            <Input
              type="url"
              name="url"
              required
              placeholder="Enter Tag's Link"
              cleanColor={status === 'resolved'}
            />
          </div>
          {status === 'pending' ? (
            <Spinner />
          ) : (
            <button type="submit" css={btnStyle}>
              Create Tag
            </button>
          )}
        </form>
      </ErrorBoundary>
    </div>
  )
}

export default TagForm