import React from "react";
import { Link } from "react-router-dom";
// import { UserOutlined, ShoppingCartOutlined } from 'Components/UI-Library/Icons';
import UserIcon from "Assets/Icons/ic-user.svg";
import CartIcon from "Assets/Icons/ic-cart.svg";

import "./index.less";


const HeaderLayout = () => {
  return (
    <>
      <div className="header">
        <div className="nav-menu">
          <Link className="nav-item" to="/shop">
            Shop
          </Link>
          <Link className="nav-item" to="/faq">
            FAQ
          </Link>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <Link className="logo" to="/">
            VISAGE
          </Link>
        </div>
        <div className="user-cart">
          <div className="login">
            <img src={UserIcon} alt="" />
            {/* <UserOutlined /> */}
            Log In
          </div>
          <div className="shopping-cart">
            <img src={CartIcon} alt="" />
            {/* <ShoppingCartOutlined /> */}
            <div className="quantity">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;
