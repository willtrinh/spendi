import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 100, "category": "Car", "type": "Expense", "date": "2021-05-12", "id": "93d84eff-e01c-47a3-a3fb-edb37697fc6d" }, { "amount": 200, "category": "Shopping", "type": "Expense", "date": "2021-05-12", "id": "cee6191d-d93e-4802-9635-3bf596ef7de4" }, { "amount": 375, "category": "Travel", "type": "Expense", "date": "2021-05-13", "id": "f1eb6784-b809-4880-8241-842f9e485266" }, { "amount": 300, "category": "Bills", "type": "Expense", "date": "2021-05-03", "id": "864136ad-e2f0-4ccd-a64b-529289e31db9" }, { "amount": 250, "category": "Deposit", "type": "Income", "date": "2021-05-13", "id": "62054b21-24e1-4634-9c98-7add884ef658" }, { "amount": 1000, "category": "Salary", "type": "Income", "date": "2021-05-09", "id": "0d6b6ffc-3804-486f-94b3-dccd76463d8d" }, { "amount": 600, "category": "Business", "type": "Income", "date": "2021-05-08", "id": "99c5d250-20b2-452d-8c56-6132aed40349" }, { "amount": 500, "category": "Investments", "type": "Income", "date": "2021-05-02", "id": "eb13f902-d608-4edd-ae6a-40a6b7b9947d" }];

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
