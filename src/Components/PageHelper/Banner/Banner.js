import React from "react";
import styled from "styled-components";
import banner from "Assets/Images/banner.jpg";
import { CommonButton } from "Components/Common/CommonButton";

export const Banner = () => {
  return (
    <BannerWrapper>
      <div className="banner">
        <img src={banner} alt="" />
        <div className="content">
          <div>
            Reusable
            <br />
            Face Masks
          </div>
          <CommonButton label="Shop Now" />
        </div>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  .banner {
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
    .content {
      font-size: 68px;
      position: absolute;
      top: 50%;
      left: 100px;
      transform: translateY(-50%);
    }
  }
`;
