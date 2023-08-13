import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { id: DESC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY.MM.DD")
              path
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 250)
                }
              }
              description
            }
          }
        }
        totalCount
        pageInfo {
          totalCount
        }
      }
    }
  `);
  const { edges, pageInfo } = data.allMarkdownRemark;
  return (
    <main className="no bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-screen-xl px-8 lg:px-10">
        <div className="mx-auto">
          <div className="px-8 lg:px-10">
            {edges.map((item, i) => (
              <div className="mt-8" key={i + 1}>
                <Link
                  to={item.node.frontmatter.slug}
                  className="no flex"
                  key={item.node.frontmatter.slug}
                >
                  <GatsbyImage
                    image={getImage(item.node.frontmatter.thumbnail)}
                    className="mr-8 rounded-3xl border-2 border-solid border-inherit"
                  />
                  <div className="py-8">
                    <p className="no text-gray-400 text-xs">
                      {item.node.frontmatter.date}
                    </p>
                    <h3 className="no mt-3">{item.node.frontmatter.title}</h3>
                    <p className="no text-sm mt-2">
                      {item.node.frontmatter.description}
                    </p>
                  </div>
                </Link>
                <hr className="mt-8"></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
