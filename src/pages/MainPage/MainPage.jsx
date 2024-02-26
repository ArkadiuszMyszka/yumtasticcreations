import React from "react";
import { PreviewCategories } from "../../components/MainPageComponents/PreviewCategories/PreviewCategories";
import { Footer } from "../../components/Footer/Footer";
import { Main } from "./MainPage.styled";
import { Yummy } from "../../components/MainPageComponents/Yummy/Yummy";
import { Header } from "../../components/Header/Header";
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <Main>
      <Header />
      <Yummy />
      <PreviewCategories />
            <Outlet />
      <Footer />
    </Main>
  );
};
