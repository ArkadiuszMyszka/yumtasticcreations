import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import register_rectangle_s from '../../images/graphics/RegisterPage/register_rectangle_s.png';
import register_rectangle_m from '../../images/graphics/RegisterPage/register_rectangle_m.png';
import register_rectangle_l from '../../images/graphics/RegisterPage/register_rectangle_l.png';
import registration_signin_s from '../../images/graphics/RegisterPage/registration_signin_s.png';
import registration_signin_m from '../../images/graphics/RegisterPage/registration_signin_m.png';
import registration_signin_l from '../../images/graphics/RegisterPage/registration_signin_l.png';


export const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    background-image: url(${register_rectangle_s});
    background-position: 58% 100%;
    background-repeat: no-repeat;
    background-size: 100% 58%;

    @media (min-width: 768px) and (max-width: 1199px) {
    background-image: url(${register_rectangle_m});
    background-position: 58% 100%;
    background-size: 100% 59%;
}

    @media (min-width: 1200px) {
    background-image: url(${register_rectangle_l});
    background-position: 58% 100%;
    background-size: 100% 40%;
}
`;

export const BgGraphics = styled.div`
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -120%);
    height: 31vh;
    max-height: 250px;
    width: 76vw;
    max-width: 285px;
    background-image: url(${registration_signin_s});
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 768px) and (max-width: 1199px) {
    height: 35vh;
    max-height: 359px;
    left: 52.5%;
    width: 53vw;
    max-width: 409px;
    background-image: url(${registration_signin_m});
}

    @media (min-width: 1200px) {
    top: 54%;
    left: 15%;
    margin-right: -15%;
    transform: translate(-15%, -50%);
    background-image: url(${registration_signin_l});
    height: 61vh;
    max-height: 468px;
    width: 37vw;
    max-width: 532px;
}
`;

export const Link = styled(NavLink)`
    color: #fafafa;
    cursor: pointer;
    font-size: 14px;
    position: absolute;
    text-align: center;
    text-decoration: underline;
    bottom: 11%;
    width: 100vw;

    &:hover,
    :focus {
        color: #8BAA36;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
    bottom: 9%;
    font-size: 16px;
}

    @media (min-width: 1200px) {
    bottom: 11%;
    font-size: 16px;
    left: 22%;
}
`;