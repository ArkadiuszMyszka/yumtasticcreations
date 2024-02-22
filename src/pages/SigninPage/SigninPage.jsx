import React from "react";
import { Container, Link, BgGraphics } from "../RegisterPage/RegisterPage.styled.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm.jsx"

export const SigninPage = () => {
    return (<Container> 
        <BgGraphics/>
        <LoginForm/>
        <Link to="/register">Registration</Link>
    </Container>);
};