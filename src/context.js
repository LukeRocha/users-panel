import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import Modal from "./components/Modal";
import { getUsers, postUser, editUserData } from "./operations/operations";
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

  const renderUsers = async () => {
    const users = await getUsers(url);
    dispatch({ type: "RENDER_USERS", payload: users });
  };

  const submitHandler = async (user) => {
    const users = await postUser(user);
    dispatch({ type: "SUBMIT_USER", payload: user, result: users });
  };

  const editUserModal = (id) => {
    dispatch({ type: "EDIT_USER_MODAL", payload: id });
  };

  const submitUserEdit = async (user, id) => {
    const result = await editUserData(user, id);
    dispatch({
      type: "SUBMIT_USER_EDITS",
      payload: result,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        submitHandler,
        editUserModal,
        submitUserEdit,
        renderUsers,
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
