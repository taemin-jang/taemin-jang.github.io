import * as React from "react";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2023</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
