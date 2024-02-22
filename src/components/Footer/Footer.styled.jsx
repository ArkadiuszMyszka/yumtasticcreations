import styled from "styled-components";
import footer_s from '../../images/graphics/footer_s.png';
import footer_m from '../../images/graphics/footer_m.png';
import footer_l from '../../images/graphics/footer_l.png';

export const FooterBox = styled.div`
    font-family: Poppins;
    /* ** position absolute to delete with bottom ** */
    position: absolute;
    bottom: 0px;
    width: 100vw;
`;

export const StyledFooter = styled.footer`
    background-color: #22252A;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

export const LogoSvg = styled.svg`
    fill: #EBF3D4;
    height: 32px;
    stroke: #8BAA36;
    width: 32px;
`;

export const LogoName = styled.p`
    color: #FAFAFA;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5%;


`;

export const About = styled.div`
    display: none;
`;

export const AboutItem = styled.li`

`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 45px;
    margin-top: 15px;
`;

export const NavItem = styled.a`
    color: #FAFAFA;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    transition-duration: 0.5s;

    &:focus,
    &:hover {
        color: #8BAA36;
    }

`;

export const Newsletter = styled.div`
    
`;

export const NewsletterTitle = styled.h3`
    display: none;
`;

export const NewsletterTxt = styled.p`
    display: none;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MailSvg = styled.svg`
    fill: #22252A;
    height: 12px;
    margin-bottom: -28px;
    margin-left: 15px;
    stroke: #FAFAFA;
    width: 16px;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid #FAFAFA;
    border-radius: 6px;
    color: #FAFAFA;
    font-family: Poppins;
    font-size: 14px;
    height: 38px;
    line-height: 1.13;
    padding-left: 35px;
    margin: 0 auto;
    outline: transparent;
    overflow: hidden;
    width: 54vw;
    max-width: 165px;

    &::placeholder {
        color: #FAFAFA;
        font-size: 10px;
        letter-spacing: -2%;
    }
`;

export const Button = styled.button`
    background-color: #8BAA36;
    border: 1px solid #8BAA36;
    border-radius: 6px;
    color: #fafafa;
    cursor: pointer;
    font-family: Poppins;
    font-size: 14px;
    height: 38px;
    line-height: 1.13;
    padding: 0;
    margin: 0 auto;
    width: 54vw;
    max-width: 204px;
    transition-duration: 0.5s;

    &:focus,
    &:hover {
        color: #22252A;
    }

    &:disabled {
        background-color: #D9D9D9;
        border: 1px solid #D9D9D9;
        color: #23262A;
    }

    @media (min-width: 768px) and (max-width: 1199px) {

}

    @media (min-width: 1200px) {

}

`;

export const ErrorMsg = styled.p`
    color: #E74A3B;
    font-size: 10px;
    position: absolute;
    top: 57%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-93%, -50%)
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
    padding-top: 45px;
`;

export const Icon = styled.a`
    
`;

export const Svg = styled.svg`
    fill: #8BAA36;
    height: 20px;
    width: 20px;
    transition: 0.5s;

    &:focus,
    &:hover {
        fill: #fafafa;
    }
`;

//     @media (min-width: 768px) and (max-width: 1199px) {
// }

//     @media (min-width: 1200px) {
// }
// `;