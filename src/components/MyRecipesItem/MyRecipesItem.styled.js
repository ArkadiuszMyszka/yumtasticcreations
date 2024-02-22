import styled from "styled-components";

export const RecipeItemContainer = styled.div`
  max-height: 152px;
  border-radius: 8px;
  margin: 10px;
  padding: 14px 9px;
  font-family: Poppins;
  font-weight: 500;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 124px auto; /* Pierwsza kolumna dla obrazu, druga dla reszty zawartości */
  gap: 0 14px;
`;
export const BackgroundImage = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;
  margin-right: 14px;
`;

export const RecipeDetails = styled.div`
  display: grid;
  gap: 14px 0;
  flex-direction: column;
  max-height: 124px;
  flex: 1;
`;

export const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecipeTitle = styled.h3`
  padding-top: 6px;
  margin: 0 10px 0 0;
  font-size: 14px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1em;
`;
export const RemoveButton = styled.button`
  background-color: #8baa36;
  width: 24px;
  height: 24px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const RecipeDescription = styled.p`
  margin: 0;
  font-size: 10px;
  color: #3e4462;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.2em;
`;

export const RecipeFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CookingTime = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1em;
  color: #3e4462;
  align-self: flex-end;
`;

export const SeeRecipeButton = styled.button`
  margin: 0;
  height: 27px;
  width: 87px;
  background-color: #8baa36;
  text-decoration: none;
  font-family: Poppins;
  text-align: center;
  font-size: 10px;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
