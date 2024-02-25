import styled from "styled-components";
import { Link } from 'react-router-dom';

export const RecipeBtn = styled(Link)`
@media (min-width: 1200px) {
  width: 268px;
  top: 248px;
  left: 16px;
}
@media (min-width: 768px) and (max-width: 1199px) {
  width: 300px;
}
display: flex;
box-sizing: border-box;
align-items: center;
padding-left: 16px;
position: absolute;
border-radius: 8px;
top: 245px;
left: 18px;
font-family: Poppins;
font-size: 16px;
line-height: 20px;
font-weight: 500;
background-color: white;
border: none;
width: 307px;
height: 52px;
transition: 0.3s;
text-decoration: none;
color: #3E4462;

&:hover {
    background-color:#8BAA36;
    color: white;
`;