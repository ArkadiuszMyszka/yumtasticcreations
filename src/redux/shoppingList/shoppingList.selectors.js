const Status = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const selectData = (state) => state.shoppingList;
const selectStatuses = (state) => selectData(state).statuses;
const selectErrors = (state) => selectData(state).errors;

export const selectShoppingList = (state) => ({
  isLoading: selectStatuses(state).get === Status.PENDING,
  error: selectErrors(state).get,
  data: selectData(state).list,
});
