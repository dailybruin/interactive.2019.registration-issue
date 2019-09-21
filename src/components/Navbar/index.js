import React from "react";
import { css } from "emotion";

import MobileMenu from "./MobileMenu";

import rip from "./rip.png";

import { mobile, notMobile } from '../Shared/mediaQueries';


class Navbar extends React.Component {
  render() {
    return (
      <div
        className={css`
          height: 100px;
          width: 100%;
          position: sticky;
          background-image: url(${rip});
          background-position: center top;
          background-repeat: no-repeat;
          background-size: auto;
          top: 0;
          z-index: 101;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            ${mobile} {
              justify-content: center;
            }
          `}
        >
          <h1
            className={css`
              margin: 0 10px 0 20px;
              white-space: nowrap;
              text-align: center;

              font-family: Source Sans Pro, sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 2.5em;
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
              ${mobile} {
                display: none;
              }
              box-sizing: border-box;
              padding: 20px 10px;
              text-align: center;
              max-height: 1.125em;
              overflow: hidden;

              a {
                display: inline-block;
                font-family: "Lato", serif;
                font-style: normal;
                font-weight: normal;
                font-size: 1.125em;
                text-align: center;

                color: #363636;
                text-decoration: none;
                font-weight: bold;
                padding: 0 0.5em;
                text-transform: uppercase;
              }

              a:hover {
                text-decoration: underline;
              }
            `}
          >
            {this.props.sections.map(section => (
              <a key={section} href={`#${section}`}>
                {section}
              </a>
            ))}
          </nav>
        </div>
        <div
          className={css`
            ${mobile} {
              display: block;
            }
            display: none;
          `}
        >
          <MobileMenu sections={this.props.sections} />
        </div>
      </div>
    );
  }
}

export default Navbar;
