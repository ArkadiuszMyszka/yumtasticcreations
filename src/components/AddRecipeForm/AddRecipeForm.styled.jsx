import styled from "styled-components";

export const AddRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  padding-top: 25px;
  padding-bottom: 100px;
  gap: 36px;
  align-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 29px;
    padding-bottom: 100px;
    gap: 50px;
  }

  @media (min-width: 1200px) {
    padding-top: 28px;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  color: #001833;
  font-size: 28px;
  display: flex;
  right: -50%;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const AddRecipeBox = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 50px;
    justify-content: space-between;
  }
`;

export const AddRecipeDescript = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 343px;

  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 16px;
    width: 393px;
  }

  @media (min-width: 1200px) {
    gap: 20px;
  }
`;
export const Form = styled.form`
  padding-bottom: 100px;
  @media (min-width: 1200px) {
    padding-bottom: 0px;
  }
`;

export const Svg = styled.svg`
  max-width: "50px";
  max-height: "50px";
  stroke: black;
`;
export const FormImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 22px;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: strech;
    max-width: 350px;
    padding-bottom: 52px;
    font-size: 16px;
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    display: flex;
    max-width: 400px;
    gap: 20px;
    padding-bottom: 50px;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  border-bottom: 1px solid #e0e0e0;
  padding: 5px 0px;
  border: none;
  border-color: #bdbdbd;
  color: #000;
  opacity: 0.5;
  font-size: 14px;

  &::placeholder {
    color: #000;
  }
`;

export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 5px 0px;
  border-color: #e0e0e0;
`;
export const InputSelectTitle = styled.p`
  color: #000;
  opacity: 0.5;
`;
export const SelectCategory = styled.select`
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 12px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
`;

export const SelectCooking = styled.select`
  border: none;
  width: 100px;
  text-align: center;

  outline: none;
`;
export const AddRecipeBoxTitle = styled.h2`
  padding-bottom: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: #3e4462;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 18px;
  }
`;
export const TextAreaContainer = styled.div`
  max-width: 175px;
  padding-bottom: 18px;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 500px;

    padding-bottom: 32px;
  }
`;
export const TextArea = styled.textarea`
  resize: none;
  padding: 10px 16px;
  width: 100%;
  height: 100px;

  border: 1px solid;
  border-radius: 6px;
  border-color: #d9d9d9;
  outline: none;
  scroll-behavior: auto;

  color: #000;

  background-color: #d9d9d9;

  &::placeholder {
    color: #000;
    opacity: 0.5;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 220px;
    padding: 16px 28px;
  }
  @media (min-width: 1200px) {
    padding: 16px 22px;
  }
`;

export const AddRecipeFollowPopular = styled.div`
  @media (min-width: 1200px) {
    max-width: 320px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 14px 48px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: #fafafa;
  background-color: #22252a;

  border-radius: 35px 70px;

  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)";

  &:hover,
  &:focus {
    color: #8baa36;

    background-color: #8baa36;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 14px 64px;
  }
`;
