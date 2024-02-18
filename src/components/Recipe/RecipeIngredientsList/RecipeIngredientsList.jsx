import {
  RecipeIngredientsHeader,
  RecipeIngredientsHeaderItem,
  RecipeIngredientsList,
  RecipeIngredientsListTable,
} from "./RecipeIngredientsList.styled";
import RecipeIngredietItem from "./RecipeIngredietItem";

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
