import React from "react";
import { Row, Col } from "antd";

import Headline from "Components/PageHelper/Headline";
import { ProductItem } from "Components/PageHelper/ProductItem";
import Product3 from "Assets/Images/10.jpg";
import Product2 from "Assets/Images/11.jpg";
import Product4 from "Assets/Images/15.jpg";
import Product1 from "Assets/Images/16.jpg";
import "./index.less";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <Headline label="Shop All" />
      <div className="product-list">
        <Row gutter={[40, 40]}>
          <Col span={6}>
            <ProductItem name="I'm a Product" price="10.00" image={Product1} />
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
            <ProductItem name="I'm a Product" price="10.00" image={Product3} />
          </Col>
          <Col span={6}>
            <ProductItem
              name="I'm a Product"
              price="10.00"
              image={Product4}
              tag="Sale"
            />
          </Col>
          <Col span={6}>
            <ProductItem name="I'm a Product" price="10.00" image={Product1} />
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
            <ProductItem name="I'm a Product" price="10.00" image={Product3} />
          </Col>
          <Col span={6}>
            <ProductItem
              name="I'm a Product"
              price="10.00"
              image={Product4}
              tag="Sale"
            />
          </Col>
          <Col span={6}>
            <ProductItem name="I'm a Product" price="10.00" image={Product1} />
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
            <ProductItem name="I'm a Product" price="10.00" image={Product3} />
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
    </div>
  );
};

export default Shop;
