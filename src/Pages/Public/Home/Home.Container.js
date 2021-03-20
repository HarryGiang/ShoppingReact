import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "Components/UI-Library";
import React from "react";
import { Carousel, Row, Col } from "antd";

import Intro2 from "Assets/Icons/ic-3-layers.svg";
import Intro1 from "Assets/Icons/ic-fits-all.svg";
import Intro3 from "Assets/Icons/ic-washable.svg";
import Product3 from "Assets/Images/10.jpg";
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
import Artical from "Assets/Images/09.jpg";
import { Banner } from "Components/PageHelper/Banner";
import { IntroItem } from "Components/PageHelper/IntroItem";
import { ProductItem } from "Components/PageHelper/ProductItem";
import "./Home.less";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="main">
      <Carousel autoplay>
        <div>
          <Banner />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Banner />
        </div>
      </Carousel>
      <div className="content">
        <div className="title">{t("Most Popular")}</div>
        <div className="most-product">
          <Row gutter={[40, 40]}>
            <Col span={6}>
              <ProductItem
                name="I'm a Product"
                price="10.00"
                image={Product1}
              />
            </Col>
            <Col span={6}>
              <ProductItem
                name="I'm a Product"
                price="10.00"
                image={Product2}
                tag="Best Seller"
              />
            </Col>
            <Col span={6}>
              <ProductItem
                name="I'm a Product"
                price="10.00"
                image={Product3}
              />
            </Col>
            <Col span={6}>
              <ProductItem
                name="I'm a Product"
                price="10.00"
                image={Product4}
                tag="Sale"
              />
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <Button className="btn">Shop All</Button>
        </div>
        <div className="title">{t("Our Masks")}</div>
        <Row gutter={[40, 40]}>
          <Col span={8}>
            <IntroItem
              className="bg-light-pink"
              image={Intro1}
              title="Fits All"
              content="I'm a paragraph. Click here to add your own text and edit me."
            />
          </Col>
          <Col span={8}>
            <IntroItem
              className="bg-pink"
              image={Intro2}
              title="3 Fabric Layers"
              content="I'm a paragraph. Click here to add your own text and edit me."
            />
          </Col>
          <Col span={8}>
            <IntroItem
              className="bg-light-pink"
              image={Intro3}
              title="Washable"
              content="I'm a paragraph. Click here to add your own text and edit me."
            />
          </Col>
        </Row>
        <div className="title">{t("What We Stand For")}</div>
        <Row gutter={[40, 40]}>
          <Col span={12}>
            <div className="col-left">
              <div className="col-left-content text-center">
                {t(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi quisquam eum et consequatur accusamus nam quia ratione minima recusandae placeat eius voluptatum animi ducimus nemo, maiores veniam ab! Voluptas eligendi, quam placeat ipsam maxime nemo vero ea voluptate quod ducimus enim cumque quisquam velit accusamus sequi quia nulla delectus!"
                )}
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="col-right">
              <img src={Artical} alt="" />
            </div>
          </Col>
        </Row>
        <div className="title">{t("Tag Us on Your Daily Cruise #visage")}</div>
        <div className="bg-light-pink">
          <div className="tag">
            <Row gutter={[80, 80]}>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image1} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image2} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image3} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image4} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image5} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image6} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image7} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="tag-item">
                  <Link to="/">
                    <img src={Image8} alt="" />
                    <div className="box-overlay"></div>
                    <div className="tag-content">@wix #clothing #masks</div>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
