import banner from "Assets/Images/banner.jpg";
import { Button } from "Components/UI-Library";
import { ROUTER } from "Constants/CommonContants";
import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

// import { CommonButton } from "Components/Common/CommonButton";

export const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="" />
        <div className="banner-content">
          Reusable
          <br />
          Face Masks
          <div className="mt-lg">
            <Link to={ROUTER.Shop}><Button className="btn">Shop Now</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
