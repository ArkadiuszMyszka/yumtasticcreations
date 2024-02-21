import React from "react";
import { Link } from "react-router-dom";

const MyRecipesItem = ({
  title,
  cookingTime,
  backgroundImage,
  onRemove,
  recipeLink,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Cooking Time: {cookingTime}</p>
      <img src={backgroundImage} alt={title} />
      <button onClick={onRemove}>Remove</button>
      <Link to={recipeLink}>
        <button>See Recipe</button>
      </Link>
    </div>
  );
};

export default MyRecipesItem;
