module.exports = {
  siteTitle: 'Blockchain News NYC',
  siteTitleAlt: 'Everything Blockchain in New York City', // This allows an alternative site title for SEO schema.
  publisher: 'Publisher named Alex Covo', // Organization name used for SEO schema
  siteDescription:
    'A site dedicated to crypto and blockchain news, events and happending in New York City. This site is built with Gatsby, Contentful and Netlify',
  siteUrl: 'https://www.blockchainnews.nyc', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'BCNNYC user', // Author for RSS author segment and SEO schema
  authorUrl: 'https://www.blockchainnews.nyc/about/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@twitter', // Change for Twitter Cards
  shortTitle: 'BCNNYC App', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e9e9e9', // Used for Offline Manifest
  themeColor: '#121212', // Used for Offline Manifest
  copyright: 'Copyright © 2018 Blockchainnews.nyc', // Copyright string for the RSS feed
}
