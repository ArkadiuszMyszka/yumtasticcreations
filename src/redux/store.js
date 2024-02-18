import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./search/searchSlice.js";

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
