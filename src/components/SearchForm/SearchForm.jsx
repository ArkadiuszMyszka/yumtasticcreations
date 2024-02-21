import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

import { toast } from "react-toastify";
import { Form, SearchFormInput, SearchButton } from "./SearchForm.styled.js";

import { selectSearchFilter } from "../../../redux/search/searchSelectors.js";
import {
  getSearchByTitle,
  getSearchByIngredients,
} from "./searchOperations.js";

import {
  resetRecipeByIngredient,
  resetRecipeByTitle,
  resetCurrentPage,
} from "../../../redux/search/searchSlice.js";

export default function SearchForm({ onSubmit, queryParam = "" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedOption = useSelector(selectSearchFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const inputChange = useCallback(() => {
    if (location.pathname === "/search" && searchValue === "") {
      setSearchParams({});
    }

    if (location.pathname === "/search" && searchValue !== "") {
      switch (selectedOption) {
        case "Title":
          setSearchParams({ q: searchValue });
          break;
        case "Ingredient":
          setSearchParams({ ing: searchValue });
          break;
        default:
          break;
      }
    }
  }, [location.pathname, searchValue, selectedOption, setSearchParams]);

  useEffect(() => {
    updateQueryString();
  }, [updateQueryString]);

  const handleInputChange = (e) => {
    const trimvalue = e.target.value.trim();
    setSearchValue(trimvalue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetCurrentPage());

    if (location.pathname === "/main" && searchValue !== "") {
      dispatch(selectOption("Title"));
      navigate(`/search?q=${searchValue}`, {
        state: { from: "/main" },
      });
      return;
    }

    const params = Object.fromEntries(searchParams.entries());
    const { q, ing } = params;

    const title = searchParams.get("q");
    const ingredient = searchParams.get("ing");

    if (searchValue === "") {
      setSearchParams({});
      showMessageToast("Enter any word in");
      return;
    }

    if (q && q !== "") {
      dispatch(resetRecipeByIngredient());
      dispatch(getRecipesByTitle(title)).then((result) => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          showMessageToast(`On request "${title}" found nothing`);
        }
      });
    }
    if (ing && ing !== "") {
      dispatch(resetRecipeByTitle());
      dispatch(getRecipesByIngredient(ingredient)).then((result) => {
        if (
          result.payload.code === 200 &&
          result.payload.data?.recipe?.length === 0
        ) {
          showMessageToast(`On request "${ingredient}" found nothing`);
        }
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autocomplete="off"
        value={searchValue}
        placeholder="Enter query"
        onChange={handleInputChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
}
