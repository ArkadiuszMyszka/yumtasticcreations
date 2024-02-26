import React from "react";
import { Routes, Route } from "react-router-dom";
// import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { RecipePage } from "./pages/RecipePage/RecipePage.jsx";
import { SearchPage } from "./pages/SearchPage/SearchPage.jsx";
import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage.jsx";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

const PrivateRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/main" element={<MainPage />} /> */}
      <Route path="/recipe/:recipeId" element={<RecipePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/my" element={<MyRecipesPage />} />
      <Route path="/add" element={<AddRecipePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PrivateRoutes;
