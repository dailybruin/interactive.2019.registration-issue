import * as React from 'react';
import { graphql } from 'gatsby';
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import Game from "../components/GAS";
import Me from '../components/Me'
import Navbar from '../components/Navbar'
import Header from '../components/Header';

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
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <Header />
    <Navbar
      sections={[
        'NEWS',
        'OPINION',
        'ARTS',
        'SPORTS',
        'NEWS',
        'OPINION',
        'ARTS',
        'SPORTS',
      ]}
    />
    <Game />
    <Me />
    <Footer developers="Dustin Newman" copyrightYear={2019} />
  </>
)

export default IndexPage
