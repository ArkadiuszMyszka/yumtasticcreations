import React from "react";
import { PreviewCategories } from "../../components/MainPageComponents/PreviewCategories/PreviewCategories.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "./MainPage.styled";
import { Yummy } from "../../components/MainPageComponents/Yummy/Yummy.jsx";
// import { Header } from "../../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <Main>
      <Yummy />
      <PreviewCategories />
      <Outlet />
    </Main>
  );
};
