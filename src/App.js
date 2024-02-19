import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage.jsx";
import { Header } from "./pages/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
