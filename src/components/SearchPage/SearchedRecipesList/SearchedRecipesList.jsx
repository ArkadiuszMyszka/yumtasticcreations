import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";

import RecipesList from "../RecipesList/RecipesList.jsx";
import RecipeOne from "../../Recipe/Recipe.jsx";
import EmptyPage from "../EmptySearchPage/EmptySearchPage.jsx";
import { NoSearchText } from "./SearchedRecipesList.styled.js";
import { Loader } from "../../Loader/Loader.jsx";
// import { Paginator } from "../../Paginator/Paginator.jsx";

import {
  selectSearchResult,
  selectRecipeByTitle,
  selectRecipesByIngredient,
  selectCurrentPage,
  selectIsLoading,
  selectError,
} from "../../../redux/search/searchSelectors.js";

import {
  getSearchByTitle,
  getSearchByIngredients,
} from "../../../redux/search/searchOperations.js";

import {
  resetRecipeByIngredient,
  setCurrentPage,
  resetCurrentPage,
} from "../../../redux/search/searchSlice.js";

export default function SearchedRecipesList() {
  const perPage = 9;
  const searchedList = useSelector(selectRecipeByTitle);
  const serchedIngredList = useSelector(selectRecipesByIngredient);
  const currentPage = useSelector(selectCurrentPage);
  const recipes = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);

  const location = useLocation();
  const dispatch = useDispatch();
  const listRef = useRef(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.state && location.state.from === "/main") {
      const params = Object.fromEntries(searchParams.entries());
      const title = searchParams.get("params");
      if (params && params !== "") {
        dispatch(resetCurrentPage());
        dispatch(resetRecipeByIngredient());
        dispatch(getSearchByTitle(title));
      }
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleRecipes, setVisibleRecipes] = useState([]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleRecipeList = useCallback(() => {
    let visibleList =
      searchedList?.length > 0
        ? searchedList
        : serchedIngredList?.map((i) => i);
    setVisibleRecipes(visibleList);
  }, [searchedList, serchedIngredList]);

  useEffect(() => {
    visibleRecipeList();
  }, [visibleRecipeList]);

  // const handlePageChange = useCallback(
  //   (pageNumber) => {
  //     dispatch(setCurrentPage(pageNumber));
  //     listRef.current?.scrollIntoView({ behavior: "smooth" });
  //   },
  //   [dispatch]
  // );

  const currentPageData = visibleRecipes.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {(windowWidth >= 1280 ? visibleRecipes : currentPageData)?.length ||
          0 ? (
            <List ref={listRef}>
              {(windowWidth >= 1280 ? visibleRecipes : currentPageData)
                .slice(
                  0,
                  windowWidth >= 1280
                    ? 12
                    : (windowWidth >= 1280 ? visibleRecipes : currentPageData)
                        .length
                )
                .map(({ _id: id, title }) => (
                  <RecipeOne key={id} id={recipeId} title={title} />
                ))}
            </List>
          ) : (
            <EmptyPage />
          )}
        </>
      )}
    </>
  );
}

// {windowWidth < 1280 && visibleRecipes.length !== 0 && (
//   <Paginator
//     data={visibleRecipes}
//     itemsPerPage={itemsPerPage}
//     onPageChange={handlePageChange}
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
