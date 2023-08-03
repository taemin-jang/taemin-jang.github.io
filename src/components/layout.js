import * as React from "react";
import Header from "./header";
import Hero from "./hero";
import Tech from "./tech";
import Project from "./project";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Hero></Hero>
      <Tech></Tech>
      <Project></Project>
      {/* <footer>
        <p>Copyright 2023</p>
        <p>All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Layout;
