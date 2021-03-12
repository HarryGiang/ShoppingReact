import React from "react";
import styled from "styled-components";
import { COLORS } from "Constants/CommonContants";
import { Link } from "react-router-dom";

export const ProductItem = ({ name, price, image, tag }) => {
  return (
    <ProductItemWrapper>
      <Link to="/product:id" className="link">
        <div className="product-item">
          <div className="product-image">
            <img src={image} alt="" />
            <div className="quick-view">Quick View</div>
            {tag ? <div className="tag">{tag}</div> : ""}
          </div>
          <div className="product-content">
            <div className="product-name">{name}</div>
            <div className="product-price">${price}</div>
          </div>
        </div>
      </Link>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.div`
  width: 25%;
  padding: 20px;
  .link {
    color: ${COLORS.black};
  }
  .product-item {
    border: 1px solid ${COLORS.light_gray};
    cursor: pointer;

    .product-image {
      position: relative;
      overflow-y: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .quick-view {
        text-align: center;
        height: 0;
        width: 100%;
        background-color: ${COLORS.white};
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.2s ease-out;
      }
      .tag {
        background-color: ${COLORS.black};
        width: 95px;
        padding: 5px 10px;
        text-align: center;
        color: ${COLORS.white};
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    &:hover {
      .quick-view {
        padding-top: 10px;
        height: 40px;
      }
    }
    .product-content {
      padding: 15px 10px;
      text-align: center;
      .product-price {
        color: ${COLORS.blue};
        margin-top: 15px;
      }
    }
  }
`;
