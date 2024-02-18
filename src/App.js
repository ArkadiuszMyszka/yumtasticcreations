import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <WelcomePage />} />
        <Route path="/register" element={ <RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
