import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { SigninPage } from "./pages/SigninPage/SigninPage.jsx";
import { RecipePage } from "./pages/RecipePage/RecipePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
