import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Form, SearchFormInput, SearchButton } from "./SearchForm.styled.js";

export default function SearchForm({ onSubmit, queryParam = "" }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const inputChange = (evt) => {
    const { value } = evt.target;
    setQuery(value);
  };

  const formSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      return toast.info("Enter request to search");
    } else if (query.length > 20) {
      return toast.info("Search query must be less than 20 characters");
    }

    onSubmit(query);
  };

  return (
    <Form onSubmit={formSubmit}>
      <SearchFormInput
        type="text"
        autocomplete="off"
        value={query}
        placeholder="Enter query"
        onChange={inputChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
}
