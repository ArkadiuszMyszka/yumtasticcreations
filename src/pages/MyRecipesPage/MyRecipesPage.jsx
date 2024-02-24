import React, { useState, useEffect } from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList.jsx";
import Paginator from "../../components/Paginator/Paginator.jsx";
import OwnerRecipesPage from "./MyRecipesPage.styled.jsx";

const MyRecipesPage = () => {
  const [totalRecipesCount, setTotalRecipesCount] = useState(0);

  // Przykładowe dane, zastąp odpowiednią logiką pobierania
  const fetchTotalCount = () => {
    // Symulacja pobierania danych z API
    setTotalRecipesCount(12); // Przykładowa wartość
  };

  useEffect(() => {
    fetchTotalCount();
  }, []);

  return (
    <OwnerRecipesPage>
      <MainPageTitle title="My recipes" />
      <MyRecipesList totalRecipesCount={totalRecipesCount} />
      {totalRecipesCount > 4 && <Paginator />}
    </OwnerRecipesPage>
  );
};

export default MyRecipesPage;

// import React from "react";
// import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
// import MyRecipesList from "../../components/MyRecipesList/MyRecipesList.jsx";
// import Paginator from "../../components/Paginator/Paginator.jsx";
// import OwnerRecipesPage from "./MyRecipesPage.styled.jsx";

// const MyRecipesPage = () => {
//   return (
//     <OwnerRecipesPage>
//       <MainPageTitle title="My recipes" />
//       <MyRecipesList />
//       <Paginator />
//     </OwnerRecipesPage>
//   );
// };

// export default MyRecipesPage;
