import banner from "Assets/Images/banner.jpg";
import { Button } from "Components/UI-Library";
import React from "react";
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
            <Button className="btn">Shop Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};
