import React from "react";
import { Background, Container, LogoSVG, Title, Paragraph } from "./WelcomePage.styled";
// import { Link } from 'react-router-dom';

export const WelcomePage = () => {
return (
     <Background>
        <Container>
            <LogoSVG />
            <Title>
              Welcome to the app!
            </Title>
            <Paragraph>
                This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.
            </Paragraph>
        </Container>
     </Background>          
)
}