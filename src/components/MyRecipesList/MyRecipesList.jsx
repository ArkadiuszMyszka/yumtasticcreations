import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserRecipes,
  removeUserRecipeAsync,
} from "../redux/userRecipes/userRecipesSlice";
import MyRecipesItem from "./MyRecipesItem";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.userRecipes);

  useEffect(() => {
    dispatch(fetchUserRecipes());
  }, [dispatch]);

  const handleRemoveRecipe = (recipeId) => {
    dispatch(removeUserRecipeAsync(recipeId));
  };

  return (
    <div>
      <h2>My Recipes</h2>
      {recipes.map((recipe) => (
        <MyRecipesItem
          key={recipe._id}
          title={recipe.title}
          cookingTime={recipe.time}
          backgroundImage={recipe.preview || "ścieżka_do_domyślnego_tła"}
          onRemove={() => handleRemoveRecipe(recipe._id)}
          recipeLink={`/recipes/${recipe._id}`}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;
