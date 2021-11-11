import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import usersData from "./usersData";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  modal: false,
  users: usersData,
  status: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (user) => {
    dispatch({ type: "SUBMIT_USER", payload: user });
  };

  return (
    <AppContext.Provider value={{ ...state, submitHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
