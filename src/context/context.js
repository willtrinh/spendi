import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 50, "category": "Food", "type": "Expense", "date": "2021-05-28", "id": "f2145976-e0a1-4eda-8b02-17378d01fc40" }, { "amount": 100, "category": "Shopping", "type": "Expense", "date": "2021-05-23", "id": "28a6a7d6-1f2e-4e9b-abdf-447e9682862c" }, { "amount": 500, "category": "Bills", "type": "Expense", "date": "2021-05-21", "id": "485eef53-0c0f-4603-b12e-ffdff436df2b" }, { "amount": 1000, "category": "Salary", "type": "Income", "date": "2021-05-21", "id": "8954a1d7-a065-49ce-a073-b82587f6aa52" }, { "amount": 250, "category": "Savings", "type": "Income", "date": "2021-05-15", "id": "d537a367-dd37-44a4-9b87-418404f2a33b" }, { "amount": 500, "category": "Investments", "type": "Income", "date": "2021-05-10", "id": "f2765a8e-e960-4900-a173-f6944a62804f" }];

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

  const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

  return (
    // transferring deleteTransaction and addTransaction to the entire state
    <AppContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance,
    }}>
      {children}
    </AppContext.Provider>
  )
}
