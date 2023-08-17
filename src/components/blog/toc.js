import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
const Toc = (props) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "blog/post/3" } }) {
        tableOfContents
      }
    }
  `);
  const html = data.markdownRemark.tableOfContents;
  console.log(props);
  console.log(html.replaceAll("a", "Link").replaceAll("href", "to"));
  return (
    <aside>
      <nav>{props.slug}</nav>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </aside>
  );
};

export default Toc;
