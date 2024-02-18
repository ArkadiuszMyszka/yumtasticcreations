// import logo from "./logo.svg";
// import "./App.css";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import PrivatePage from "../src/components/PrivatePage/PrivatePage";

const RecipePage = lazy(() => import("pages/RecipePage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/recipe/:recipeId"
          element={<PrivatePage component={<RecipePage />} />}
        />
        <Route path="*" element={<></>} />
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
