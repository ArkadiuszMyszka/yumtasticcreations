import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserRecipes,
  removeUserRecipeAsync,
} from "../../redux/userRecipes/userRecipesSlice.js";
import MyRecipesItem from "../MyRecipesItem/MyRecipesItem.jsx";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.userRecipes);

  useEffect(() => {
    dispatch(fetchUserRecipes());
  }, [dispatch]);

  const handleRemoveRecipe = (recipeId) => {
    dispatch(removeUserRecipeAsync(recipeId));
  };

  return (
    <div>
      {recipes.map((recipe) => (
        <MyRecipesItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          cookingTime={recipe.time}
          backgroundImage={recipe.thumb || "../../images/graphics/recipe.jpg"}
          onRemove={() => handleRemoveRecipe(recipe.id)}
          recipeLink={`/recipes/${recipe.id}`}
        />
      ))}
    </div>
  );
};

export default MyRecipesList;

// Do stylowania pobieranie danych z pliku recipes json

// import React from "react";
// import recipesData from "../../recipes.json";
// import MyRecipesItem from "../MyRecipesItem/MyRecipesItem.jsx";

// const MyRecipesList = () => {
//   return (
//     <div>
//       {recipesData.map((recipe) => (
//         <MyRecipesItem
//           key={recipe.id}
//           title={recipe.title}
//           description={recipe.description}
//           cookingTime={recipe.time}
//           backgroundImage={recipe.thumb || "../../images/graphics/recipe.jpg"}
//           // onRemove={() => handleRemoveRecipe(recipe.id)}
//           recipeLink={`/recipes/${recipe.id}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default MyRecipesList;
