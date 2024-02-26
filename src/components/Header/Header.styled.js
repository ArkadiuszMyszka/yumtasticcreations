import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./Header.css";
import { useState } from "react";

export const Container = styled.div`
  @media (min-width: 1200px) {
    padding: 18px 100px 0 100px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 18px 32px 0 32px;
  }

  display: flex;
  align-items: center;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  padding: 18px 16px 0 16px;
  color: var(--primary-text-color);
  background: var(--foreground-color);
`;

export const HeaderLogo = styled.img`
  display: flex;
  @media (min-width: 768px) {
    width: 44px;
    fill: blue;
  }
  width: 28px;
`;

export const Menu = styled.object`
  display: flex;
  justify-content: space-between;
  min-width: 343px;
  width: 100vw;
  height: 46px;
  align-items: center;
  background-color: var(--background-color);
  transition: background-color 250ms ease-in-out;
`;

export const Nav = styled.object`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`;

export const ProfilePic = styled.img`
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
`;
export const ProfileName = styled.div`
  @media (min-width: 768px) {
    font-size: 14px;
  }
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
`;

export const SvgIcon = styled.svg`
  display: none;
  @media (min-width: 1200px) {
    height: 32px;
    width: 32px;
    cursor: pointer;
    --color1: var(--svg-color);
    stroke: var(--color1);
    transition: 500ms ease;
    display: block;

    &:focus,
    &:hover {
      --color1: #8baa36;
    }
  }
`;

export const DesktopMenu = () => {
  const DesktopOnly = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const List = {
    listStyle: "none",
    display: "flex",
    justifContent: "center",
    alignItems: "center",
    gap: "30px",
  };

  // const Svg = {
  //   fill: "#8baa36",
  //   height: "32px",
  //   width: "32px",
  //   transition: "0.5s",
  //   cursor: "pointer",
  // };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const items = [
    { text: "Categories", link: "/categories" },
    { text: "Add Recipes", link: "/recipes" },
    { text: "My recipes", link: "/my" },
    { text: "Favorites", link: "/favorites" },
    { text: "Shopping list", link: "/shoppinglist" },
  ];

  return (
    <div>
      {DesktopOnly && (
        <ul style={List}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`list-item ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
