export const selectRecipes = (state) => state.recipes;

export const selectStatuses = (state) => selectRecipes(state).statuses;

