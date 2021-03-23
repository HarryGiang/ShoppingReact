import React from "react";
import { CloseOutlined } from "Components/UI-Library/Icons";
import { Button, Col, Drawer, Row } from "Components/UI-Library";

import "./index.less";
import { useStoreActions, useStoreState } from "easy-peasy";
import { ROUTER } from "Constants/CommonContants";
import { Link } from "react-router-dom";
import ProductCart from "Components/PageHelper/ProductCart";

const Cart = () => {
  const visible = useStoreState((state) => state.cart.visible);
  const setVisible = useStoreActions((actions) => actions.cart.setVisible);
  const setOnClose = useStoreActions((actions) => actions.cart.setOnClose);

  const showCart = () => {
    setVisible(visible);
  };
  return (
    <div className="cart-wrapper">
      <Button type="primary" onClick={showCart} mask={false}>
        Open
      </Button>
      <Drawer
        closeIcon={<CloseOutlined />}
        width={350}
        title="My Cart"
        placement="right"
        onClose={setOnClose}
        visible={visible}
        footer={
          <Row align="middle" gutter={[12,12]} className="footer-cart">
            <Col span={12} className="sub-total">
              Total:
            </Col>
            <Col span={12} className="price-total">
              $10.00
            </Col>
            <Col span={24}>
              <Link to={ROUTER.Checkout}>
                <Button>View Cart</Button>
              </Link>
            </Col>
          </Row>
        }
      >
        <ProductCart />
      </Drawer>
    </div>
  );
};

export default Cart;
