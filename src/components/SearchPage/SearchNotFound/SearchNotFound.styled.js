import styled from "styled-components";

export const EmptyWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const EmptyText = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
  font-feature-settings: "liga" off;
  color: #d9d9d9;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const EmptyImgWrapper = styled.div`
  width: 208px;
  height: 133px;
  margin: 0 auto;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
    margin-bottom: 32px;
  }
`;
