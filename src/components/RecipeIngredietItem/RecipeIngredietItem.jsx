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
  RecipeIngredieQuantity,
  RecipeIngredietQuantityText,
} from "./RecipeIngredietItem.styled.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingList } from "../../redux/shoppingList/shoppingList.selectors.js";
import Loader from "../Loader/Loader.jsx";
import {
  addIngredientToShoppingListThunk,
  removeIngredientFromShoppingListThunk,
} from "../../redux/shoppingList/shopingList.operations.js";

export default function RecipeIngredietItem({ recipeId, ingredient }) {
  const { ttl, measure, thb } = ingredient;

  const dispatch = useDispatch();
  const { data: shoppingList } = useSelector(selectShoppingList);
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
    setIsChecked(!findIngredient);
  }, [ingredient, recipeId, shoppingList]);

  const changeHandler = async () => {
    setIsLoading(true);
    try {
      if (ingredientInShoppingList) {
        await dispatch(
          removeIngredientFromShoppingListThunk(ingredientInShoppingList._id)
        );
      } else {
        await dispatch(
          addIngredientToShoppingListThunk({
            ingredientId: ingredient._id,
            value: ingredient.measure,
            recipeId: recipeId,
          })
        );
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
        <RecipeIngredientPhoto src={thb} alt={ttl} />
        <RecipeIngredientTitle>{ttl}</RecipeIngredientTitle>
      </RecipeIngredientContainer>
      <RecipeIngredieQuantity>
        <RecipeIngredietQuantityText>{measure}</RecipeIngredietQuantityText>
      </RecipeIngredieQuantity>
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
