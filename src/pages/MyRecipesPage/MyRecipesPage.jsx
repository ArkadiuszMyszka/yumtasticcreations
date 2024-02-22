import React from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList.jsx";
// import Paginator from "../../components/Paginator/Paginator.jsx";
import OwnerRecipesPage from "./MyRecipesPage.styled.jsx";

const MyRecipesPage = () => {
  return (
    <OwnerRecipesPage>
      <MainPageTitle title="My recipes" />
      <MyRecipesList />
      {/* <Paginator /> */}
    </OwnerRecipesPage>
  );
};

export default MyRecipesPage;
