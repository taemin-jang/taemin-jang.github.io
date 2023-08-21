import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Header from "../components/blog/header.js";
import Toc from "../components/blog/toc.js";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function Template({ location, data }) {
  const post = data?.markdownRemark;
  const profile = getImage(post?.frontmatter.profile);
  const thumbnail = getImage(post?.frontmatter.thumbnail);
  let options = {
    root: document.querySelector(".layout"),
    rootMargin: "0px",
    threshold: 0.1,
  };
  // Regular expression to match <h1> and <h2> tags and their contents
  const regex = /<h[123]\s+.*?>[\s\S]*?(?=<h[123]\s*|$)/g;

  // Replace matched tags with the desired format
  const modifiedHTML = post?.html.replace(
    regex,
    (match) => `<div class="container">${match}</div>`
  );
  console.log(modifiedHTML);
  const parser = new DOMParser();
  // const currentElements = parser
  //   .parseFromString(post.html.trim(), "text/html")
  //   .querySelectorAll("h1, h2, h3");
  const ref = React.useRef();
  const tocRef = React.useRef();
  let q = [];
  let tempId;
  let tempEl;
  let prev;
  let count = 0;

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    console.log("HAHAHAH" + location.pathname);
    const observer = new IntersectionObserver((entries) => {
      let targets = entries.filter((entry) => {
        // console.log("entry :", entry.intersectionRect.top, entry.target, entry);
        return entry.intersectionRect.top;
      });
      let targetsHighlight = entries.filter((entry) => {
        // console.log("entry :", entry.intersectionRect.top, entry.target, entry);
        return entry.intersectionRect.top === 0;
      });
      console.log("targets : ", targets);
      console.log("targetsHighlight : ", targetsHighlight);

      if (targets.length === 0) return;

      tocRef.current?.querySelectorAll(".highlight").forEach((element) => {
        element.classList.remove("highlight");
      });
      targets.forEach((io) => {
        let scrollY = window.scrollY;
        let targetY = io.target.offsetTop;
        // const targetId = io.target.getAttribute("id");
        const targetId = parser
          .parseFromString(io.target.innerHTML, "text/html")
          .querySelector("h1, h2, h3")
          .getAttribute("id");
        const linkSelector = `.toc a[href='#${encodeURI(
          targetId.toLowerCase() ?? ""
        )}']`;
        const linkElement = tocRef.current?.querySelector(linkSelector);
        console.log(linkSelector);
        console.log(tocRef.current);

        // console.log(
        //   targetId,
        //   linkSelector,
        //   linkElement,
        //   scrollY,
        //   io.target.offsetTop
        // );

        // console.log(tempId, targetId, tempId !== targetId);

        if (scrollY >= targetY) {
          linkElement?.classList.add("highlight");
          console.log(linkElement);
        } else {
          linkElement?.classList.remove("highlight");
          // prev?.classList.add("highlight");
          // console.log(tempId, tempEl, linkElement);
        }

        // if (!tempId || tempId !== targetId) {
        //   count++;
        //   prev = tempEl;
        //   // q.push(prev);
        //   tempId = targetId;
        //   tempEl = linkElement;
        //   // console.log(tempId, tempEl, prev, count);
        // }
      });
    }, options);
    const headingElements = ref.current?.querySelectorAll(".container");
    // headingElements?.forEach((element) => {
    //   console.log(element);
    //   // console.log(location.pathname);
    //   observer.observe(element);
    // });
    for (let hello of headingElements) {
      observer.observe(hello);
    }
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="layout">
      <Header />
      <Toc tocRef={tocRef} toc={post?.tableOfContents} />
      <main ref={ref} className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post?.frontmatter.title}
            </h1>
            <div className="flex items-center justify-between mt-8">
              <span className="flex items-center">
                <GatsbyImage
                  image={profile}
                  class="rounded-3xl border-2 border-solid border-inherit mr-4"
                />
                <span>
                  <p className="no font-bold text-xs">Taemin</p>
                  <p className="no text-gray-400 text-xs">
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
                  class="mr-6"
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
          <div className="mx-auto my-10 pb-10 max-w-2xl gap-x-8 gap-y-16 border-b border-gray-200 lg:mx-0 lg:max-w-none">
            <article className="mx-auto">
              <GatsbyImage
                image={thumbnail}
                className="rounded-3xl border-2 border-solid border-inherit"
              />
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: modifiedHTML }}
              />
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
      tableOfContents
      html
      frontmatter {
        title
        slug
        date(formatString: "YYYY년 MM월 DD일 ")
        thumbnail {
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
