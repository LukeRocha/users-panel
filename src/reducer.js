const reducer = (state, action) => {
  if (action.type === "SUBMIT_USER") {
    action.payload.event.preventDefault();
    return {
      ...state,
      users: [...state.users, action.payload.user],
    };
  }
  return state;
};

export default reducer;
