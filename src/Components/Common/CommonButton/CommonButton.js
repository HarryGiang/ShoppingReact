import { COLORS } from "Constants/CommonContants";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CommonButton = ({ label, path }) => {
  return (
    <ButtonWrapper>
      <Link to={path}>
        <button className="button">{label}</button>
      </Link>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  .button {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid ${COLORS.blue};
    padding: 10px 40px;
    color: ${COLORS.blue};
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: ${COLORS.blue};
      color: ${COLORS.white};
    }
    &:focus {
      outline: none;
    }
  }
`;
