import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { Container, Link } from "./RegisterPage.styled";

export const RegisterPage = () => {
    return (<Container> 
        <AuthForm/>
        <Link to="/signin">Sign In</Link>
    </Container>);
};