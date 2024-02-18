import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import SearchPage from "./pages/SearchPage/SearchPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
