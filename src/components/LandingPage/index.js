import React from "react";
import { css } from "emotion";
import illo from '../../images/illo.gif'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div
        className={css`
          display: block;
          position: absolute;
          z-index: 1001;
          width: 100%;
          height: 100%;
          top: 0;
          animation-name: fade-out;
          animation-delay: 2s;
          animation-duration: 800ms;
          animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
          animation-fill-mode: forwards;
          will-change: opacity;
          background-image: url(${illo});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `}
        id="LandingPage"
      ></div>
    );
  }
}
