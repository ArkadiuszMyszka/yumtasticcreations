import styled from "styled-components";

export const OtherCategoriesBtn = styled.button`
  @media (min-width: 1200px) {
    margin-bottom: 118px;
  }
  @media (min-width: 768px) {
    width: 239px;
    height: 61px;
    font-size: 16px;
    line-height: 24px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: transparent;
  border: 2px solid;
  border-color: #8baa36;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  border-top-left-radius: 20px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 20px;
  width: 195px;
  height: 46px;
  transition: 0.3s;
  margin-bottom: 100px;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: #8baa36;
  }
`;
