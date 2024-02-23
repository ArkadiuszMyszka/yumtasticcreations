import privateApi from "../services/PrivateApi.js";

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

// import privateApi from "../services/PrivateApi.js";

// const token = localStorage.getItem("token");

// export const api = privateApi(token);

// export const getRecipeByIdService = async (recipeId) => {
//   const response = await api.get(`/recipes/${recipeId}`);
//   console.log(response.data);
//   return response.data;
// };
// console.log(getRecipeByIdService);

// export const deleteRecipeFavoriteService = async (recipeId) => {
//   const { data } = await api.delete(`/recipe/favorites/${recipeId}`);
//   return data;
// };

// export const addRecipeFavoriteService = async (recipeId) => {
//   const { data } = await api.post(`/recipe/favorites`, { recipeId });
//   return data;
// };
