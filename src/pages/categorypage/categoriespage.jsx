// CategoriesPage.jsx
import CategoriesList from "../../components/Categories/CategoriesList/CategoriesList"; // Adjusted path
import SearchRecipesList from "../../components/Categories/CategoryList/CategoryList"; // Adjusted path
import { PageWrapper } from "../../components/Categories/CategoriesList/CategoriesList.styled"; // Adjusted path
import { Title } from "../../components/ui/MainPageTitle/MainPageTitle.styled"; // Adjusted path


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
