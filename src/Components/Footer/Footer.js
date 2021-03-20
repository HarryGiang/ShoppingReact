import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./index.less";
import FacebookIcon from "Assets/Images/ic-facebook.png";
import InstagramIcon from "Assets/Images/ic-instagram.png";
import PinterestIcon from "Assets/Images/ic-pinterest.png";
import { ROUTER } from "Constants/CommonContants";
import { Col, Row } from "Components/UI-Library";

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <div className="footer-wrapper">
      <Row>
        <Col span={6}>
          <div className="footer-item">
            <Link to={ROUTER.Home} className="logo">
              VISAGE
            </Link>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer-item">
            <div className="footer-content">
              <div className="title">{t("shop")}</div>
              <div>
                <Link className="link" to={ROUTER.Shop}>
                  {t("Shop all")}
                </Link>
              </div>
              <div>
                <Link className="link" to="/adults">
                  {t("Adults")}
                </Link>
              </div>
              <div>
                <Link className="link" to="/kids">
                  {t("SKids")}
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer-item">
            <div className="footer-content">
              <div className="title">{t("Policy")}</div>
              <div>
                <Link className="link" to="/shipping-&-returns">
                  {t("Shipping & Returns")}
                </Link>
              </div>
              <div>
                <Link className="link" to="/store-policy">
                  {t("Store Policy")}
                </Link>
              </div>
              <div>
                <Link className="link" to="/payment-methods">
                  {t("Payment Methods")}
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer-item">
            <div className="footer-content">
              <div className="title">{t("Contact Us")}</div>
              <div>{t("Tel. 123-456-7890")}</div>
              <div>
                <a className="link" href="mailto:info@mysite.com">
                  {t("info@mysite.com")}
                </a>
              </div>
              <div>
                <a className="social-link" href="www.facebook.com">
                  <img src={FacebookIcon} alt="" />
                </a>
                <a className="social-link" href="www.instagram.com">
                  <img src={InstagramIcon} alt="" />
                </a>
                <a className="social-link" href="www.pinterest.com">
                  <img src={PinterestIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="absolute-footer">
        {t("© 2023 by Visage. Proudly created with")} <a href="#">Wix.com</a>
      </div>
    </div>
  );
};

export default Footer;
