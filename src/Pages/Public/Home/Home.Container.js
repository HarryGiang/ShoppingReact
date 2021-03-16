import Intro2 from "Assets/Icons/ic-3-layers.svg";
import Intro1 from "Assets/Icons/ic-fits-all.svg";
import Intro3 from "Assets/Icons/ic-washable.svg";
import Product3 from "Assets/Images/10.jpg";
import Artical from "Assets/Images/09.jpg";
import Product2 from "Assets/Images/11.jpg";
import Product4 from "Assets/Images/15.jpg";
import Product1 from "Assets/Images/16.jpg";
import Image1 from "Assets/Images/01.jpg";
import Image2 from "Assets/Images/02.jpg";
import Image3 from "Assets/Images/03.jpg";
import Image4 from "Assets/Images/04.jpg";
import Image5 from "Assets/Images/05.jpg";
import Image6 from "Assets/Images/06.jpg";
import Image7 from "Assets/Images/07.jpg";
import Image8 from "Assets/Images/08.jpg";
// import { CommonButton } from "Components/Common/CommonButton";
import { Banner } from "Components/PageHelper/Banner";
import { IntroItem } from "Components/PageHelper/IntroItem";
import { ProductItem } from "Components/PageHelper/ProductItem";
import { Button } from "Components/UI-Library";
import React from "react";
import { useTranslation } from "react-i18next";
import "./Home.less";
import { Link } from "react-router-dom";

// const { Text } = Typography;

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="main">
      {/* <Text type="danger">{t("shop")}</Text> */}
      <Banner />
      <div className="content">
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
          <Button>Shop All</Button>
        </div>
        <div className="title">Our Masks</div>
        <div className="d-flex">
          <IntroItem
            className="bg-light-pink"
            image={Intro1}
            title="Fits All"
            content="I'm a paragraph. Click here to add your own text and edit me."
          />
          <IntroItem
            className="bg-pink"
            image={Intro2}
            title="3 Fabric Layers"
            content="I'm a paragraph. Click here to add your own text and edit me."
          />
          <IntroItem
            className="bg-light-pink"
            image={Intro3}
            title="Washable"
            content="I'm a paragraph. Click here to add your own text and edit me."
          />
        </div>
        <div className="title">What We Stand For</div>
        <div className="d-flex">
          <div className="col-left">
            <div className="col-left-content text-center">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </div>
          </div>
          <div className="col-right">
            <img src={Artical} alt="" />
          </div>
        </div>
        <div className="title">Tag Us on Your Daily Cruise #visage</div>
        <div className="bg-light-pink">
          <div className="tag ">
            <div className="tag-list d-flex">
              <div className="tag-item">
                <Link to="/">
                  <img src={Image1} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image2} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image3} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image4} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
            </div>
            <div className="tag-list d-flex">
              <div className="tag-item">
                <Link to="/">
                  <img src={Image5} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image6} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image7} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
              <div className="tag-item">
                <Link to="/">
                  <img src={Image8} alt="" />
                  <div className="box-overlay"></div>
                  <div className="tag-content">@wix #clothing #masks</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
