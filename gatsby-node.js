// const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
        path: edge.node.frontmatter.slug,
      },
    });
  });
};

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(createFilePath({ node, getNode, basePath: "posts" }));
//   }
// };

// exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
//   createTypes(`
//     type Mdx implements Node {
//       frontmatter: MdxFrontmatter
//     }

//     type MdxFrontmatter {
//       profile: String @mdx
//       image: String @mdx
//     }
//   `);
// };
