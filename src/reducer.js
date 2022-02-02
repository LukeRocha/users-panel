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

  if (action.type === "EDIT_USER_MODAL") {
    const handleUser = state.users[action.payload];
    return {
      ...state,
      userInputs: { ...handleUser },
    };
  }

  if (action.type === "SUBMIT_USER_EDITS") {
    return {
      ...state,
      users: action.payload,
    };
  }
  return state;
};

export default reducer;
