import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={ <RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
