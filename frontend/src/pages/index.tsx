import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import Game from '../components/Game'
import Me from '../components/Me'

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
    <Game />
    <Me />
    <Footer developers="Dustin Newman" copyrightYear={2019} />
  </>
)

export default IndexPage
