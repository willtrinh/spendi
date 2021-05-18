import React, { useReducer, createContext } from 'react';
const initialState = [];

export const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
  return (
    <AppContext.Provider value={{ appName: 'Spendy' }}>
      {children}
    </AppContext.Provider>
  )
}
