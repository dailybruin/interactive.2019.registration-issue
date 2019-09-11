const siteName = 'Daily Bruin | Registration Issue 2019'
const description = 'Welcome to the Daily Bruin\'s 2019 Registration Issue!'
const image =
  'https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg'

const url = 'https://features.dailybruin.com/2019/registration-issue'

module.exports = {
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.2019.regissue',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: '1TJVrlFP0zPViE63jbPGZXGI1aixPwLYS6OdenLml76g',
      },
    },
  ],
}
