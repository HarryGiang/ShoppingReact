import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserIcon from "../../../Assets/Icons/ic-user.svg";
import CartIcon from "../../../Assets/Icons/ic-cart.svg";
import { COLORS } from "Constants/CommonContants";

export const Header = () => {
  return (
    <HeaderWrapper>
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
            Log In
          </div>
          <div className="shopping-cart">
            <img src={CartIcon} alt="" />
            <div className="quantity">0</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  .header {
    color: ${COLORS.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 89px;
    margin: 0 auto;
    .nav-menu {
      .nav-item {
        margin-right: 30px;
        color: ${COLORS.black};
      }
    }
    .logo {
      letter-spacing: 8px;
      font-size: 24px;
      color: ${COLORS.black};
    }
    .user-cart {
      display: flex;
      align-items: center;
      .login {
        display: flex;
        align-items: center;
        margin-right: 20px;
        img {
          margin-right: 20px;
        }
      }
      .shopping-cart {
        position: relative;
        display: inline-block;
        .quantity {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
        }
      }
    }
  }
`;
