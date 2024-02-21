import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: #001833;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-left: 32px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1025px) {
    font-size: 44px;
    line-height: 44px;
  }
`;
