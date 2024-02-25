import styled from "styled-components";
import spinachBottomIMG from "../../images/graphics/spinach_3.png";
import spinachCenterIMG from "../../images/graphics/spinach_2.png";
import spinachTopIMG from "../../images/graphics/spinach_1.png";
import triangleMobile from "../../images/graphics/background-triangle-mobile.png";
import triangleTablet from "../../images/graphics/background-triangle-tablet.png";
import triangleDesktop from "../../images/graphics/background-triangle-desktop.png";

export const Main = styled.main`
  @media (min-width: 1200px) {
    background-position: 0% 90%, 100% 0%, 0% 0%, 100% 0%;
    background-size: 730px, 900px, 120px, 700px;
    background-image: url(${spinachBottomIMG}), url(${spinachCenterIMG}),
      url(${spinachTopIMG}), url(${triangleDesktop});
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    background-position: 0% 89%, 280% 0%, 0% 1%, 100% 0%;
    background-size: 520px, 700px, 75px, 330px;
    background-image: url(${spinachBottomIMG}), url(${spinachCenterIMG}),
      url(${spinachTopIMG}), url(${triangleTablet});
  }
  background-image: url(${spinachBottomIMG}), url(${spinachCenterIMG}),
    url(${spinachTopIMG}), url(${triangleMobile});
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: 0% 90%, 35% 3%, 0% 2%, 100% 5%;
  background-size: 350px, 750px, 50px, 264px;
`;

export const Container = styled.div`
@media (min-width: 1200px) {
    height: 800px;
}
@media (min-width: 768px) and (max-width: 1199px) {
    height: 640px;
}
display: flex;
justify-content: center;
width: 100%;
height: 777px;
background: cyan;
`;
