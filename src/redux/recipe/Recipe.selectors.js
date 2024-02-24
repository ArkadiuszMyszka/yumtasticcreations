export const selectRecipes = (state) => state.recipes;

export const selectStatuses = (state) => selectRecipes(state).statuses;

export const selectCategories = (state) => state.recipes.categories;

export const selectRecipesPopular = (state) => state.recipes.popular;
