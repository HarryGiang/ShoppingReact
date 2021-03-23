import { Col, Row, InputNumber } from "Components/UI-Library";
import React from "react";
import { Link } from "react-router-dom";
import { products } from "Constants/CommonContants";
import "./index.less";
import { CloseOutlined } from "Components/UI-Library/Icons";

const ProductCart = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="product-cart-wrapper">
      {products.map((item) => {
        return (
          <Row justify="space-between" className="product-item" key={item.id}>
            <Col>
              <Row gutter={16}>
                <Col span={10}>
                  <div className="product-image">
                    <Link to="">
                      <img src={item.image[2]} alt="" />
                    </Link>
                  </div>
                </Col>
                <Col span={14}>
                  <Link to="">
                    <div className="product-name">{item.name}</div>
                  </Link>
                  <div className="product-price">${item.price}</div>
                  <div className="product-color">Color: {item.color}</div>
                  <InputNumber
                    size="small"
                    min={1}
                    defaultValue={1}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={48}>
                <Col span={12} className="product-price-total">${item.price}</Col>
                <Col span={12}>
                  <Link to>
                    <CloseOutlined />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default ProductCart;
