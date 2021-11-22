const reducer = (state, action) => {
  const phoneRegex = "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$";
  if (action.type === "SUBMIT_USER") {
    if (action.payload.phone.match(phoneRegex)) {
      alert("telefone primprim");
    } else {
      return state;
    }
    return {
      ...state,
      users: [...state.users, action.payload],
    };
  }

  if (action.type === "EDIT_USER") {
    return {
      ...state,
      modal: true,
      userInputs: { ...state.users.id },
    };
  }
  console.log(state);
  return state;
};

export default reducer;
