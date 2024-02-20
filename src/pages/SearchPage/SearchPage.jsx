import Title from "../../components/Title/Title.jsx";
import SearchBar from "../../components/SearchPage/SearchBar/SearchBar.jsx";
import SearchedRecipesList from "../../components/SearchPage/SearchedRecipesList/SearchedRecipesList.jsx";

function SearchPage() {
  return (
    <>
      <Title>Search</Title>
      <SearchBar />
      <SearchedRecipesList />
    </>
  );
}
export default SearchPage;
