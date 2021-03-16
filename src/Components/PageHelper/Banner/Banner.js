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
        <div className="content">
          <div>
            Reusable
            <br />
            Face Masks
          </div>
          <Button>Shop Now</Button>
        </div>
      </div>
    </>
  );
};
