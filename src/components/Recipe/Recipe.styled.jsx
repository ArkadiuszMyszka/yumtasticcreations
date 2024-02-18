import styled from "styled-components";

export const Recipe = styled.section`
width: 100%,
height:100%,
`;
// mobile first hero
export const RecipeContainer = styled.Container`
  position: relative;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 487px;
  padding-bottom: 100px;

  tablet: @media (min-width: 768px) {
    height: 495px;
    margin-bottom: 50px;
    padding-bottom: 200px;
  }

  desktop: @media (min-width: 1280px) {
    height: 493px;
  }
`;
