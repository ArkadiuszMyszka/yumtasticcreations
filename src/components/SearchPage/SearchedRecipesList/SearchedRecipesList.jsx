import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import RecipesList from "../RecipesList/RecipesList.jsx";
import EmptyPage from "../EmptySearchPage/EmptySearchPage.jsx";

import {
  selectSearchResult,
  selectIsLoading,
  selectTotalPage,
} from "../../../redux/search/searchSelectors.js";

import {
  getSearchByTitle,
  getSearchByIngredients,
} from "../../../redux/search/searchOperations.js";

import { getNewState } from "../../../redux/search/searchSlice.js";
import { NoSearchText } from "./SearchedRecipesList.styled.js";
import Loader from "../../Loader/Loader.jsx";
// import { Paginator } from "../../Paginator/Paginator.jsx";

export default function SearchedRecipesList() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const perPage = 9;

  const recipes = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);
  const totalPage = useSelector(selectTotalPage);

  const dispatch = useDispatch();

  const query = searchParams.get("query") ?? "";
  const type = searchParams.get("type") ?? "";

  useEffect(() => {
    if (query === "" || type === "") {
      dispatch(getNewState());
      return;
    }

    if (type === "title") {
      dispatch(getSearchByTitle({ query, page, perPage }));
    }

    if (type === "ingredients") {
      dispatch(getSearchByIngredients({ query, page, perPage }));
    }
  }, [dispatch, page, perPage, query, type]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && recipes
        ? (recipes.length === 0 && (
            <EmptyPage text="Try looking for something else..." />
          )) ||
          (recipes.length > 0 && <RecipesList recipes={recipes} />)
        : !isLoading && <NoSearchText>Enter your search query</NoSearchText>}
    </>
  );
}

// {recipes && !isLoading && recipes.length > 0 && (
//   <Paginator
//     perPage={perPage}
//     totalData={totalPage}
//     setPage={setPage}
//     page={page}
//   />
// )}

{
  /* <>
      {isLoading && !error && <Loader />}
      {!isLoading && recipes && recipes.length !== 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <EmptyPage text="Try looking for something else..." />
      )}
    </> */
}
