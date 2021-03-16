import React from "react";
import { Layout } from "Components/UI-Library";

import "./index.less";
import HeaderLayout from "Components/Header";

const { Content } = Layout;

const PrivateLayout = (props) => {
  return (
    <Layout className="">
      <HeaderLayout />
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default PrivateLayout;
