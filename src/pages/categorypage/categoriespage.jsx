// CategoriesPage.jsx
import CategoriesList from "../../components/categorieslist/categorieslist"; // Adjusted path
import SearchRecipesList from "../../components/categorylist/categorylist"; // Adjusted path
import { PageWrapper } from "../../components/categorieslist/categorieslist.styled"; // Adjusted path
import { Title } from "../../components/ui/mainpagetitle/mainpagetitle.styled"; // Adjusted path



const CategoriesPage = () => {
  return (
    <>
      <PageWrapper>
        <Title>Categories</Title>
        <CategoriesList />
        <SearchRecipesList />
      </PageWrapper>
    </>
  );
};

export default CategoriesPage;
