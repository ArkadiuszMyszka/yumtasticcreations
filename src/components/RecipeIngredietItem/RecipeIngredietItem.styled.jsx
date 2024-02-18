import styled from "styled-components";

export const RecipeIngredientLi = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 14px 10px 10px;

  background: #ebf3d4;
  border-radius: 8px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 16px 32px 16px 24px;
  }

  @media (min-width: 1200px) {
    padding: 0 40px 0 32px;
  }
`;

export const RecipeIngredientContainer = styled.div`
  flex-grow: var(--header-ingredients-grow);
  display: flex;
  align-items: center;
`;

export const RecipeIngredientPhoto = styled.img`
  --image-size: 57px;
  display: block;

  width: var(--image-size);
  height: var(--image-size);

  @media (min-width: 768px) and (max-width: 1199px) {
    --image-size: 112px;
  }

  @media (min-width: 1200px) {
    --image-size: 128px;
  }
`;
export const RecipeIngredientTitle = styled.p`
  margin-left: 8px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.02em;

  color: #3e4462;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 24px;

    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.01em;
  }

  @media (min-width: 1200px) {
    margin-left: 40px;
  }
`;

export const RecipeIngredieQuantity = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 4px;

  width: var(--header-number-width);
`;

export const RecipeIngredietQuantityText = styled.p`
  min-width: 40px;
  width: fit-content;
  padding: 4px;

  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  text-align: right;

  color: #fafafa;

  background: #8baa36;
  border-radius: 4px;

  @media (min-width: 768px) and (max-width: 1199px) {
    min-width: 62px;
    padding: 4px 8px;

    font-size: 18px;
    line-height: 1.5;
  }
`;

export const RecipeIngredientFavorite = styled.div`
  display: flex;
  justify-content: center;

  width: var(--header-favorite-width);

  @media (min-width: 768px) and (max-width: 1199px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const RecipeIngredientCheckbox = styled.label`
  --checkbox-size: 18px;
  --checkbox-check-size: 9px;
  cursor: pointer;
  position: relative;

  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: ${({ checked }) => (checked ? "block" : "none")};

    width: var(--checkbox-check-size);
    height: var(--checkbox-check-size);
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.77377 1.01217C8.04472 0.612515 8.58836 0.508181 8.98801 0.779134C9.38767 1.05009 9.492 1.59372 9.22105 1.99338L4.47925 8.98753C4.13243 9.49908 3.37879 9.49908 3.03197 8.98753L0.779622 5.66531C0.508669 5.26566 0.613003 4.72202 1.01266 4.45107C1.41231 4.18012 1.95595 4.28445 2.2269 4.68411L3.75561 6.93895L7.77377 1.01217Z' fill='%238BAA36'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-size: cover;

    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    --checkbox-size: 35px;
    --checkbox-check-size: 17px;
  }
`;

export const RecipeIngredientFavoriteInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  fill: #8baa36;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RecipeIngredientCheckboxLoader = styled.span`
  display: block;

  transform: scale(0.5);

  @media (min-width: 768px) and (max-width: 1199px) {
    transform: scale(1);
  }
`;
