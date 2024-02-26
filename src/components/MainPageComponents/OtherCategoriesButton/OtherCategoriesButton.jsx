import React from "react";
import { useNavigate } from 'react-router-dom';
import { OtherCategoriesBtn } from "./OtherCategoriesButton.styled";

export const OtherCategoriesButton = ({ to }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(to);
    };
      
    return (
        <OtherCategoriesBtn onClick={handleClick}>
            Other Categories
        </OtherCategoriesBtn>
        );
};