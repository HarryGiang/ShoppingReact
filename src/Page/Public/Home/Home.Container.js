import { CommonButton } from "Components/Common/CommonButton";
import { Banner } from "Components/PageHelper/Banner";
import { ProductItem } from "Components/PageHelper/ProductItem";
import React from "react";
import styled from "styled-components";
import { COLORS } from "Constants/CommonContants";
import Product1 from "Assets/Images/16.jpg";
import Product2 from "Assets/Images/11.jpg";
import Product3 from "Assets/Images/10.jpg";
import Product4 from "Assets/Images/15.jpg";
import { IntroItem } from "Components/PageHelper/IntroItem";
import Intro1 from "Assets/Icons/ic-fits-all.svg";
import Intro2 from "Assets/Icons/ic-3-layers.svg";
import Intro3 from "Assets/Icons/ic-washable.svg";

export const Home = () => {
  return (
    <HomeWrapper>
      <Banner />
      <div className="title">Most Popular</div>
      <div className="most-product">
        <ProductItem name="I'm a Product" price="10.00" image={Product1} />
        <ProductItem
          name="I'm a Product"
          price="10.00"
          image={Product2}
          tag="Best Seller"
        />
        <ProductItem name="I'm a Product" price="10.00" image={Product3} />
        <ProductItem
          name="I'm a Product"
          price="10.00"
          image={Product4}
          tag="Sale"
        />
      </div>
      <div className="text-center">
        <CommonButton label="Shop All" />
      </div>
      <div className="title">Our Masks</div>
      <div className="our-masks">
        <IntroItem
          background={COLORS.light_pink}
          image={Intro1}
          title="Fits All"
          content="I'm a paragraph. Click here to add your own text and edit me."
        />
        <IntroItem
          background={COLORS.light_pink}
          image={Intro2}
          title="3 Fabric Layers"
          content="I'm a paragraph. Click here to add your own text and edit me."
        />
        <IntroItem
          background={COLORS.light_pink}
          image={Intro3}
          title="Washable"
          content="I'm a paragraph. Click here to add your own text and edit me."
        />
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  .text-center {
    text-align: center;
  }
  .title {
    font-size: 28px;
    color: ${COLORS.blue};
    text-align: center;
    margin: 60px 0;
  }
  .most-product {
    width: 90%;
    margin: 0 auto 20px;
    display: flex;
  }
  .our-masks{
      display: flex;
  }
`;
