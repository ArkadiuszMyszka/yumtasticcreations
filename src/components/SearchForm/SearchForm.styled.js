import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`;

export const SearchFormInput = styled.input`
  font-family: Poppins, sans-serif;
  height: 52px;
  padding-left: 32px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: #3e4462;
  background-color: #ffffff;
  transition: border 0.3s ease;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  box-shadow: 0px 4px 97px 0px #22252a08;
  outline: none;
  :hover {
    border: 1px solid #23262a33;
  }
  :focus {
    border: 1px solid #23262a33;
  }
  @media (min-width: 768px) {
    padding-left: 38px;
    font-size: 14px;
    height: 59px;
  }
  @media (min-width: 1280px) {
    height: 70px;
    padding-left: 48px;
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 113px;
  height: 53px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: background: #FAFAFA;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #8BAA36;
  border-radius: 24px 44px;
  transform: translate(-98%);

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    height: 70px;
  }

  &:focus,
  &:hover {
    background-color: #22252A;
  }
`;
