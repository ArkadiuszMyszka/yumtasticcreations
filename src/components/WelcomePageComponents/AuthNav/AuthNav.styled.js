import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
@media (min-width: 768px) {
    margin-top: 40px;
}
display: flex;
justify-content: center;
gap: 18px;
margin-top: 44px;
`;

const buttonStyles = `
@media (min-width: 768px) {
    border-top-left-radius: 30px;
    border-top-right-radius: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 30px;
    font-size: 16px;
    line-height: 24px;
}
border-top-left-radius: 20px;
border-top-right-radius: 35px;
border-bottom-left-radius: 35px;
border-bottom-right-radius: 20px;
font-family: Poppins;
font-weight: 400;
font-size: 14px;
line-height: 21px;
transition: 0.3s;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
color: white;
`;

export const RegistrationButton = styled(Link)`
@media (min-width: 768px) {
    width: 184px; 
    height: 67px;
}
border: none;
background-color: #8BAA36;
width: 132px; 
height: 45px;
${buttonStyles}

&:hover {
    background-color: #22252A;
}
`;

export const SignInButton = styled(Link)`
@media (min-width: 768px) {
    width: 141px; 
    height: 67px;
}
background-color: transparent;
border-color: white;
border: 2px solid ;
width: 95px; 
height: 45px;
${buttonStyles}

&:hover {
    border-color: #8BAA36;
    color: #8BAA36;
}
`;