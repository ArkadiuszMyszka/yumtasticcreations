import React from "react";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import {Footer} from "../../components/Footer/Footer";
import { Main } from "./MainPage.styled"; 
import { Yummy } from "../../components/Yummy/Yummy";
import { Header } from "../../components/Header/Header"

export const MainPage = () => {
    return (
    <Main>
    <Header />
    <Yummy />
        <PreviewCategories />
    <Footer />
    </Main>
); 
};