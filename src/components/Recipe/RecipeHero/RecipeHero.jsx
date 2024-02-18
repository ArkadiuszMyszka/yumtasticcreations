import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import PropTypes from "prop-types";
import {
  Clock,
  RecipeAddFavoriteButton,
  RecipeDescription,
  RecipeHeroLoader,
  RecipeHeroWrap,
  RecipeTime,
  RecipeTitle,
} from "./RecipeHero.styled";
import { useRecipeContext } from "../../../Pages/RecipePage/RecipeContext";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user.selectors";

function RecipeHero({ _id: recipeId, title, description, favorites, time }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addRecipeFavorite, deleteRecipeFavorite } = useRecipeContext();
  const { _id: userId } = useSelector(selectUser);

  useEffect(() => {
    setIsFavorite(favorites.includes(userId));
  }, [favorites, userId]);

  const clickFavoriteButton = async (e) => {
    e.target.blur();
    setIsLoading(true);
    try {
      if (isFavorite) {
        await deleteRecipeFavorite(recipeId);
      } else {
        await addRecipeFavorite(recipeId);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeHeroWrap>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeDescription>{description}</RecipeDescription>
      {isLoading ? (
        <RecipeHeroLoader>
          <Loader />
        </RecipeHeroLoader>
      ) : (
        <RecipeAddFavoriteButton onClic={clickFavoriteButton}>
          {isFavorite ? "Remove from favorite" : "Add to favorite recipes"}
        </RecipeAddFavoriteButton>
      )}
      <RecipeTime>
        <Clock />
        <p>{time}</p>
      </RecipeTime>
    </RecipeHeroWrap>
  );
}

RecipeHero.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export { RecipeHero };
