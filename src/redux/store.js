import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice.js";
import userRecipesReducer from "./userRecipes/userRecipesSlice.js";
import { recipesReducer } from "./mainPageRecipes/recipesSlice.js";
import { categoriesReducer } from "./categories/categoriesSlice.js";

const rootReducer = combineReducers({
  search: searchReducer,
  userRecipes: userRecipesReducer,
  categories: categoriesReducer,
  recipes: recipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
