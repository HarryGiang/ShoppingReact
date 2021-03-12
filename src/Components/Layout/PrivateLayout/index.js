import React from "react";
import { Layout } from "Components/UI-Library";

import "./index.less";
import { Header } from "Components";

const { Content } = Layout;

const PrivateLayout = (props) => {
  return (
    <Layout className="pp_layout">
      <Header />
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default PrivateLayout;
