import styled from "styled-components";

export const RecipePreparationContainer = styled.div`
  margin-top: 50px;

  tablet: @media (min-width: 768px) {
    margin-top: 96px;
  }

  desktop: @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    gap: 50px;

    margin-top: 100px;
  }
`;

export const RecipePreparationBox = styled.div`
  margin-bottom: 40px;

  tablet: @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const RecipePreparationHeader = styled.h2`
  margin-bottom: 28px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: #3e4462;

  tablet: @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const RecipePreparationList = styled.ul`
  counter-reset: section;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RecipePreparationItem = styled.li`
  display: flex;
  align-items: flex-start;

  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.02em;

  color: rgba(0, 0, 0, 0.8);

  &::before {
    counter-increment: section;
    content: counter(section);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    min-width: 21px;
    min-height: 21px;
    margin-right: 14px;

    font-weight: 600;
    font-size: 12px;
    line-height: 1.6;

    color: #fff;

    background-color: #8baa36;
    border-radius: 50%;
  }

  tablet: @media (min-width: 1280px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const RecipeImage = styled.img`
  display: block;

  width: 100%;
  height: 250px;

  border-radius: 8px;

  object-fit: cover;

  tablet: @media (min-width: 768px) {
    width: 433px;
    height: 332px;
  }

  desktop: @media (min-width: 1280px) {
    flex-shrink: 0;
  }
`;
