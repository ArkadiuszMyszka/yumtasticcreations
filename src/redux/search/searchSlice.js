import { createSlice } from "@reduxjs/toolkit";
import {
  getSearchByTitle,
  getSearchByIngredients,
} from "./searchOperations.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  isLoading: false,
  error: null,
  currentPage: 1,
  recipeByTitle: [],
  recipesByIngredient: [],
  searchFilter: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    resetCurrentPage: (state, action) => {
      state.currentPage = initialState.currentPage;
    },

    resetRecipeByTitle: (state) => {
      state.recipeByTitle = initialState.recipeByTitle;
    },

    resetRecipeByIngredient: (state) => {
      state.recipesByIngredient = initialState.recipesByIngredient;
    },

    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getSearchByTitle.pending, handlePending)
      .addCase(getSearchByTitle.fulfilled, (state, action) => {
        state.recipeByTitle = action.payload.data.recipe;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchByTitle.rejected, handleRejected)
      .addCase(getSearchByIngredients.pending, handlePending)
      .addCase(getSearchByIngredients.fulfilled, (state, action) => {
        state.recipesByIngredient = action.payload.data.recipe;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchByIngredients.rejected, handleRejected),
});

export const searchReducer = searchSlice.reducer;
export const {
  resetRecipeByTitle,
  resetRecipeByIngredient,
  setCurrentPage,
  resetCurrentPage,
} = searchSlice.actions;
