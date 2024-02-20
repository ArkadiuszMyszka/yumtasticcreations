import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const Container = styled.div`
  @media (min-width: 1200px) {
    margin: 18px 100px 0 100px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    margin: 18px 32px 0 32px;
  }
  display: flex;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  margin: 18px 16px 0 16px;
`;

export const HeaderLogo = styled.img`
  @media (min-width: 768px) {
    width: 44px;
  }
  width: 28px;
  align-self: center;
`;

export const Menu = styled.object`
  display: flex;
  justify-content: space-between;
  min-width: 343px;
  width: 100vw;
  height: 46px;
  align-items: center;
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
export const ProfileName = styled.text`
  @media (min-width: 768px) {
    font-size: 14px;
  }
  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: #22252a;
`;
export const Navigation = styled.img`
  @media (min-width: 1200px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 32px;
    height: 32px;
    margin-left: 36px;
  }
  margin-left: 10px;
  width: 28px;
  height: 28px;
`;

export const DesktopMenu = () => {
  const DesktopOnly = useMediaQuery({
    query: "(min-width: 1200px)",
  });
  const List = {
    listStyle: "none",
    display: "flex",
    justifContent: "center",
    gap: "30px",
  };
  return (
    <div>
      {DesktopOnly && (
        <ul style={List}>
          <li>Categories</li>
          <li>Add recipes</li>
          <li>My recipes</li>
          <li>Favorites</li>
          <li>Shopping list</li>
        </ul>
      )}
    </div>
  );
};

export const DarkMode = styled.img`
  @media (max-width: 1199px) {
    display: none;
  }
  margin-left: 30px;
  width: 50px;
`;
