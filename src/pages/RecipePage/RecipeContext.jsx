import { createContext, useContext } from "react";

const RecipeContext = createContext({});

export function useRecipeContext() {
  const data = useContext(RecipeContext);
  return data;
}

export default function RecipeContextProvider({ children, value }) {
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
}
