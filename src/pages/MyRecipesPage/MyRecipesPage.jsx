import React from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList.jsx";
// import Paginator from 'ścieżka/Paginator';

const MyRecipesPage = () => {
  return (
    <div>
      <MainPageTitle title="My recipes" />
      <MyRecipesList />
      {/* <Paginator /> */}
    </div>
  );
};

export default MyRecipesPage;
