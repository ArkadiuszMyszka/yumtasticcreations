import styled from "styled-components";

export const RecipeIngredientsListTable = styled.section`
  --header-ingredients-grow: 1;
  --header-number-width: 45px;
  --header-favorite-width: 54px;

  @media screen and (min-width: 768px) {
    --header-number-width: 78px;
    --header-favorite-width: 97x;
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    --header-number-width: 78px;
    margin-top: 50px;
  }
`;

export const RecipeIngredientsHeader = styled.div`
  padding: 12px 14px 14px;
  margin-bottom: 24px;
  display: flex;

  width: 100%;

  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  color: #fafafa;

  border-radius: 8px;
  background-color: #8baa36;

  @media screen and (min-width: 768px) {
    padding: 21px 32px 21px;

    margin-bottom: 32px;

    font-size: 18px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    padding: 21px 40px 40px;

    margin-bottom: 50px;
  }
`;

export const RecipeIngredientsHeaderItem = styled.span`
  display: block;
  &:nth-of-type(1) {
    flex-grow: var(--header-ingredients-grow);
  }
  &:nth-of-type(2) {
    width: var(--header-number-width);
    text-align: center;
    gap: 18px;
  }
  &:nth-of-type(3) {
    width: var(--header-favorite-width);

    text-align: center;
  }
`;

export const RecipeIngredientsLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 38px;
  }

  @media screen and (min-width: 1440px) {
    gap: 109px;
  }
`;
