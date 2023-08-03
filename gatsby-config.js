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
  ],
};
