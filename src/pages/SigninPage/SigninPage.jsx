import React from "react";
import { Container, Link } from "../RegisterPage/RegisterPage.styled.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm.jsx"

export const SigninPage = () => {
    return (<Container> 
        <LoginForm/>
        <Link to="/register">Registration</Link>
    </Container>);
};