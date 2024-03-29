require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Hera Skate`,
    description: `NGO in Berlin-Neukölln - Womxn’s skate and art sessions`,
    author: `@heraskate`,
    image: "/images/icon.jpg",
    url: "https://www.heraskate.com"
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
        url: `${process.env.GATSBY_GRAPHCMS_API}`
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
