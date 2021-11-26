import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  modal: false,
  users: [],
  userInputs: {},
  status: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (user) => {
    dispatch({ type: "SUBMIT_USER", payload: user });
  };

  const editUser = (id) => {
    dispatch({ type: "EDIT_USER", payload: id });
  };

  const renderUsers = () => {
    dispatch({ type: "USE_EFFECT_RENDER" });
  };
  return (
    <AppContext.Provider
      value={{ ...state, submitHandler, editUser, renderUsers }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
