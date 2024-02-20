import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice.js";
import userRecipesReducer from "./userRecipes/userRecipesSlice.js";

const rootReducer = combineReducers({
  search: searchReducer,
  userRecipes: userRecipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
