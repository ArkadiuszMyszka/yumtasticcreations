import privateApi from '../services/PrivateApi.js';

export const getRecipeByIdService = async (recipeId) => {
  const { data } = await privateApi.get(`/recipe/${recipeId}`);
  return data;
};

export const deleteRecipeFavoriteService = async (recipeId) => {
  const { data } = await privateApi.delete(`/recipe/favorites/${recipeId}`);
  return data;
};

export const addRecipeFavoriteService = async (recipeId) => {
  const { data } = await privateApi.post(`/recipe/favorites`, { recipeId });
  return data;
};
