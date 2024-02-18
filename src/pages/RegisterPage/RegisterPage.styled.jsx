import styled from "styled-components";
import register_rectangle_s from '../../images/graphics/RegisterPage/register_rectangle_s.png';
import register_rectangle_m from '../../images/graphics/RegisterPage/register_rectangle_m.png';
import register_rectangle_l from '../../images/graphics/RegisterPage/register_rectangle_l.png';
import registration_signin_s from '../../images/graphics/RegisterPage/registration_signin_s.png';
import registration_signin_m from '../../images/graphics/RegisterPage/registration_signin_m.png';
import registration_signin_l from '../../images/graphics/RegisterPage/registration_signin_l.png';


export const Container = styled.div`
    height: 100vh;
    background-image: url(${registration_signin_s}), url(${register_rectangle_s});
    background-position: top 21% center, bottom 0 center;
    background-repeat: no-repeat;
    background-size: 285px 250px, 100% 58%;

    @media (min-width: 768px) and (max-width: 1199px) {
    background-image: url(${registration_signin_m}), url(${register_rectangle_m});
    background-position: top 15% center, bottom 0 center;
    background-size: 409px 359px, 100% 59%;
}

    @media (min-width: 1200px) {
    background-image: url(${registration_signin_l}), url(${register_rectangle_l});
    background-position: bottom 55% left 12%, bottom 0 center;
    background-size: 532px 468px, 100% 40%;
}
`;