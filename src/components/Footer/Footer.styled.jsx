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

    @media (min-width: 768px) and (max-width: 1199px) {
        align-items: flex-end;
        gap: 15px;
        justify-content: flex-start;
        margin-top: -12px;
        padding-left: 22px;
        

}

    @media (min-width: 1200px) {

}
`;

export const LogoSvg = styled.svg`
    fill: #EBF3D4;
    height: 32px;
    stroke: #8BAA36;
    width: 32px;

    @media (min-width: 768px) and (max-width: 1199px) {
        height: 44px;
        width: 44px;

}

    @media (min-width: 1200px) {

}
`;

export const LogoName = styled.p`
    color: #FAFAFA;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5%;

    @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 28px;
        margin-bottom: 8px;

}

    @media (min-width: 1200px) {

}

`;

export const Box = styled.div`
    @media (min-width: 768px) and (max-width: 1199px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 15px;
        padding-top: 35px;

}

    @media (min-width: 1200px) {

}
`;

export const AboutBox = styled.div`
    padding-left: 30px;
`;

export const About = styled.div`
    display: none;

    @media (min-width: 768px) and (max-width: 1199px) {
        color: #FAFAFA;
        display: block;
        font-size: 14px;
        letter-spacing: -2%;
        line-height: 1.29;

}

    @media (min-width: 1200px) {

}
`;

export const AboutItem = styled.li`
    @media (min-width: 768px) and (max-width: 1199px) {
        margin-bottom: 10px;

}

    @media (min-width: 1200px) {

}
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 45px;
    margin-top: 15px;

    @media (min-width: 768px) and (max-width: 1199px) {
        align-items: flex-start;
        gap: 15px;
        padding-right: 100px;

}

    @media (min-width: 1200px) {

}
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

    @media (min-width: 768px) and (max-width: 1199px) {
        flex-direction: row;
        gap: 10px;
        justify-content: center;

}

    @media (min-width: 1200px) {

}
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) and (max-width: 1199px) {
        margin-top: 18px;
}

    @media (min-width: 1200px) {

}
`;

export const MailSvg = styled.svg`
    fill: #22252A;
    height: 12px;
    margin-bottom: -28px;
    margin-left: 15px;
    stroke: #FAFAFA;
    width: 16px;

    @media (min-width: 768px) and (max-width: 1199px) {
        height: 16px;
        margin-bottom: -33px;
        margin-left: 12px;
        width: 20px; 
}

    @media (min-width: 1200px) {

}
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

    @media (min-width: 768px) and (max-width: 1199px) {
        height: 46px;
        width: 259px;
        max-width: 250px;
}

    @media (min-width: 1200px) {

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
        font-size: 18px;
        height: 50px;
        margin: 0;
        width: 187px;
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
    transform: translate(-93%, -50%);

    @media (min-width: 768px) and (max-width: 1199px) {
        top: 63%;
        transform: translate(-180%, 50%);
}

     @media (min-width: 1200px) {
}
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

    @media (min-width: 768px) and (max-width: 1199px) {
        background: url(${footer_m});
        background-position: right -70px bottom -150px;
        background-repeat: no-repeat;
        background-size: 393px 404px;
}

     @media (min-width: 1200px) {
}
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