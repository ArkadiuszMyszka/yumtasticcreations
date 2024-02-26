import React from "react";
import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";

import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { SigninPage } from "./pages/SigninPage/SigninPage.jsx";
// import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SigninPage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
