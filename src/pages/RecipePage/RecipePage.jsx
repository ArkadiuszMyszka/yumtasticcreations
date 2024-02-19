import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addRecipeFavoriteService,
  deleteRecipeFavoriteService,
  getRecipeByIdService,
} from "../../services/Recipe.services.js";
import RecipeContextProvider from "./RecipeContext.jsx";
import RecipeOne from "../../components/Recipe/Recipe.jsx";

export const RecipePage = () => {
  const { recipeId } = useParams();

  const [recipeNew, setRecipeNew] = useState(null);

  const getRecipe = useCallback(async (recipeId) => {
    const {
      data: { recipe },
    } = await getRecipeByIdService(recipeId);

    setRecipeNew(recipe);
  }, []);

  const addRecipeFavorite = useCallback(
    async (recipeId) => {
      await addRecipeFavoriteService(recipeId);
      await getRecipe(recipeId);
    },
    [getRecipe]
  );

  const deleteRecipeFavorite = useCallback(
    async (recipeId) => {
      await deleteRecipeFavoriteService(recipeId);
      await getRecipe(recipeId);
    },
    [getRecipe]
  );

  useEffect(() => {
    getRecipe(recipeId);
  }, [getRecipe, recipeId]);

  return (
    <RecipeContextProvider value={{ addRecipeFavorite, deleteRecipeFavorite }}>
      {recipeNew && <RecipeOne recipeInfo={recipeNew} />}
    </RecipeContextProvider>
  );
};
