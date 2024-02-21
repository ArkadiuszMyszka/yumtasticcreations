import React from "react";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle.jsx";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList.jsx";
import Paginator from "../../components/Paginator/Paginator.jsx";

// const MyRecipesPage = () => {
//   return (
//     <div>
//       <MainPageTitle title="My recipes" />
//       <MyRecipesList />
//       <Paginator />
//     </div>
//   );
// };

// export default MyRecipesPage;
const MyRecipesPage = () => {
  // Funkcja obsługująca zmianę strony
  const handlePageChange = (newPage) => {
    // Tutaj możesz obsłużyć zmianę strony, na przykład pobierając nowe dane
    console.log("Nowa strona:", newPage);
  };

  return (
    <div>
      <MainPageTitle title="My recipes" />
      <MyRecipesList />
      {/* Przekazanie funkcji handlePageChange do komponentu Paginator */}
      <Paginator onPageChange={handlePageChange} />
    </div>
  );
};

export default MyRecipesPage;
