import styled from "styled-components";

export const RecipeItemContainer = styled.div`
  height: 152px;
  height: 9.5em;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 14px 9px;
  font-family: Poppins;
  font-weight: 500;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;
export const BackgroundImage = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  margin-right: 14px;
`;

export const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const RecipeTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 8px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 500;
`;

export const RecipeDescription = styled.p`
  font-size: 10px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 400;
`;

export const CookingTime = styled.p`
  align-self: flex-start;
  justify-self: end;
  font-size: 14px;
  color: #3e4462;
`;

export const RemoveButton = styled.button`
  background-color: #8baa36;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  align-self: flex-end;
`;

export const SeeRecipeButton = styled.button`
  height: 27px;
  width: 87px;
  background-color: #8baa36;
  text-decoration: none;
  font-family: Poppins;
  text-align: center;
  font-size: 10px;
  color: #fff;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  align-self: flex-end;
`;
