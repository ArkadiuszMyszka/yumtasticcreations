import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: Poppins;
font-style: normal;
`;

export const CategoriesList = styled.ul`
@media (min-width: 1200px) {
  margin-top: 100px;
  width: 1240px;
}
@media (min-width: 768px) and (max-width: 1199px) {
  width: 704px;
  margin-top: 72px;
}
display: flex:
align-items: center;
width: 343px;
padding: 0;
margin: 0;
margin-top: 64px;
list-style-type: none;
`;

export const Category = styled.li`
@media (min-width: 1200px) {
  height: 505px;
  margin-bottom: 100px;
}
@media (min-width: 768px) and (max-width: 1199px) {
  height: 485px;
  margin-bottom: 50px;
}
display: flex:
width: 100%;
height: 445px;
margin-bottom: 32px;
&:last-child {
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 32px;
    }
  @media (min-width: 1200px) {
    margin-bottom: 14px;
    }
}
`;

export const CategoryTitle = styled.h2`
@media (min-width: 1200px) {
  font-size: 44px;
  line-height: 44px;
}   
@media (min-width: 768px) and (max-width: 1199px) {
    font-size: 32px;
    line-height: 32px;
  }
 color: #001833;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0;
  font-size: 28px;
  line-height: 28px;
`;

export const RecipesList = styled.ul`
@media (min-width: 1200px) {
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin: 50px 0;
}
@media (min-width: 768px) and (max-width: 1199px) {
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: 40px 0;
}
margin: 32px 0 24px;
list-style-type: none;
padding: 0;
`;

export const RecipeElement = styled.li`
@media (min-width: 1200px) {
  width: 300px;
  margin:0;
}
@media (min-width: 768px) and (max-width: 1199px) {
  width: 336px;
  margin:0;
}
height: 323px;
position: relative;
`;

export const RecipeImage = styled.img`
width: 100%;
height: 323px;
border-radius: 8px;
`;

export const RecipeButton = styled.button`
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
&:hover {
    background-color:#8BAA36;
    color: white;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

export const SeeAllButton = styled.button`
display: flex;
border: none;
background-color: #8AA936;
color: white;
border-radius: 6px;
font-family: Poppins;
font-size: 14px;
line-height: 18px;
padding: 10px 24px;
transition: 0.3s;
&:hover {
    background-color: #22252A;
}
`;

export const OtherCategoriesButton = styled.button`
@media (min-width: 1200px) {
  margin-bottom: 118px;
}
@media (min-width: 768px) {
  width: 239px;
  height: 61px;
  font-size: 16px;
  line-height: 24px;
}
display: flex;
justify-content: center;
align-items: center;
align-self: center;
background-color: transparent;
border: 2px solid ;
border-color: #8BAA36;
font-family: Poppins;
font-weight: 400;
font-size: 14px;
line-height: 21px;
border-top-left-radius: 20px;
border-top-right-radius: 35px;
border-bottom-left-radius: 35px;
border-bottom-right-radius: 20px;
width: 195px;
height: 46px;
transition: 0.3s;
margin-bottom: 100px;
&:hover {
    color: white;
    background-color: #8BAA36;
}
`;