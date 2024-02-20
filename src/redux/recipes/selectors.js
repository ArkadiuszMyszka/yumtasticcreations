export const selectRecipes = (state) => state.categoryRecipes;

export const selectLoadingStatus = (state) => state.isLoading;

export const selectError = (state) => state.error;

export const selectStatuses = (state) => selectRecipes(state).statuses;
