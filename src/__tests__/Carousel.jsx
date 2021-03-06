import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

import Carousel from '../components/Carousel/Carousel'
import {colors} from '../Styles'

test('Carousel should Render and btn functionality', () => {
  render(
    <Carousel
      imgArray={[
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235621/zxlpwrjozjowzkisrenz.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235627/diy2mj8ifj1gwkccsoxe.png',
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1599235627/sx3edhyyamja8djibaro.png',
      ]}
      imgAlt="project name"
    />,
  )
  expect(screen.getByTestId(/previous/i)).toBeDisabled()
  expect(screen.getByTestId(/btn0/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.queryByTestId(/btn1/i)).not.toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/btn0/i)).toBeInTheDocument()
  expect(screen.getByTestId(/btn2/i)).toBeInTheDocument()
  expect(screen.getByTestId(/next/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/next/i))
  expect(screen.queryByTestId(/btn0/i)).not.toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/btn1/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/previous/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/previous/i))
  expect(screen.getByTestId(/btn0/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/previous/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/next/i))
  expect(screen.getByTestId(/btn1/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  userEvent.click(screen.getByTestId(/next/i))
  expect(screen.getByTestId(/btn2/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/next/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/previous/i))
  expect(screen.getByTestId(/next/i)).toBeEnabled()

  userEvent.click(screen.getByTestId(/btn0/i))
  expect(screen.getByTestId(/btn0/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/previous/i)).toBeDisabled()

  userEvent.click(screen.getByTestId(/btn2/i))
  expect(screen.getByTestId(/btn2/i)).toHaveStyle(
    `background: ${colors.blueFont}`,
  )
  expect(screen.getByTestId(/next/i)).toBeDisabled()
})
