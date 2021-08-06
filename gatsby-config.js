module.exports = {
  siteMetadata: {
    title: `Gatsby Material-UI Demo Template`,
    description: `Barebones Gatsby/Material-UI Template for Demonstrations via SnappyWebDesign.net`,
    author: `@snappy_web`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    }
  ]
}
