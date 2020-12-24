/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, css} from '@emotion/react'
import {GoMarkGithub} from 'react-icons/go'

import {colors, weights, mq} from '../../Styles'
import AhmedEldessouki from '../../../assets/Layer-1@0,25x.png'

const MyInfo = () => {
  const container = css`
    display: grid;
    place-items: center;
    margin-bottom: 3%;
    border-top: 22.5px solid ${colors.darkBlue};
    border-bottom: 22.5px solid ${colors.darkBlue};
    border-radius: 19%;
    gap: 36px;
    padding: 3% 7.5%;
    img {
      border: 15.5px solid ${colors.darkBlue};
      border-radius: 5%;
      grid-column: 1;
      grid-row: 1;
    }
    p {
      font-size: 130%;
      grid-column: 2 / span 3;
      grid-row: 1;
      letter-spacing: 0.1rem;
    }
    ${mq.desktop} {
      p {
        font-size: 115%;
        letter-spacing: 0.02rem;
      }
    }
    ${mq.phoneLarge} {
      gap: 0;
      padding: 7% 1.5%;
      border-radius: 6%;
      img {
        grid-row: 1;
        grid-column: 1;
      }
      p {
        grid-row: 2;
        grid-column: 1;
        padding: 0 13%;
        font-size: 105%;
        letter-spacing: 0.02rem;
      }
    }
    ${mq.s} {
      margin-bottom: 5%;
      border-radius: 0;
    }
  `

  const ulContainer = css`
    grid-row: 2;
    grid-column: 1 / span 4;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 9px solid ${colors.kindaDarkBlue};
    border-radius: 20%;
    padding: 20px 55px;
    margin: 0;
    background-color: ${colors.darkBlue};
    & li {
      font-size: 124%;
      margin: 0 15px;
      padding: 15px 25px;
      background-color: ${colors.whiteFaded};
      color: ${colors.independenceBlue};
      border: 4.5px solid ${colors.independenceBlue};
      font-weight: ${weights.bold};
      border-radius: 20%;
      &:last-child &:hover,
      &:last-child &:focus {
        background-color: ${colors.independenceBlue};
        color: ${colors.whiteFaded};
      }
    }
    ${mq.phoneLarge} {
      flex-direction: column;
      grid-row: 3;
      grid-column: 1;

      li {
        font-size: 108%;
        width: 10rem;
        text-align: center;
        letter-spacing: 1.2px;
      }
    }
    ${mq.s} {
      display: none;
      grid-row: 2;
      grid-column: 1 / span 2;
    }
  `

  function calcMyAge() {
    const today = new Date()
    const todaysYear = today.getFullYear()
    const myBirthday = new Date('apr 4 1989')
    const myBirthYear = myBirthday.getFullYear()
    const myBirthdayThisYear = new Date(myBirthday)
    myBirthdayThisYear.setFullYear(todaysYear)

    return todaysYear - myBirthYear - (today < myBirthdayThisYear ? 1 : 0)
  }

  return (
    <div css={container}>
      <img src={AhmedEldessouki} alt="profilePicture" />
      <p>
        Welcome! I`m Ahmed Eldessouki. I`m {calcMyAge()} years old from Cairo,
        Egypt. I am an independent contractor. I graduated from University Of
        Wales with Bachelor of Computer Science. I started as an entry level
        Front-End Developer on a project called RoomMe. I`m a very passionate
        about React.js and learning. A strength of mine, is my ability to be
        observant of small details.
      </p>
      <ul css={ulContainer}>
        <li>Ahmed ElDessouki</li>
        <li className="follow-container">Istanbul, Turkey</li>
        <li
          css={css`
            font-style: italic;
            &:hover,
            &:focus {
              background-color: ${colors.independenceBlue};
              color: ${colors.whiteFaded};
            }
          `}
        >
          <a href="www.github.com/ahmedeldessouki" css={css``}>
            <GoMarkGithub /> Github Account
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MyInfo
