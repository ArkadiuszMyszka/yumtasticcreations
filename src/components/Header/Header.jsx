import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../images/ui/logo/logo_mobile.svg";
import logoWideScreen from "../../images/ui/logo/logo_desktop_tablet.svg";
import search from "../../images/ui/other_icons/search.svg";
import userData from "../ExampleUserData/ExampleUserData";
import { MobileMenu, openModal } from "../HeaderMenu/HeaderMenu";
import { Toggle } from "../../components/DarkModeToggle/DarkModeToggle.jsx";
import {
  Container,
  HeaderLogo,
  Menu,
  Nav,
  ProfilePic,
  ProfileName,
  Navigation,
  DesktopMenu,
  SvgIcon,
} from "./Header.styled";

export const Header = () => {
  const isWideScreen = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const [isDark, setIsDark] = useState(false);
  return (
    <body data-theme={isDark ? "dark" : "light"}>
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
    </body>
  );
};
