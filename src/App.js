import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { SigninPage } from "./pages/SigninPage/SigninPage.jsx";
import { RecipePage } from "./pages/RecipePage/RecipePage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
