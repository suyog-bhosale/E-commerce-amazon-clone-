import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is use inside of componet

export const useStatevalue = () => useContext(StateContext);
