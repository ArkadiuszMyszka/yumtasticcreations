import { createSlice } from "@reduxjs/toolkit";
import privateApi from '../../services/PrivateApi.js';

const userRecipesSlice = createSlice({
  name: "userRecipes",
  initialState: {
    recipes: [],
    status: "idle",
  },
  reducers: {
    setUserRecipes: (state, action) => {
      state.recipes = action.payload;
      state.status = "succeeded";
    },
    removeUserRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe._id !== action.payload
      );
    },
  },
});

export const { setUserRecipes, removeUserRecipe } = userRecipesSlice.actions;

export const selectUserRecipes = (state) => state.userRecipes;

export default userRecipesSlice.reducer;

export const fetchUserRecipes = () => async (dispatch) => {
  try {
    const { data } = await privateApi.get("/ownRecipes");
    dispatch(setUserRecipes(data));
  } catch (error) {
    console.error("Error fetching user recipes:", error);
  }
};

export const removeUserRecipeAsync = (recipeId) => async (dispatch) => {
  try {
    await privateApi.delete(`/ownRecipes/${recipeId}`);
    dispatch(removeUserRecipe(recipeId));
  } catch (error) {
    console.error("Error removing user recipe:", error);
  }
};
