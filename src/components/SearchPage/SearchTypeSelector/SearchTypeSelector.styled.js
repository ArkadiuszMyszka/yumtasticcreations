import styled from "styled-components";

export const BoxSelector = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    height: 41px;
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    height: 47px;
  }
`;

export const Label = styled.label`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Select = styled.select`
  width: 146px;
  height: 100%;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #000000;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  cursor: pointer;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    width: 175px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
  }

  &:focus {
    outline: none;
  }
`;
