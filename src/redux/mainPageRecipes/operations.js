import { createAsyncThunk } from "@reduxjs/toolkit";
import privateApi from "../../services/PrivateApi.js";

export const getMainPageRecipes= createAsyncThunk(
  "recipes/getMainPageRecipes",
  async ( categoryTitle , thunkAPI ) => {
    try {
        const titleToSend = categoryTitle; 
        console.log("1", typeof titleToSend)
        const response = await privateApi.get(`/recipes/main-page/${titleToSend}`);
        console.log("response", response.data)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
  }
    );