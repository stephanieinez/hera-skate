module.exports = {
  siteMetadata: {
    title: `Hera Skate`,
    description: `NGO in Berlin-Neukölln - Womxn’s skate and art sessions`,
    author: `@heraskate`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HERA",
        fieldName: "hera",
        url: "https://api-eu-central-1.graphcms.com/v2/ckceqlkco2qmg01xmc1jb1s5t/master"
      },
    },
  ],
}
