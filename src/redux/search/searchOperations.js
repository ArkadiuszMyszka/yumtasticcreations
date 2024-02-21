import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getSearchByTitle = createAsyncThunk(
  "search/byTitle",
  async ({ query, page = 1 }, thunkApi) => {
    try {
      const data = await axios.get(`/search/?q=${query}&page=${page}`);
      return data.data;
    } catch (error) {
      toast.error("Something happened during request. Please try again.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getSearchByIngredients = createAsyncThunk(
  "search/byIngredient",
  async ({ query, page = 1 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/ingredients/?ing=${query}&page=${page}`
      );
      return data;
    } catch (error) {
      toast.error("Something happened during request. Please try again.");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getRecipeById = async (id) => {
  try {
    const { data } = await axios.get(`/recipe/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
