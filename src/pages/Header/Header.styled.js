import styled from "styled-components";
import backgroundImage from "../../images/graphics/spinach_2.png";
import saladImage from "../../images/graphics/salad.png";

export const Background = styled.main`
  // width: 676px;
  // height: 944px;
  // filter: blur(4px);
  // transform: rotate(-65deg);
  @media (min-width: 1200px) {
    background-position: 50% 65%;
    background-size: 115%;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    background-position: 60% 70%;
    background-size: 180%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: 200%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.3) 78.98%,
      transparent
    ),
    url(${backgroundImage});
`;
export const Container = styled.div`
  @media (min-width: 1200px) {
    width: 544px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 520px;
  }
  width: 305px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  font-family: Poppins;
  font-style: normal;
  isolation: isolate;
  margin: 0 16px;
`;

export const LogoSVG = styled.img`
  @media (min-width: 768px) {
    width: 68px;
  }
  width: 54px;
  align-self: flex-start;
`;

export const Recipes = styled.main`
  width: auto;
  position: relative;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${saladImage});
  flex-direction: column;
  justify-content: flex-end;
`;

export const Paragraph = styled.p`
  position: absolute;
  width: 225px;
  top: 20%;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 8px;
`;

export const SeeRecipes = styled.button`
  margin-top: 4px;
  display: flex;
  margin-left: auto;
  background: none;
  border: none;
`;

export const Menu = styled.object`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

export const Nav = styled.object`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

export const ProfilePic = styled.img`
  @media (min-width: 768px) {
    width: 68px;
  }
  width: 54px;
  align-self: flex-start;
`;
export const ProfileName = styled.text`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: #22252a;
`;
export const Navigation = styled.img`
  @media (min-width: 768px) {
    width: 68px;
  }
  margin-left: 10px;
  width: 54px;
  align-self: flex-start;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.01em;
`;
export const TitleLeft = styled.text`
  color: #8baa36;
`;
export const TitleDescription = styled.text`
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Highlight = styled.text`
  color: #8baa36;
`;

export const ArrowSVG = styled.img`
  width: 19px;
  height: 18px;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const Input = styled.input`
  border-radius: 8px;
  transform-origin: right top;
  width: 225px;
`;

export const Button = styled.button`
  border-radius: 8px;
  transform-origin: right top;
  position: absolute;
  display: flex;
  margin-left: auto;
`;
