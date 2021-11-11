const reducer = (state, action) => {
  if (action.type === "SUBMIT_USER") {
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  }
  return state;
};

export default reducer;
