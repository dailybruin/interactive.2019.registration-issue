import React from "react";
import Header from "./components/Header";
import Game from "./components/GAS";
import { css } from "emotion";
import rip from "./images/rip.png";
import { notMobile, mobile } from "./components/Shared/mediaQueries";
import Navbar from "./components/Navbar";
import { ArticleGrid } from "./components/ArticleGrid";
import config from "./config";
import LandingPage from "./components/LandingPage";

const IndexPage = () => (
  <div>
    <LandingPage></LandingPage>
    <div
      className={css`
        background-image: url(${rip});
        background-repeat: no-repeat;
        height: 200vh;

        ${notMobile} {
          background-size: 100vw 100vh;
        }

        ${mobile} {
          background-size: 200%;
          background-position-x: center;
        }
      `}
    >
      <div
        className={css`
          ${mobile} {
            min-height: 100vh;
          }

          ${notMobile} {
            height: 100vh;
          }

          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Header />
        <p
          className={css`
            width: 80%;
            font-weight: bold;
            text-align: center;

            ${notMobile} {
              margin-top: 4.5em;
            }

            ${mobile} {
              margin-top: 3em;
            }
          `}
        >
          {config.explainer}
        </p>
        <Game />
      </div>
      {/* <Navbar sections={[
      'NEWS',
      'OPINION',
      'ARTS',
      'SPORTS',
      'PRIME',
      'PHOTO'
    ]} /> */}
      <ArticleGrid />
      {/* <Footer developers="Dustin Newman, Thomas Gerard, Neil Prajapati" copyrightYear={2019} /> */}
    </div>
  </div>
);

export default IndexPage;
