const reducer = (state, action) => {
  //userValidation
  const documentRegex =
    "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})";
  const phoneRegex = "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$";

  if (action.type === "USE_EFFECT_RENDER") {
    return {
      ...state,
      users: JSON.parse(localStorage.getItem("users")),
    };
  }
  if (action.type === "SUBMIT_USER") {
    if (
      action.payload.phone.match(phoneRegex) &&
      action.payload.document.match(documentRegex)
    ) {
      const id = new Date().getTime.toString();
      const newUsers = [
        ...state.users,
        { ...action.payload, id: JSON.stringify(id) },
      ];

      alert("OK");
      localStorage.setItem("users", JSON.stringify(newUsers));

      return {
        ...state,
        users: [...localStorage.getItem("users")],
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
