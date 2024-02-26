import styled from "styled-components";

export const AddRecipeIngredientsContainer = styled.div`
  max-width: 345px;
  padding-bottom: 44px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding-bottom: 100px;
  }
`;
export const AddBoxTitle = styled.h2`
  display: inline-block;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: #3e4462;
  letter-spacing: -0.02em;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 92px;
  height: 28px;
  padding: 4px 10px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-color: #7e7e7e;
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    width: 110px;
  }
`;
export const IngredietsListSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCust = styled.div`
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 398px;
  }
`;

export const Input = styled.input`
  max-width: 50px;
  border: none;
  text-align: end;
  border-radius: 6px 0 0 6px;
  background-color: #f5f5f5;
  height: 50px;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const SelectUnit = styled.select`
  max-width: 60px;

  border: none;
  height: 50px;
  padding: 4px;
  border-radius: 0 6px 6px 0;
  background-color: #f5f5f5;

  @media screen and (min-width: 768px) {
    /* max-width: px; */
    height: 62px;
  }
`;
