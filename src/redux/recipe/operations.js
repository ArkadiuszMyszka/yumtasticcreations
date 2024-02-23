import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async ({ formData, _id }, thunkAPI) => {
    try {
      const response = await axios.post(`/users/${_id}/own-recipes`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipesPopular = createAsyncThunk(
  "all/popular",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/popular-recipes`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default addRecipe;
