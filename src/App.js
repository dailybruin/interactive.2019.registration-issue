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

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        {this.props.visited || <LandingPage />}
        <div>
          <div
            className={css`
              min-height: 100vh;
              background-image: url(${rip});
              background-repeat: no-repeat;

              ${notMobile} {
                background-size: 100vw 100%;
              }

              ${mobile} {
                background-size: 200%;
                background-position-x: center;
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
            <div
              className={css`
                margin: 20px 0;
              `}
            >
              <broadstreet-zone zone-id="69406"></broadstreet-zone>
            </div>
          </div>
          <div>
            <Navbar
              sections={[
                "News",
                "Opinion",
                "Sports",
                "Arts",
                "Multimedia",
                "The Quad",
                "Prime"
              ]}
            />
            <ArticleGrid />
          </div>
          {/* <Footer developers="Dustin Newman, Thomas Gerard, Neil Prajapati" copyrightYear={2019} /> */}
        </div>
      </>
    );
  }
}
