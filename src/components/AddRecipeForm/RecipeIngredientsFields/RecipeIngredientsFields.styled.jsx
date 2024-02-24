import styled from "styled-components";

export const AddRecipeIngredientsContainer = styled.div`
  max-width: 375px;
  padding-bottom: 44px;

  @media (min-width: 768px) and (max-width: 1199px) {
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
  width: 92px;
  padding: 4px 10px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-color: #7e7e7e;
  border-radius: 18px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 110px;
  }
`;
export const IngredietsListSetting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 16px;
  }
`;

export const InputFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 24px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCust = styled.div`
  width: 194px;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 398px;
  }
`;

export const Input = styled.input`
  max-width: 84px;
  border: none;
  text-align: end;
  height: 53;
  border-radius: 6px 0 0 6px;
  background-color: #f5f5f5;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 97px;
    height: 59px;
  }
`;

export const SelectUnit = styled.select`
  max-width: 84px;

  border: none;
  height: 50px;
  padding: 5px;
  border-radius: 0 6px 6px 0;
  background-color: #fff;

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 59px;
  }
`;
