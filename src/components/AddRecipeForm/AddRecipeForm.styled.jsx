import styled from "styled-components";

export const AddRecipeContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 73px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 102px;
  }
`;

export const AddRecipeBox = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  color: #001833;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0, 02em;
  text-align: left;
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const FormContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

// img {
//   display: block;
//   width: 100%;
//   height: auto;

// }

export const FormImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  font-size: 14px;
  padding-bottom: 44px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: stretch;
    max-width: 704px;
    padding-bottom: 104px;
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    max-width: 800px;
    gap: 50px;
    padding-bottom: 100px;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0px;
  /* border: none; */
  border-color: #e0e0e0;
  color: #000;
  font-size: 14px;

  &::placeholder {
    color: #000;
    opacity: 0.5;
  }
`;

export const Camera = styled.svg`
  fill: white;
  height: 50px;
  width: 50px;
  top: -50px;
  left: -50px;
  align-items: center;
  transform: translate(-50%, -50%);
`;

export const AddRecipeDescript = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 343px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    min-width: 400px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;
export const InputSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0px;
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
  padding: 8px 26px 8px 14px;
  min-width: 132px;
  font-size: 12px;
  border-radius: 6px;
  color: #000;
  background: #fff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
`;

export const SelectCooking = styled.select`
  border: none;
  min-width: 132px;
  outline: none;
  border-radius: 6px;
  color: #000;
  background: #fff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
`;
export const AddRecipeBoxTitle = styled.h2`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
`;
export const TextAreaContainer = styled.div`
  max-width: 360px;
  padding-bottom: 18px;

  @media screen and (min-width: 768px) {
    max-width: 500px;

    padding-bottom: 32px;
  }
`;
export const TextArea = styled.div`
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

  @media screen and (min-width: 768px) {
    height: 220px;
    padding: 16px 28px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px 22px;
  }
`;

export const AddRecipeFollowPopular = styled.div`
  @media screen and (min-width: 1440px) {
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
    color: #fafafa;

    background-color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 64px;
  }
`;
export const Section = styled.section`
  position: relative;
  padding-top: 114px;
  min-width: 320px;

  @media screen and (min-width: 768px) {
    padding-top: 136px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 164px;
  }
`;

export const SquareFirst = styled.div`
  position: absolute;
  top: 76px;
  left: 104px;
  width: 11px;
  height: 11px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background-color: #8baa36;

  @media screen and (min-width: 768px) {
    left: 187px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 14px;
    height: 14px;
    top: 116px;
    left: 228px;
  }
`;

export const SquareSecond = styled(SquareFirst)`
  top: 106px;
  left: 490px;

  @media screen and (min-width: 768px) {
    top: 89px;
    left: 694px;
  }

  @media screen and (min-width: 1024px) {
    width: 13px;
    height: 13px;
    left: 805px;
  }

  @media screen and (min-width: 1440px) {
    width: 13px;
    height: 13px;
    top: 129px;
    left: 1149px;
  }
`;

export const SquareBlack = styled.div`
  position: absolute;
  bottom: 0;
  left: 401px;
  width: 10px;
  height: 10px;
  top: 190px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background-color: #22252a;

  @media screen and (min-width: 768px) {
    top: 190px;
    width: 13px;
    height: 13px;
    left: 555px;
  }

  @media screen and (min-width: 1024px) {
    top: 190px;
    width: 13px;
    height: 13px;
    left: 705px;
  }

  @media screen and (min-width: 1440px) {
    width: 13px;
    height: 13px;
    top: 250px;
    left: 752px;
  }
`;
