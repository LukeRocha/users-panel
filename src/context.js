import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import Modal from "./components/Modal";
const AppContext = React.createContext();

const initialState = {
  modal: Modal,
  users: [],
  userInputs: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (user) => {
    dispatch({ type: "SUBMIT_USER", payload: user });
  };

  const editUser = (id) => {
    dispatch({ type: "EDIT_USER", payload: id });
  };

  const submitUserEdit = (newUser, id) => {
    dispatch({ type: "SUBMIT_USER_EDIT", payload: newUser, id: id });
  };

  const renderUsers = () => {
    dispatch({ type: "RENDER_USERS" });
  };
  return (
    <AppContext.Provider
      value={{ ...state, submitHandler, editUser, submitUserEdit, renderUsers }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
