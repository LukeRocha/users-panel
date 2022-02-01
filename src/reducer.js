import axios from "axios";

const reducer = (state, action) => {
  if (action.type === "RENDER_USERS") {
    return {
      ...state,
      users: action.payload,
    };
  }

  if (action.type === "SUBMIT_USER") {
    return {
      ...state,
      users: action.result,
    };
  }

  if (action.type === "EDIT_USER") {
    const handleUser = state.users[action.payload];
    return {
      ...state,
      userInputs: { ...handleUser },
    };
  }

  if (action.type === "SUBMIT_USER_EDIT") {
    console.log(action.result);
    return { ...state, users: action.result };
  }
  return state;
};

export default reducer;
