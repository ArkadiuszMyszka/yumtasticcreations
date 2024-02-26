import React, { useState } from "react";
import burger from "../../images/ui/other_icons/menu_burger.svg";
import Modal from "react-modal";
import styled from "styled-components";
import search from "../../images/ui/other_icons/search.svg";
import closeBtn from "../../images/ui/other_icons/x.svg";
import logo from "../../images/ui/logo/logo_mobile.svg";
import logoWideScreen from "../../images/ui/logo/logo_desktop_tablet.svg";
import { useMediaQuery } from "react-responsive";
import { Toggle } from "../DarkModeToggle/DarkModeToggle.jsx";

const ModalLayout = styled(Modal)`
  width: 100vw;
  height: 100vh;
  // position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ebf3d4;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 100;
`;
const ModalContent = styled.div`
  // Dodaj dowolne style CSS dla treści modala
  ul {
    display: flex;
    color: #333;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 0;
  }

  li {
    display: flex;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: #22252a;
    gap: 8px;
    &:focus,
    &:hover {
      color: #8baa36;
      --color1: #8baa36;
    }
  }

  button {
    height: 24px;
    width: 24px;
    cursor: pointer;
    position: absolute;
    background: none;
    border: none;
    top: 1em;
    right: 0;
  }
`;

// export const Navigation = styled.img`
//   @media (min-width: 1200px) {
//     display: none;
//   }
//   @media (min-width: 768px) and (max-width: 1199px) {
//     width: 32px;
//     height: 32px;
//     margin-left: 36px;
//   }
//   margin-left: 10px;
//   width: 28px;
//   height: 28px;
// `;

export const Navigation = styled.img`
  @media (max-width: 767px) {
    display: block;
    margin-left: 10px;
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const SvgMenuIcon = styled.svg`
  height: 24px;
  width: 24px;
  cursor: pointer;
  --color1: var(--svg-color);
  stroke: var(--color1);
  transition: 500ms ease;
  display: flex;

  &:focus,
  &:hover {
    --color1: #8baa36;
  }
`;

const SvgCloseMenu = styled.svg`
  position: absolute;
  top: 3px;
  right: 16px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  stroke: white;
  transition: 500ms ease;
`;

const MenuLogo = styled.img`
  position: absolute;
  top: 18px;
  left: 16px;
  width: 40px;
  height: 40px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 44px;
    height: 44px;
  }
`;

const Position = styled.div`
  position: absolute;
  left: 32px;
  bottom: 32px;
`;

export const MobileMenu = () => {
  const isWideScreen = useMediaQuery({ minWidth: 768 });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [isDark, setIsDark] = useState(false);
  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <div>
        <Navigation onClick={openModal} src={burger}></Navigation>
        <ModalLayout isOpen={modalIsOpen} onRequestClose={closeModal}>
          <ModalContent>
            <div>
              {isWideScreen ? (
                <MenuLogo src={logoWideScreen}></MenuLogo>
              ) : (
                <MenuLogo src={logo}></MenuLogo>
              )}
            </div>
            <ul>
              <li>Categories</li>
              <li>Add recipes</li>
              <li>My recipes</li>
              <li>Favorites</li>
              <li>Shopping list</li>
              <li>
                <SvgMenuIcon>
                  <use href={`${search}#icon-search`}></use>
                </SvgMenuIcon>
                Search
              </li>
            </ul>
            <Position>
              <div>
                <Toggle
                  isChecked={isDark}
                  handleChange={() => setIsDark(!isDark)}
                />
              </div>
            </Position>
            <button onClick={closeModal}>
              <SvgCloseMenu>
                <use href={`${closeBtn}#x`}></use>
                <use href={`${closeBtn}#xb`}></use>
              </SvgCloseMenu>
            </button>
          </ModalContent>
        </ModalLayout>
      </div>
    </div>
  );
};

export default MobileMenu;
