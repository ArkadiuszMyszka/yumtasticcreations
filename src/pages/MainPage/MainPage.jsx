import React from "react";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "./MainPage.styled"; 

export const MainPage = () => {
   
    return (
    <main>
    <Header />
        <Container />
        <PreviewCategories />
    <Footer />
    </main>

); 
};

