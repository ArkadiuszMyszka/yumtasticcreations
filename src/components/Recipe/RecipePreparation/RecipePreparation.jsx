import { useState } from "react";
import PropTypes from "prop-types";
import {
  RecipePreparationContainer,
  RecipePreparationHeader,
  RecipePreparationItem,
  RecipePreparationList,
  RecipePreparationBox,
  RecipeImage,
} from "./RecipePreparation.styled";

export default function RecipePreparation({ title, instructions, thumb }) {
  const [instructionsList] = useState(() => instructions.split("\n"));

  return (
    <RecipePreparationContainer>
      <RecipePreparationBox>
        <RecipePreparationHeader>Recipe Preparation</RecipePreparationHeader>
        <RecipePreparationList>
          {instructionsList
            .filter((item) => item.trim().length)
            .map((instruction, index) => (
              <RecipePreparationItem key={index}>
                {instruction}
              </RecipePreparationItem>
            ))}
        </RecipePreparationList>
      </RecipePreparationBox>
      <RecipeImage src={thumb} alt={`This is recipe "${title}" image`} />
    </RecipePreparationContainer>
  );
}

RecipePreparation.propTypes = {
  title: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
