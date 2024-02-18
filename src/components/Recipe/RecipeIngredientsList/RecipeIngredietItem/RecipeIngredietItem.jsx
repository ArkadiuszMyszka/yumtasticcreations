//export function RecipeIngredietItem() {}
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  RecipeIngredientLi,
  RecipeIngredientContainer,
  RecipeIngredientFavorite,
  RecipeIngredientCheckbox,
  RecipeIngredientCheckboxLoader,
  RecipeIngredientFavoriteInput,
  RecipeIngredientPhoto,
  RecipeIngredientTitle,
  RecipeIngredietQuantity,
  RecipeIngredietQuantityText,
} from "./RecipeIngredietItem.styled";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";

export default function RecipeIngredietItem({ recipeId, ingredient }) {
  const { thumbT, quantity, thumb } = ingredient;

  const dispatch = useDispatch();
  const { data: shoppingList } = useSelector();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientInShoppingList, setIngredientInShoppingList] =
    useState(null);

  useEffect(() => {
    const findIngredient = shoppingList.find(
      (ing) =>
        ing.ingredient._id === ingredient._id && ing.recipeId === recipeId
    );

    setIngredientInShoppingList(findIngredient);
    setIsChecked(!!findIngredient);
  }, [ingredient, recipeId, shoppingList]);

  const changeHandler = async () => {
    setIsLoading(true);
    try {
      if (ingredientInShoppingList) {
        await dispatch();
      } else {
        await dispatch();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RecipeIngredientLi>
      <RecipeIngredientContainer>
        <RecipeIngredientPhoto src={thumb} alt={thumbT} />
        <RecipeIngredientTitle>{thumbT}</RecipeIngredientTitle>
      </RecipeIngredientContainer>
      <RecipeIngredietQuantity>
        <RecipeIngredietQuantityText>{quantity}</RecipeIngredietQuantityText>
      </RecipeIngredietQuantity>
      <RecipeIngredientFavorite>
        {isLoading ? (
          <RecipeIngredientCheckboxLoader>
            <Loader />
          </RecipeIngredientCheckboxLoader>
        ) : (
          <RecipeIngredientCheckbox checked={isChecked}>
            <RecipeIngredientFavoriteInput
              type="checkbox"
              checked={isChecked}
              onChange={changeHandler}
            />
          </RecipeIngredientCheckbox>
        )}
      </RecipeIngredientFavorite>
    </RecipeIngredientLi>
  );
}

RecipeIngredietItem.propTypes = {
  recipeId: PropTypes.string.isRequired,
  ingredient: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }),
};
