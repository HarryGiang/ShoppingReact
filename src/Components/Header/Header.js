import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import Cart from "Pages/Public/Cart";
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
            <Avatar size="small" className="avatar" icon={<UserOutlined />} />
            {t("login")}
          </Link>
          <Cart/>
        </div>
      </div>
    </>
  );
};

export default Header;
