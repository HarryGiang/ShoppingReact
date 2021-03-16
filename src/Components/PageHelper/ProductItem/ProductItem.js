import React from "react";
import { Link } from "react-router-dom";
import './index.less';

export const ProductItem = ({ name, price, image, tag }) => {
  return (
    <div className="product-wrapper">
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
    </div>
  );
};
