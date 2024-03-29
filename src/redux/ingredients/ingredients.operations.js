import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/ingredients/list");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByIngredient = createAsyncThunk(
  "search/:ingredient",
  async (query, thunkAPI) => {
    try {
      const { data } = await axios.get(`/search/ingredient/${query}`);
      return data.length === 0
        ? data
        : normalizedFetchRecipesByIngredient(data[0].recipeData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const normalizedFetchRecipesByIngredient = (data) =>
  data.map(({ recipe }) => ({
    title: recipe.title,
    id: recipe._id,
    img: recipe.thumb,
    ingredients: recipe.ingredients,
  }));

export const fetchCategoriesList = createAsyncThunk(
  "recipes/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/category/list");
      return response.data.category;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
