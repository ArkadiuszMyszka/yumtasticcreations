import React from "react";
import {
  Background,
  Container,
  Recipes,
  RecipesDescription,
  RecipesButton,
  Title,
  TitleLeft,
  TitleDescription,
  Highlight,
  ArrowSVG,
  LabelStyled,
  HeroDiv,
  TrailedArrow,
  LabelContainer,
  CenterLeaf,
} from "./Yummy.styled";
import "./Yummy.css";
import { useMediaQuery } from "react-responsive";
import arrow from "../../../images/ui/other_icons/arrow_right.svg"

export const Yummy = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <Background>
      {/* <CenterImage /> */}
      <CenterLeaf>
      <Container>
        <HeroDiv>
          <Title>
            <TitleLeft>So</TitleLeft>Yummy
          </Title>
          <TitleDescription>
            "What to cook?" is not only a recipe app. It is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </TitleDescription>
          <div
            style={{
              display: isTablet ? "block" : "none",
            }}>
            <LabelStyled />
          </div>
        </HeroDiv>
        <Recipes>
          <RecipesDescription>
            <Highlight>Delicious and healthy</Highlight> way to enjoy a variety
            of fresh ingredients in one satisfying meal.
            <RecipesButton>
              See recipes<ArrowSVG src={arrow}></ArrowSVG>
            </RecipesButton>
            <TrailedArrow />
          </RecipesDescription>
        </Recipes>
        <LabelContainer>
        <div
            style={{
              display: isTablet ? "none" : "block",
            }}>
            <LabelStyled />
          </div>
        </LabelContainer>
      </Container>
      </CenterLeaf>
    </Background>
  );
};
