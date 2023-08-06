import * as React from "react";
import Header from "./header";
import Hero from "./hero";
import Tech from "./tech";
import Project1 from "./projects/project1";
import Project2 from "./projects/project2";
import Project3 from "./projects/project3";
import Project4 from "./projects/project4";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Hero></Hero>
      <Tech></Tech>
      <Project4></Project4>
      <Project3></Project3>
      <Project2></Project2>
      <Project1></Project1>
    </div>
  );
};

export default Layout;
