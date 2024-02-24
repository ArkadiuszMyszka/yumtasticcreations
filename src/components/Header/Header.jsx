import React from "react";
import logo from "../../images/ui/logo/logo_desktop_tablet.svg";
import exPic from "../../images/ui/no_photo/no_photo_s.svg";
import burger from "../../images/ui/other_icons/menu_burger.svg";
import darkSwitch from "../../images/ui/switch/switch_white.svg";
import {
  Container,
  HeaderLogo,
  Menu,
  Nav,
  ProfilePic,
  ProfileName,
  Navigation,
  DesktopMenu,
  DarkMode,
} from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <Menu>
        <HeaderLogo src={logo}></HeaderLogo>
        <DesktopMenu />
        <Nav>
          <ProfilePic src={exPic}></ProfilePic>
          <ProfileName>Example</ProfileName>
          <Navigation src={burger}></Navigation>
          <DarkMode src={darkSwitch}></DarkMode>
        </Nav>
      </Menu>
    </Container>
  );
};

export default Header;
