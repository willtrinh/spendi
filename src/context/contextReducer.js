// Reducer - a function that takes in the old state and an action and return a new state.
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "ADD_TRANSACTION":
      // add the new transaction at the top and spread older transactions below it
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case "DELETE_TRANSACTION":
      // filter out the id
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      // simply return the state if no matched case
      return state;
  }
};

export default contextReducer;
