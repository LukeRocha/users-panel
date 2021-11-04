import React, { useContext, useReducer } from "react";
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

  const modalToggle = () => {
    dispatch({ type: "MODAL_TOGGLE" });
  };

  const submitHandler = (event, user) => {
    dispatch({ type: "SUBMIT_USER", payload: { user, event } });
  };

  return (
    <AppContext.Provider value={{ ...state, modalToggle, submitHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
