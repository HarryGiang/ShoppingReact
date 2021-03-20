import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import { ROUTER } from 'Constants/CommonContants';
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./index.less";


const Header = () => {
  const { t } = useTranslation(["header"]);
  return (
    <>
      <div className="header">
        <div className="nav-menu">
          <div className="menu-item">
            <Link className="nav-item" to={ROUTER.Shop}>
              {t("shop")}
            </Link>
            <div className="dropdown-menu">
              <div>
                <Link className="nav-item" to="/adults">
                  {t("adults")}
                </Link>
              </div>
              <div>
                <Link className="nav-item" to="/kids">
                  {t("kids")}
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <Link className="nav-item" to={ROUTER.FAQ}>
              {t("faq")}
            </Link>
          </div>
          <div className="menu-item">
            <Link className="nav-item" to={ROUTER.Contact}>
              {t("contact")}
            </Link>
          </div>
        </div>
        <div>
          <Link className="logo" to={ROUTER.Home}>
            {t("visage")}
          </Link>
        </div>
        <div className="user-cart">
          <Link to={ROUTER.Login} className="login">
            <UserOutlined className="user-icon" />
            {t("login")}
          </Link>
          <Link to={ROUTER.Cart} className="shopping-cart">
            <ShoppingCartOutlined className="cart-icon" />
            <Badge className="quantity" size="small" count={5}>
              {/* <a href="#" className="head-example" /> */}
            </Badge>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
