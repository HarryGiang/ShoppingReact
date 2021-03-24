import { Col, Row, InputNumber, Button } from "Components/UI-Library";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";
import { CloseOutlined } from "Components/UI-Library/Icons";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductCart = () => {
  const cart = useStoreState((state) => state.cart.cart);
  const setRemoveProduct = useStoreActions(
    (action) => action.cart.setRemoveProduct
  );

  const onChange = (value) => {
    console.log("changed", value);
  };
  const handleRemoveCart = (payload) => {
    setRemoveProduct(payload);
  };

  return (
    <div className="product-cart-wrapper">
      {cart.length ? (
        cart.map((item) => {
          return (
            <Row justify="space-between" className="product-item" key={item.id}>
              <Col>
                <Row gutter={16}>
                  <Col span={10}>
                    <div className="product-image">
                      <Link to="">
                        <img src={item.image[1]} alt="" />
                      </Link>
                    </div>
                  </Col>
                  <Col span={14}>
                    <Link to="">
                      <div className="product-name">{item.name}</div>
                    </Link>
                    <div className="product-price">${item.price}</div>
                    <div className="product-color">Color: </div>
                    <InputNumber
                      size="small"
                      min={1}
                      value={1}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row gutter={48}>
                  <Col span={12} className="product-price-total">
                    ${item.price}
                  </Col>
                  <Col span={12}>
                    <Button className="btn-remove" onClick={() => handleRemoveCart(item)}>
                      <CloseOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })
      ) : (
        <div className="empty-cart">Cart is empty !</div>
      )}
    </div>
  );
};

export default ProductCart;
