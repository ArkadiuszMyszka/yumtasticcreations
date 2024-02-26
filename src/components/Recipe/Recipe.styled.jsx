import styled from "styled-components";

export const Recipe = styled.section`
  width: 100%;
  height: 100%;
`;

export const RecipeContainer = styled.div`
  position: relative;
  padding-bottom: 100px;
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  @media screen and (min-width: 375px) {
    min-width: 375px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding-bottom: 260px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
