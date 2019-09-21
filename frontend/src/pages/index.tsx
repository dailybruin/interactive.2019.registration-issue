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
import Navbar from '../components/Navbar';
import { ArticleGrid } from '../components/ArticleGrid';
import config from '../config';

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

    ${notMobile} {
      background-size: 100vw 100vh;
    }

    ${mobile} {
      background-size: 200%;
      background-position-x: center;
    }
  `}>
    <Head {...data.site.siteMetadata} />
    <div className={css`
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
    `}>
      <Header />
      <p className={css`
        width: 80%;
        font-weight: bold;
        
        ${notMobile} {
          margin-top: 4.5em;
        }

        ${mobile} {
          margin-top: 1em;
        }
      `}>{config.explainer}</p>
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
    <Footer developers="Dustin Newman, Thomas Gerard, Neil Prajapati" copyrightYear={2019} />
  </div >
)

export default IndexPage
