import {
  RecipeIngredientsHeader,
  RecipeIngredientsHeaderItem,
  RecipeIngredientsList,
  RecipeIngredientsListTable,
} from "./RecipeIngredientsList.styled.jsx";
import RecipeIngredietItem from "../RecipeIngredietItem/RecipeIngredietItem.jsx";

export default function RecipeIngredients({ recipeId, ingredients }) {
  return (
    <RecipeIngredientsListTable>
      <RecipeIngredientsHeader>
        <RecipeIngredientsHeaderItem>Ingredients</RecipeIngredientsHeaderItem>
        <RecipeIngredientsHeaderItem>Number</RecipeIngredientsHeaderItem>
        <RecipeIngredientsHeaderItem>Add ot list</RecipeIngredientsHeaderItem>
      </RecipeIngredientsHeader>
      <RecipeIngredientsList>
        {ingredients.map((ingredient) => (
          <RecipeIngredietItem
            key={ingredient._id}
            recipeId={recipeId}
            ingredient={ingredient}
          />
        ))}
      </RecipeIngredientsList>
    </RecipeIngredientsListTable>
  );
}