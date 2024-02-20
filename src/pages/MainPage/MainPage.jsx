import React from "react";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const MainPage = () => {
   
    return (
    <main>
    <Header />
        <p>Main Page</p>
        <PreviewCategories />
    <Footer />
    </main>

); 
};

