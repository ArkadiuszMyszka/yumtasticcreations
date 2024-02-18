import { Recipe, RecipeContainer } from "./Recipe.styled";
import { RecipeHero } from "./RecipeHero/RecipeHero";
import RecipeIngredients from "./RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "./RecipePreparation/RecipePreparation";

function RecipeOne({ recipeInfo }) {
  const {
    _id: recipeId,
    title,
    description,
    time,
    favorites,
    ingredients,
    instructions,
    thumb,
  } = recipeInfo;

  return (
    <Recipe>
      <RecipeContainer>
        <RecipeHero
          _id={recipeId}
          title={title}
          description={description}
          time={time}
          favorites={favorites}
        />
        <RecipeIngredients recipeId={recipeId} ingredients={ingredients} />
        <RecipePreparation
          title={title}
          instructions={instructions}
          thumb={thumb}
        />
      </RecipeContainer>
    </Recipe>
  );
}

export default RecipeOne;
