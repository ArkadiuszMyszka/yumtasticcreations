import styled from 'styled-components';
import backgroundImage from '../../images/graphics/start-salad-full.png'

export const Background = styled.main`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-image: url(${backgroundImage});
background-size: 200%;
background-position: bottom;
background-repeat: no-repeat;
position: relative;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
`;


export const Container = styled.div`
width: 305px;
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
font-family: Poppins;
isolation: isolate;
`;

export const LogoSVG = styled.svg``;

export const Title = styled.h1`
margin: 0;
color: white;
font-weight: 600;
font-size: 24px;
line-height: 1.5;
`;

export const Paragraph = styled.p`
margin-top: 14px;
color: white;
font-weight: 400;
font-size: 14px;
line-height: 1.28;
font-align: center;
`;

