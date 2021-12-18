const reducer = (state, action) => {
  if (action.type === "RENDER_USERS") {
    return {
      ...state,
      users: [...JSON.parse(localStorage.getItem("users"))],
    };
  }

  if (action.type === "SUBMIT_USER") {
    const documentRegex =
      "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})";
    const phoneRegex = "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$";
    if (
      action.payload.phone.match(phoneRegex) &&
      action.payload.document.match(documentRegex)
    ) {
      const newUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(newUsers));
      alert("User registered");
      return {
        ...state,
        users: [...JSON.parse(localStorage.getItem("users"))],
      };
    } else {
      alert("Please fill the inputs correctly");
      return state;
    }
  }

  if (action.type === "EDIT_USER") {
    const handleUser = JSON.parse(localStorage.getItem("users"))[
      action.payload
    ];

    return {
      ...state,
      userInputs: { ...handleUser },
    };
  }

  console.log(state);
  return state;
};

export default reducer;
