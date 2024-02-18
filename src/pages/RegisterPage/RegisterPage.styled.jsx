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
    background-image: url(${registration_signin_s}), url(${register_rectangle_s});
    background-position: top 87px center, bottom 0 center;
    background-repeat: no-repeat;
    background-size: 285px 250px, 100vw 58vh;

    @media (min-width: 768px) and (max-width: 1199px) {
    background-image: url(${registration_signin_m}), url(${register_rectangle_m});
    background-position: top 100px center, bottom 0 center;
    background-size: 409px 359px, 100% 59%;
}

    @media (min-width: 1200px) {
    background-image: url(${registration_signin_l}), url(${register_rectangle_l});
    background-position: bottom 170px left 110px, bottom 0 center;
    background-size: 532px 468px, 100% 40%;
}
`;

export const Link = styled(NavLink)`
    color: #fafafa;
    font-size: 14px;
    position: absolute;
    text-align: center;
    text-decoration: underline;
    bottom: 3%;
    width: 100vw;

    &:hover,
    :focus {
        color: #8BAA36;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
}

    @media (min-width: 1200px) {
    bottom: 20%;
    font-size: 16px;
    left: 22%;
}
`;