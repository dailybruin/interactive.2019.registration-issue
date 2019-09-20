import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux';
import Header from "../components/Header";
import Game from "../components/GAS";
import { css } from 'emotion';
import rip from "../images/rip.png";
import { notMobile, mobile } from '../components/Shared/mediaQueries';

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <div className={css`
    background-image: url(${rip});
    background-repeat: no-repeat;
    height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${notMobile} {
      background-size: 100vw 100vh;
    }

    ${mobile} {
      background-size: 200%;
      background-position-x: center;
    }
  `}>
    <Head {...data.site.siteMetadata} />
    <Header />
    <p className={css`
      width: 80%;
      font-weight: bold;

      ${notMobile} {
        margin-top: 5em;
      }
      
      ${mobile} {
        margin-top: 3.5em;
      }
    `}>explainer for the interactive and game here! explainer for the interactive and game here! explainer for the interactive and game here! explainer for the interactive and game here! explainer for the interactive and game here! explainer for the interactive and game here! explainer for the interactive and game here!</p>
    <Game />
    <Footer developers="Dustin Newman" copyrightYear={2019} />
  </div>
)

export default IndexPage
