import { Container, RegistrationButton, SignInButton } from "./AuthNav.styled";

export const AuthNav = () => {
return (
<Container>
    <RegistrationButton to="RegisterPage">
       Registration
    </RegistrationButton >
    <SignInButton to="SigninPage">
       Sign In
    </SignInButton>
</Container>
);
};