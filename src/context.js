import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import usersData from "./usersData";

const AppContext = React.createContext();

const initialState = {
  modal: false,
  users: usersData,
  userInputs: {},
  status: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (user) => {
    dispatch({ type: "SUBMIT_USER", payload: user });
  };

  const editInput = (input) => {
    dispatch({ type: "RENDER_USERINPUTS", payload: input });
  };

  const editUser = (id) => {
    dispatch({ type: "EDIT_USER", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, submitHandler, editUser, editInput }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
