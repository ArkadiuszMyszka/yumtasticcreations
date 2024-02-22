import styled from 'styled-components';

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