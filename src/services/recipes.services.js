import axios from "axios";

export const getRecipeByIdService = async (recipeId) => {
  const { data } = await axios.get(`/recipe/${recipeId}`);
  return data;
};

export const deleteRecipeFavoriteService = async (recipeId) => {
  const { data } = await axios.delete(`/recipe/favorites/${recipeId}`);
  return data;
};

export const addRecipeFavoriteService = async (recipeId) => {
  const { data } = await axios.post(`/recipe/favorites`, { recipeId });
  return data;
};
