import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
const Toc = (props) => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const obj = {
    h1: document.getElementsByTagName("h1"),
    h2: document.getElementsByTagName("h2"),
    h3: document.getElementsByTagName("h3"),
  };
  const map = new Map();
  console.log(obj.h1);
  console.log(obj.h1[1]);
  for (let key in obj) {
    console.log(key);
    for (let i of key) {
      console.log(obj[key]);
    }
  }
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log(scrollY);
    console.log(map);
  });
  console.log(viewportHeight, viewportWidth);
  return (
    <aside className="relative">
      <div
        className="toc"
        dangerouslySetInnerHTML={{ __html: props.toc }}
      ></div>
    </aside>
  );
};

export default Toc;
