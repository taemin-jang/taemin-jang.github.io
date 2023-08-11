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
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-mdx-frontmatter",
    },
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
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: { path: `${__dirname}/src/posts` },
    },
    {
      resolve: "gatsby-plugin-mdx-frontmatter",
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`, // Needed for dynamic Image (GatsbyImage)
  ],
};
