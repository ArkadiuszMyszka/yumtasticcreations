import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`;

export const SearchFormInput = styled.input`
  font-family: Poppins, sans-serif;
  margin: 0 auto;
  height: 52px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: #3e4462;
  background-color: #ffffff;
  transition: border 0.3s ease;
  width: 100%;
  min-width: 295px;
  padding-left: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  box-shadow: 0px 4px 97px 0px #22252a08;
  outline: none;

  @media (min-width: 768px) {
    width: 362px;
    font-size: 16px;
    height: 59px;
  }
  @media (min-width: 1280px) {
    width: 510px;
    height: 70px;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: 113px;
  height: 53px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: #fafafa;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #8baa36;
  border-radius: 24px 44px;
  border: none;
  transform: translate(-98%);

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 70px;
  }

  &:focus,
  &:hover {
    background-color: #22252a;
  }
  // &:focus-within {
  //   background-color: #8baa36;
  // }
`;
