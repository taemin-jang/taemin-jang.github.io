import * as React from "react";
import Layout from "../components/layout";
const PortfolioPage = () => {
  return (
    <Layout>
      <section>
        <div>
          <h2>Title</h2>
          <h3>Sub Title</h3>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio Page</title>;
