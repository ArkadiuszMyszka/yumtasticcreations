import styled from "styled-components";

export const Recipe = styled.section`
  width: 100%;
  height: 100%;
  margin: 0px;
`;

export const RecipeContainer = styled.div`
  position: relative;
  padding-bottom: 100px;
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-bottom: 200px;
  }

  @media (min-width: 1200px) {
    padding-bottom: 260px;
  }
`;
