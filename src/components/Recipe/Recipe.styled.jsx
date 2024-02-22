import styled from "styled-components";

export const Recipe = styled.section`
width: 100%,
height:100%,
`;
// mobile first hero
export const RecipeContainer = styled.div`
  position: relative;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 487px;
  padding-bottom: 100px;

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 495px;
    margin-bottom: 50px;
    padding-bottom: 200px;
  }

  @media (min-width: 1200px) {
    height: 493px;
  }
`;
