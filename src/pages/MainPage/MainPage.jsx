import React from "react";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import { Header } from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import { Container, Main } from "./MainPage.styled"; 

export const MainPage = () => {
    return (
    <Main>
    <Header />
        <Container> 
            <h1>This space waits for main component of MainPage ;</h1>
        </Container>
        <PreviewCategories />
    <Footer />
    </Main>
); 
};