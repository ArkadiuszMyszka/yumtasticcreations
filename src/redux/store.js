import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice.js";
import userRecipesReducer from "./userRecipes/userRecipesSlice.js";
import { recipesReducer } from "./recipes/recipesSlice.js";
import { categoriesReducer } from "./categories/categoriesSlice.js";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  userRecipes: userRecipesReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
