import ProductCart from "Components/PageHelper/ProductCart";
import { Button, Col, Row } from "Components/UI-Library";
import { UnlockOutlined } from "Components/UI-Library/Icons";
import { useStoreState } from "easy-peasy";
import React from "react";

import "./index.less";

const Checkout = () => {
  const cart = useStoreState((state) => state.cart.cart);

  return (
    <Row className="checkout-wrapper">
      <Col span={16} offset={4}>
        <Row gutter={60}>
          <Col span={16}>
            <div className="sub-title">My Cart</div>
            <ProductCart />
          </Col>
          <Col span={8}>
            <div className="sub-title">Order Summary</div>
            <Row justify="space-between">
              <Col>Subtotal</Col>
              <Col>
              ${cart ? cart.reduce((acc, cur) => acc + cur.price, 0) : 0}
              </Col>
            </Row>
            <Row justify="space-between" className="shipping">
              <Col>Shipping</Col>
              <Col>Free</Col>
            </Row>
            <Row align="middle" justify="space-between" className="total">
              <Col className="sub-total">Total</Col>
              <Col className="price-total">
              ${cart ? cart.reduce((acc, cur) => acc + cur.price, 0) : 0}
              </Col>
            </Row>
            <Button type="primary">
              <UnlockOutlined />
              Checkout
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Checkout;
