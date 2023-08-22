import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
const Toc = (props) => {
  // const viewportWidth =
  //   window.innerWidth || document.documentElement.clientWidth;
  // const viewportHeight =
  //   window.innerHeight || document.documentElement.clientHeight;
  // let options = {
  //   root: document.querySelector(".layout"),
  //   rootMargin: "0px",
  //   threshold: 1.0,
  // };
  // React.useState
  // document.addEventListener("DOMContentLoaded", () => {
  //   // your instersectionobserver code here
  //   let io = new IntersectionObserver((entries, observe) => {
  //     console.log("dfdfd", entries);
  //     entries.forEach((entry) => {
  //       console.log(entry, entries);
  //     });
  //   }, options);
  //   let target = document.querySelector("h1");
  //   io.observe(target);
  // });

  // window.addEventListener("scroll", () => {
  //   const scrollY = window.scrollY;
  //   console.log(scrollY);
  // });
  // console.log(viewportHeight, viewportWidth);
  // window.addEventListener("load", () => {
  //   const scrollY = window.scrollY;
  //   console.log(scrollY);
  //   const observer = new IntersectionObserver((entries) => {
  //     let targets = entries.filter((entry) => {
  //       console.log(
  //         "entry :",
  //         entry.intersectionRect.height,
  //         entry.target,
  //         entries,
  //         viewportHeight
  //       );
  //       return entry.intersectionRect.top <= 400;
  //     });

  //     if (targets.length === 0) return;
  //     console.log(
  //       "target",
  //       targets,
  //       "temp :",
  //       temp,
  //       JSON.stringify(temp) === JSON.stringify(targets)
  //     );

  //     tocRef.current?.querySelectorAll(".highlight").forEach((element) => {
  //       element.classList.remove("highlight");
  //     });

  //     targets.forEach((io) => {
  //       const targetId = io.target.getAttribute("id");
  //       const linkSelector = `.toc a[href='#${encodeURI(targetId ?? "")}']`;
  //       const linkElement = tocRef.current?.querySelector(linkSelector);
  //       console.log(targetId, linkSelector, linkElement);
  //       linkElement?.classList.add("highlight");
  //     });
  //   }, options);

  //   const headingElements = ref.current?.querySelectorAll("h1, h2, h3");
  //   headingElements?.forEach((element) => {
  //     observer.observe(element);
  //   });
  // });
  return (
    <aside className="relative">
      <div
        ref={props.tocRef}
        className="toc"
        dangerouslySetInnerHTML={{ __html: props.toc }}
      ></div>
    </aside>
  );
};

export default Toc;
