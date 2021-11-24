const reducer = (state, action) => {
  const documentRegex =
    "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})";

  const phoneRegex = "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$";

  if (action.type === "SUBMIT_USER") {
    console.log(action.payload.phone);
    if (
      action.payload.phone.match(phoneRegex) &&
      action.payload.document.match(documentRegex)
    ) {
      alert("telefone primprim");
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    } else {
      return state;
    }
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
