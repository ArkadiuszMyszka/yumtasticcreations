import { createAsyncThunk } from "@reduxjs/toolkit";
import privateApi from "../../services/PrivateApi.js";

export const getMainPageRecipes= createAsyncThunk(
  "recipes/getMainPageRecipes",
  async ( categoryTitle , thunkAPI ) => {
    try {
        const titleToSend = { title: categoryTitle }
        const response = await privateApi.post(`/recipes/main-page`, titleToSend );
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
  }
    );