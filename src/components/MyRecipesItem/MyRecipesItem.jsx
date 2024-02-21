import React from "react";
import { Link } from "react-router-dom";
import {
  RecipeItemContainer,
  RecipeTitle,
  CookingTime,
  BackgroundImage,
  RecipeDetails,
  RemoveButton,
  SeeRecipeButton,
  RecipeDescription,
} from "./MyRecipesItem.styled.js";

const MyRecipesItem = ({
  title,
  description,
  cookingTime,
  backgroundImage,
  onRemove,
  recipeLink,
}) => {
  return (
    <RecipeItemContainer>
      <BackgroundImage src={backgroundImage} alt={title} />
      <RecipeDetails>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <CookingTime>{cookingTime} min</CookingTime>
        <RemoveButton onClick={onRemove}></RemoveButton>
        <SeeRecipeButton>
          <Link to={recipeLink}>See Recipe</Link>
        </SeeRecipeButton>
      </RecipeDetails>
    </RecipeItemContainer>
  );
};

export default MyRecipesItem;
