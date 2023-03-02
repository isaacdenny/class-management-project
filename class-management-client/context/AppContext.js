import { useContext, createContext, useState, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import tokenReducer from "./reducers/tokenReducer";

//Check the localstorage or set a default state
const initialState = {
  user: {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ID: "",
    School: "",
  },
  token: "" ,
};
const Context = createContext(initialState);

const combinedReducers = ({ user, token }, action) => ({
  user: userReducer(user, action),
  token: tokenReducer(token, action),
});

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducers, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export function useStateProvider() {
  return (useContext(Context), useContext(Context).state);
}
