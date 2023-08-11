import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Header from "../components/blog/header.js";
export default function Template({ data }) {
  const post = data?.markdownRemark;
  const profile = getImage(post?.frontmatter.profile);
  const image = getImage(post?.frontmatter.image);
  console.log(data);
  console.log(profile);
  console.log(image);
  return (
    <div className="layout">
      <Header />
      <main className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post?.frontmatter.title}
            </h1>
            <div className="flex items-center justify-between mt-6">
              <span className="flex items-center">
                <GatsbyImage
                  image={profile}
                  className="rounded-full border-2 border-solid border-inherit mr-2"
                />
                <span className="">
                  <p className="font-bold text-xs">Taemin</p>
                  <p className="text-gray-400 text-xs">
                    {post?.frontmatter.date}
                  </p>
                </span>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  className="mr-4"
                >
                  <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                    stroke="#1C274C"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                    stroke="#1C274C"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="mx-auto mt-10 pb-10 max-w-2xl gap-x-8 gap-y-16 border-b border-gray-200 lg:mx-0 lg:max-w-none">
            <article>
              <GatsbyImage
                image={image}
                className="rounded-3xl border-solid border-inherit border-2"
              />
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <Link
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </Link>
              </div>
              <div dangerouslySetInnerHTML={{ __html: post?.html }} />
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "YYYY년 MM월 DD일 ")
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        profile {
          childImageSharp {
            gatsbyImageData(width: 30, height: 30)
          }
        }
      }
    }
  }
`;
