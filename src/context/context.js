import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = [];

export const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators
  const deleteTransaction = (id) => {
    // dispatch an action that would handle deletion 
    // of the transaction with provided transaction id
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  const addTransaction = (transaction) => {
    // dispatch an action that would handle deletion 
    // of the transaction with provided transaction
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  }
  // console.log(transactions);

  return (
    // transferring deleteTransaction and addTransaction to the entire state
    <AppContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
    }}>
      {children}
    </AppContext.Provider>
  )
}
