import { Recipe, RecipeContainer } from "./Recipe.styled.jsx";
import { RecipeHero } from "../RecipeHero/RecipeHero.jsx";
import RecipeIngredients from "../RecipeIngredientsList/RecipeIngredientsList.jsx";
import RecipePreparation from "../RecipePreparation/RecipePreparation.jsx";

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
