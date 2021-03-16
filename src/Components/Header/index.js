import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Row, Col } from "Components/UI-Library";
import UserIcon from "Assets/Icons/ic-user.svg";
import CartIcon from "Assets/Icons/ic-cart.svg";

import "./index.less";

const HeaderLayout = () => {
  const { t } = useTranslation(["header"]);
  return (
    <>
      <div className="header">
        <div className="nav-menu">
          <Link className="nav-item" to="/shop">
            {t("shop")}
          </Link>
          <Link className="nav-item" to="/faq">
            {t("faq")}
          </Link>
          <Link className="nav-item" to="/contact">
            {t("contact")}
          </Link>
        </div>
        <div>
          <Link className="logo" to="/">
            {t("visage")}
          </Link>
        </div>
        <div className="user-cart">
          <div className="login">
            <img src={UserIcon} alt="" />
            {t("login")}
          </div>
          <div className="shopping-cart">
            <img src={CartIcon} alt="" />
            <div className="quantity">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLayout;
