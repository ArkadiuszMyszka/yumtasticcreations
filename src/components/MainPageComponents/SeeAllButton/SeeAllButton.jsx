import React from "react";
import { SeeAllBtn } from "./SeeAllButton.styled";
import { useNavigate } from 'react-router-dom';

export const SeeAllButton = ({ to }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`categories/`);
    };
      
    return (
        <SeeAllBtn onClick={handleClick}>
            See all
        </SeeAllBtn>
        );
};