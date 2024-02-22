import styled from "styled-components";

export const TitleText = styled.h2`
  font-family: Poppins, sans-serif;
  color: #001833;
  font-weight: 600;
  font-size: 28px;
  font-style: normal;
  line-height: 28px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const Section = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 110px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 130px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 110px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
