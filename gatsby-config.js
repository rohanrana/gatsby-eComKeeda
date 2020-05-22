
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Gatsby - Bootstraped Wordpress Sourced`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    keywords: "gatsby,gatsbyjs project,gatsby bootstrap",
    image: "./static/gatsby.jpg",
    url: "https://www.gatsbyjs.org/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `34.67.49.241`,
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ecomKeeda - Blog Site`,
        short_name: `ecomKeeda`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
{
  /*  */
}
