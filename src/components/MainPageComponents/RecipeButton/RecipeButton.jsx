import React from "react";
import { RecipeBtn } from "./RecipeButton.styled";
import { useNavigate } from 'react-router-dom';

export const RecipeButton = ({ to, title }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(to);
    };
      
    return (
        <RecipeBtn onClick={handleClick}>
            {title}
        </RecipeBtn>
        );
};