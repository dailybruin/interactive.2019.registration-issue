import React from 'react'
import { css } from 'emotion'

import MobileMenu from './MobileMenu'

import rip from '../../images/rip.png'

const MOBILEBREAKPOINT = 800

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={css`
          min-height: 200px;
          width: 100%;
          position: sticky;
          background-image: url(${rip});
          background-position: center bottom;
          background-repeat: no-repeat;
          background-size: cover;
          top: 100vh;
        `}
      >
        <div
          className={css`
            padding: 14px;
            display: flex;
            justify-content: space-between;
            @media (max-width: ${MOBILEBREAKPOINT}px) {
              justify-content: center;
            }
          `}
        >
          <h1
            className={css`
              margin: 0 10px;
              white-space: nowrap;
              text-align: center;

              font-family: Source Sans Pro;
              font-style: normal;
              font-weight: bold;
              font-size: 40px;
              line-height: 50px;
              text-align: center;
              letter-spacing: 0.01em;
              color: #ffffff;
              -webkit-text-fill-color: #ffffff;
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: #000000;
            `}
          >
            registration issue
          </h1>
          <nav
            className={css`
              @media (max-width: ${MOBILEBREAKPOINT}px) {
                display: none;
              }
              padding: 20px 10px;
              text-align: center;

              a {
                display: inline-block;
                font-family: 'Lato', serif;
                font-style: normal;
                font-weight: normal;
                font-size: 22px;
                line-height: 26px;
                text-align: center;

                color: #363636;
                text-decoration: none;
                font-weight: bold;
                padding: 0 0.5em;
              }

              a:hover {
                text-decoration: underline;
              }
            `}
          >
            {this.props.sections.map(section => (
              <a key={section} href={`#${section}`}>{section}</a>
            ))}
          </nav>
        </div>
        <MobileMenu sections={this.props.sections} />
      </div>
    )
  }
}

export default Navbar
