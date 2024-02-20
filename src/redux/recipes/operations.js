import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations.js";

export const getMainPageRecipes= createAsyncThunk(
  "recipes/getMainPageRecipes",
  async ( categoryTitle , thunkAPI ) => {
    try {
        const titleToSend = { title: categoryTitle }
        const response = await instance.post(`/recipes/main-page`, titleToSend );
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
  }
    );
    