import React, { useState } from "react";
import { Breadcrumb, Button } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "antd";
import { InputNumber } from "antd";
import { HeartOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "./index.less";
import { Link } from "react-router-dom";
import Product1 from "Assets/Images/11.jpg";
import Product2 from "Assets/Images/12.jpg";
import Product3 from "Assets/Images/13.jpg";

const ProductDetail = () => {
  const [open, setOpen] = useState(false);

  const onChange = (value) => {
    console.log("changed", value);
  };
  const onHanleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="product-wrapper">
      <Row className="breadcrumb">
        <Col span={12}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/:id">I'm a Product</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={12}></Col>
      </Row>
      <Row gutter={[30, 30]}>
        <Col span={14}>
          <div className="product-image">
            <Carousel infiniteLoop="true">
              <div>
                <img src={Product1} alt="" />
              </div>
              <div>
                <img src={Product2} alt="" />
              </div>
              <div>
                <img src={Product3} alt="" />
              </div>
            </Carousel>
          </div>
          <div className="short-description">
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions and
            cleaning instructions.
          </div>
        </Col>
        <Col span={10}>
          <div className="product-name">I'm a Product</div>
          <div className="sku">SKU: 002</div>
          <div className="product-price">$10.00</div>
          <div className="product-color mb-lg">
            <p>Color</p>
            <div className="product-variant">
              <div className="variant variant-1"></div>
              <div className="variant variant-2"></div>
            </div>
          </div>
          <div className="quantity mb-lg">
            <p>Quantity</p>
            <InputNumber min={1} defaultValue={1} onChange={onChange} />
          </div>
          <div className="mb-sm">
            <Row gutter={[8, 8]}>
              <Col span={20}>
                <Button>Add to cart</Button>
              </Col>
              <Col span={4}>
                <Button>
                  <HeartOutlined />
                </Button>
              </Col>
            </Row>
          </div>
          <div className="mb-sm">
            <Button type="primary">Buy Now</Button>
          </div>
          <div className="product-info">
            <div className="info-item">
              <div className="info-title" onClick={onHanleOpen}>
                <div className="sub-title">Product Info</div>
                {open ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              {open && (
                <div className="info-description">
                  I’m a Return and Refund policy. I’m a great place to let your
                  customers know what to do in case they are dissatisfied with
                  their purchase. Having a straightforward refund or exchange
                  policy is a great way to build trust and reassure your
                  customers that they can buy with confidence.
                </div>
              )}
            </div>
            <div className="info-item">
              <div className="info-title" onClick={onHanleOpen}>
                <div className="sub-title">Return & Refund Policy</div>
                {open ? <MinusOutlined className="icon" /> : <PlusOutlined className="icon" />}
              </div>
              {open && (
                <div className="info-description">
                  I’m a Return and Refund policy. I’m a great place to let your
                  customers know what to do in case they are dissatisfied with
                  their purchase. Having a straightforward refund or exchange
                  policy is a great way to build trust and reassure your
                  customers that they can buy with confidence.
                </div>
              )}
            </div>
            <div className="info-item">
              <div className="info-title" onClick={onHanleOpen}>
                <div className="sub-title">Shipping Info</div>
                {open ? <MinusOutlined /> : <PlusOutlined />}
              </div>
              {open && (
                <div className="info-description">
                  I'm a shipping policy. I'm a great place to add more
                  information about your shipping methods, packaging and cost.
                  Providing straightforward information about your shipping
                  policy is a great way to build trust and reassure your
                  customers that they can buy from you with confidence.
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetail;
