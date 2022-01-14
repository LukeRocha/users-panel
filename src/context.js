import React, { useContext, useReducer } from "react";
import { useFetch } from "./components/useFetch";
import reducer from "./reducer";
import Modal from "./components/Modal";
const AppContext = React.createContext();

const initialState = {
  modal: Modal,
  users: [],
  userInputs: {},
  userStatus: {
    online: "online",
    offline: "offline",
    disabled: "disabled",
    waiting_activation: "waiting activation",
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "http://localhost:5000/api/accounts";
  const { apiData } = useFetch(url);

  const renderUsers = () => {
    dispatch({ type: "RENDER_USERS", payload: apiData });
  };

  const submitHandler = (user) => {
    dispatch({ type: "SUBMIT_USER", payload: user });
  };

  const editUser = (id) => {
    dispatch({ type: "EDIT_USER", payload: id });
  };

  const submitUserEdit = (newUser, id) => {
    dispatch({ type: "SUBMIT_USER_EDIT", payload: newUser, id: id });
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
