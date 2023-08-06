/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Taemin's Portfolio`,
    siteUrl: `https://www.taemin-jang.github.io`,
    description: "Welcome to My Portfolio Site! \n Frontend Developer.",
    copyright: "Copyright 2023 Life Spice. All rights reserved.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/components/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `components`,
        // Path to the directory
        path: `${__dirname}/src/components`,
      },
    },
  ],
};
