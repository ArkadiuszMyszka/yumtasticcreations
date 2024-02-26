import styled from "styled-components";

export const AddContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitlePopular = styled.h2`
  line-height: 1;
  display: inline-block;
  padding-bottom: 32px;
  padding-top: 36px;
  font-weight: 600;
  font-size: 24px;
  color: #3e4462;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;
export const RecipeUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RecipeListItem = styled.li`
  min-width: 343px;

  @media screen and (min-width: 768px) {
    width: 334px;
  }

  @media screen and (min-width: 1440px) {
    width: 318px;
  }
`;

export const ImageBox = styled.div`
  border-radius: 8px;
`;

export const Image = styled.img`
  display: block;
  width: 104px;
  height: 85px;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const AddRecipeCard = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: #707070;
  padding-bottom: 13px;
  width: 340px;

  @media screen and (min-width: 768px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 320px;
  }
`;

export const CardTitle = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #3e4462;
`;

export const CardText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: #7e7e7e;
  opacity: 0.6;
`;

export const AboutAddRecipe = styled.div`
  padding: 0 13px;
`;
