import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./categories/categoriesSlice.js"; 

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    },
});