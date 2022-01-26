import React, { useState, useContext, useReducer } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  const apiData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setIsLoading(false);
    return result;
  };

  const renderUsers = async () => {
    const users = await apiData(url);
    dispatch({ type: "RENDER_USERS", payload: users });
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
      value={{
        ...state,
        submitHandler,
        editUser,
        submitUserEdit,
        renderUsers,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
