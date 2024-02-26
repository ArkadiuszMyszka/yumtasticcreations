import React from "react";

import { Title } from "../AddRecipeForm.styled.jsx";
import { Section } from "../AddRecipeForm.styled.jsx";
import { SquareBlack } from "../AddRecipeForm.styled.jsx";
import { SquareFirst } from "../AddRecipeForm.styled.jsx";
import { SquareSecond } from "../AddRecipeForm.styled.jsx";
export const MainTitle = ({ title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <SquareFirst />
      <SquareBlack />
      <SquareSecond />
    </Section>
  );
};
