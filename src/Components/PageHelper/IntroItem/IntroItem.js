import { COLORS } from "Constants/CommonContants";
import React from "react";
import styled from "styled-components";

export const IntroItem = ({ background, image, title, content }) => {
  return (
    <IntroItemWrapper>
      <div className="intro-item" style={{ backgroundColor: { background } }}>
        <img src={image} alt="" />
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </IntroItemWrapper>
  );
};

const IntroItemWrapper = styled.div`
  width: calc(100% / 3) px;
  padding: 20px;
  text-align: center;
  .intro-item {
    padding: 50px;
    .title {
      font-size: 20px;
      color: ${COLORS.blue};
      margin: 40px 0 30px 0;
    }
  }
`;
