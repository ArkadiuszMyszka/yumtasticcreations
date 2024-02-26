import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/ui/logo/logo_mobile.svg";
import logoWideScreen from "../../images/ui/logo/logo_desktop_tablet.svg";
import search from "../../images/ui/other_icons/search.svg";
import userData from "../ExampleUserData/ExampleUserData";
import MobileMenu from "../HeaderMenu/MobileMenu.js";
import { Toggle } from "../DarkModeToggle/DarkModeToggle.jsx";
import {
  Container,
  HeaderLogo,
  Menu,
  Nav,
  ProfilePic,
  ProfileName,
  DesktopMenu,
  SvgIcon,
} from "./Header.styled.js";

export const Header = () => {
  const isWideScreen = useMediaQuery({ minWidth: 768 });
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`header ${isDark ? "dark" : "light"}`}>
      <Container>
        <Menu>
          <div>
            {isWideScreen ? (
              <HeaderLogo src={logoWideScreen}></HeaderLogo>
            ) : (
              <HeaderLogo src={logo}></HeaderLogo>
            )}
          </div>
          <DesktopMenu></DesktopMenu>

          <SvgIcon>
            <use href={`${search}#icon-search`}></use>
          </SvgIcon>

          <Nav>
            <ProfilePic src={userData.profileImage} alt="User Profile" />
            <ProfileName>{userData.username}</ProfileName>
            <MobileMenu />
            <div>
              {isWideScreen ? (
                <Toggle
                  isChecked={isDark}
                  handleChange={() => setIsDark(!isDark)}
                />
              ) : null}
            </div>
          </Nav>
        </Menu>
      </Container>
    </div>
  );
};

export default Header;
