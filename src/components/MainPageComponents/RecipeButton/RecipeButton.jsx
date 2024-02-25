import React from "react";
import { RecipeBtn } from "./RecipeButton.styled";

export const RecipeButton = ({to, children}) => {
    return (
        <RecipeBtn to={to}>
            {children}
        </RecipeBtn>
        );
};