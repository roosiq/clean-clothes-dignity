const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Clean Clothes for Dignity',
  },
  pathPrefix: '/clean-clothes',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato`,
          `merriweather` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-82884925-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`
  ],
}
