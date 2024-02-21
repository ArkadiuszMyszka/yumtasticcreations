import styled from "styled-components";
import footer_s from '../../images/graphics/footer_s.png';
import footer_m from '../../images/graphics/footer_m.png';
import footer_l from '../../images/graphics/footer_l.png';

export const FooterBox = styled.div`
    font-family: Poppins;
    position: absolute;
    bottom: 0px;
    width: 100vw;
`;

export const StyledFooter = styled.footer`
    background-color: #22252A;
`;

export const Logo = styled.div`

`;

export const LogoSvg = styled.svg`
    fill: #EBF3D4;
    height: 32px;
    stroke: #8BAA36;
    width: 32px;
`;

export const LogoName = styled.p`

`;

export const About = styled.div`
    visibility: hidden;
`;

export const AboutItem = styled.li`

`;

export const Nav = styled.nav`

`;

export const NavItem = styled.a`

`;

export const Newsletter = styled.div`
    
`;

export const NewsletterTitle = styled.h3`
    
`;

export const NewsletterTxt = styled.p`
    
`;

export const Form = styled.form`
    
`;

export const Input = styled.input`
    
`;

export const Button = styled.button`
    
`;

export const ErrorMsg = styled.p`
    
`;

export const Info = styled.div`
    background: url(${footer_s});
    background-repeat: no-repeat;
    background-position: right -40px bottom -60px;
    background-size: 216px 222px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #22252A;
    font-size: 10px;
    height: 67px;
`;

export const InfoTextBold = styled.div`
    font-weight: 500;
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 60px;
`;

export const Icon = styled.a`
    
`;

export const Svg = styled.svg`
    fill: #8BAA36;
    height: 20px;
    width: 20px;
`;

//     @media (min-width: 768px) and (max-width: 1199px) {
// }

//     @media (min-width: 1200px) {
// }
// `;