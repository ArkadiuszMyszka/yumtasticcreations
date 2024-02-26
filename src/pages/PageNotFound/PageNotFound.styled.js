import styled from "styled-components";

export const PageWrapper = styled.div`
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

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Img = styled.img`
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  min-width: 206px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 450px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 500px;
  }
`;

export const Title = styled.h2`
  font-family: Poppins, sans-serif;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #8b8b8b;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;
