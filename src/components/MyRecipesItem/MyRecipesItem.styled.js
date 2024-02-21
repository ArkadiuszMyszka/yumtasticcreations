import styled from "styled-components";

export const RecipeItemContainer = styled.div`
  height: 9.5em;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 14px 9px;
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
  justify-content: space-between;
  width: 100%;
`;

export const RecipeTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const RecipeDescription = styled.p`
  position: relative;
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
`;

export const CookingTime = styled.p`
  align-self: flex-start;
  justify-self: end;
  font-size: 14px;
  color: #666;
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
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 24px 44px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 8px;
`;
