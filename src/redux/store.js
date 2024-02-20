import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice.js";
import { categoriesReducer } from "./categories/categoriesSlice.js"; 

const rootReducer = combineReducers({
  search: searchReducer,
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
