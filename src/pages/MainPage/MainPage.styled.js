import styled from 'styled-components';
import spinachIMG from '../../images/graphics/spinach_3.png'

export const Main = styled.main`
@media (min-width: 1200px) {
    background-position: 0% 90%;
    background-size: 730px;
}
@media (min-width: 768px) and (max-width: 1199px) {
    background-position: 0% 89%;
    background-size: 500px;
}
background-image: url(${spinachIMG});
background-repeat: no-repeat;
background-position: 0% 90%;
background-size: 350px;
`;

export const Container = styled.div`
@media (min-width: 1200px) {
    height: 800px;
}
@media (min-width: 768px) and (max-width: 1199px) {
    height: 640px;
}
display: flex
justify-content: center;
width: 100%;
height: 777px;
background: cyan;
`