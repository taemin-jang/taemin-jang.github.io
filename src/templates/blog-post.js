import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Template({ data }) {
  const post = data?.markdownRemark;
  return (
    <div>
      <h1>{post?.frontmatter.title}</h1>
      <h2>{post?.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post?.html }} />
      <h3>{post?.frontmatter.slug}</h3>
    </div>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        slug
        title
      }
    }
  }
`;
