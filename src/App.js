// import "./App.css";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";

// import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";
// import { MainPage } from "./pages/MainPage/MainPage.jsx";
// import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
// import { SigninPage } from "./pages/SigninPage/SigninPage.jsx";
// import { RecipePage } from "./pages/RecipePage/RecipePage.jsx";
// import { SearchPage } from "./pages/SearchPage/SearchPage.jsx";
// import MyRecipesPage from "./pages/MyRecipesPage/MyRecipesPage.jsx";
// import AddRecipePage from "./pages/AddRecipePage/AddRecipePage.jsx";
// import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<WelcomePage />} />
//           <Route path="/main" element={<MainPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/signin" element={<SigninPage />} />
//           <Route path="/recipe/:recipeId" element={<RecipePage />} />
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/my" element={<MyRecipesPage />} />
//           <Route path="/add" element={<AddRecipePage />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// App.jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import Loader from "./components/Loader/Loader.jsx";
import "./App.css";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage.jsx"));
const PublicRoutes = lazy(() => import("./PublicRoutes.js"));
const PrivateRoutes = lazy(() => import("./PrivateRoutes.js"));

const App = () => {
  const isAuthenticated = true; // Sprawdź, czy użytkownik jest zalogowany

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                {isAuthenticated ? (
                  <SharedLayout>
                    <Route index element={<PublicRoutes />} />
                    <Route path="/*" element={<PrivateRoutes />} />
                  </SharedLayout>
                ) : (
                  <WelcomePage />
                )}
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loader />}>
                {/* renderuj stronę logowania */}
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
