import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col, Breadcrumb, Button, Collapse, InputNumber } from "Components/UI-Library";
import get from "lodash/get";
import { HeartOutlined, PlusOutlined, MinusOutlined } from "Components/UI-Library/Icons";

import "./index.less";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const { Panel } = Collapse;

const ProductDetail = () => {
  const productDetail = useStoreState((state) => state.products.productDetail);
  const setCart = useStoreActions((actions) => actions.cart.setCart);

  const onChange = (value) => {
    console.log("changed", value);
  };
  const onHandleAdd = (payload) => {
    setCart(payload);
  };
  return (
    <div className="product-wrapper">
      <Row className="breadcrumb">
        <Col span={12}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/:id">{productDetail.name}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={12}></Col>
      </Row>
      <Row gutter={[30, 30]}>
        <Col span={14}>
          <div className="product-image">
            <Carousel infiniteLoop="true">
              {get(productDetail, "image", []).map((item) => (
                <div>
                  <img src={item} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="short-description">{productDetail.description}</div>
        </Col>
        <Col span={10}>
          <div className="product-name">{productDetail.name}</div>
          <div className="sku">SKU: 00{productDetail.id}</div>
          <div className="product-price">${productDetail.price}</div>
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
                <Button onClick={() => onHandleAdd(productDetail)}>
                  Add to cart
                </Button>
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
          <Collapse
            ghost
            expandIconPosition={"right"}
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
          >
            <Panel header="Product Info" key="1">
              <p>
                I’m a Return and Refund policy. I’m a great place to let your
                customers know what to do in case they are dissatisfied with
                their purchase. Having a straightforward refund or exchange
                policy is a great way to build trust and reassure your customers
                that they can buy with confidence.
              </p>
            </Panel>
            <Panel header="Return & Refund Policy" key="2">
              <p>
                I’m a Return and Refund policy. I’m a great place to let your
                customers know what to do in case they are dissatisfied with
                their purchase. Having a straightforward refund or exchange
                policy is a great way to build trust and reassure your customers
                that they can buy with confidence.
              </p>
            </Panel>
            <Panel header="Shipping Info" key="3">
              <p>
                I'm a shipping policy. I'm a great place to add more information
                about your shipping methods, packaging and cost. Providing
                straightforward information about your shipping policy is a
                great way to build trust and reassure your customers that they
                can buy from you with confidence.
              </p>
            </Panel>
          </Collapse>
          {/* <div className="product-info">
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
                {open ? (
                  <MinusOutlined className="icon" />
                ) : (
                  <PlusOutlined className="icon" />
                )}
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
          </div> */}
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetail;
