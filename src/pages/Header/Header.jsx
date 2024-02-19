import React from "react";
import {
  Background,
  Container,
  LogoSVG,
  Recipes,
  Paragraph,
  SeeRecipes,
  Menu,
  Nav,
  ProfilePic,
  ProfileName,
  Navigation,
  Title,
  TitleLeft,
  TitleDescription,
  Highlight,
  ArrowSVG,
  Label,
  Input,
  Button,
} from "./Header.styled";
import logo from "../../images/ui/logo/logo_desktop_tablet.svg";
import exPic from "../../images/ui/no_photo/no_photo_s.svg";
import burger from "../../images/ui/other_icons/menu_burger.svg";
import arrow from "../../images/ui/other_icons/arrow_right.svg";

export const Header = () => {
  return (
    <Background>
      <Container>
        <Menu>
          <LogoSVG src={logo}></LogoSVG>
          <Nav>
            <ProfilePic src={exPic}></ProfilePic>
            <ProfileName>John</ProfileName>
            <Navigation src={burger}></Navigation>
          </Nav>
        </Menu>
        <div>
          <Title>
            <TitleLeft>So</TitleLeft>Yummy
          </Title>
          <TitleDescription>
            "What to cook?" is not only a recipe app. It is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </TitleDescription>
        </div>
        <Recipes>
          <Paragraph>
            <Highlight>Delicious and healthy</Highlight> way to enjoy a variety
            of fresh ingredients in one satisfying meal.
            <SeeRecipes>
              See recipes<ArrowSVG src={arrow}></ArrowSVG>
            </SeeRecipes>
          </Paragraph>
        </Recipes>

        <Label>
          <Input placeholder="Beef" type="text"></Input>
          <Button type="submit">Search</Button>
        </Label>
      </Container>
    </Background>
  );
};
