import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "Assets/Images/ic-facebook.png";
import InstagramIcon from "Assets/Images/ic-instagram.png";
import PinterestIcon from "Assets/Images/ic-pinterest.png";

import "./index.less";

const FooterLayout = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-item">
          <Link to="/" className="logo">
            VISAGE
          </Link>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <div className="title">Shop</div>
            <div>
              <Link className="link" to="/shop">
                Shop all
              </Link>
            </div>
            <div>
              <Link className="link" to="/adults">
                Adults
              </Link>
            </div>
            <div>
              <Link className="link" to="/kids">
                SKids
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <div className="title">Policy</div>
            <div>
              <Link className="link" to="/shipping-&-returns">
                Shipping & Returns
              </Link>
            </div>
            <div>
              <Link className="link" to="/store-policy">
                Store Policy
              </Link>
            </div>
            <div>
              <Link className="link" to="/payment-methods">
                Payment Methods
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="footer-content">
            <div className="title">Contact Us</div>
            <div>Tel. 123-456-7890</div>
            <div>
              <a className="link" href="mailto:info@mysite.com">
                info@mysite.com
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
      </div>
      <div className="absolute-footer">
        © 2023 by Visage. Proudly created with <a href="#">Wix.com</a>
      </div>
    </div>
  );
};

export default FooterLayout;
