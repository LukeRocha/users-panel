import axios from "axios";
const reducer = (state, action) => {
  const documentRegex =
    "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})";
  const phoneRegex = "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$";

  if (action.type === "RENDER_USERS") {
    localStorage.setItem("users", JSON.stringify(action.payload));
    const newUsers = JSON.parse(localStorage.getItem("users"));
    return {
      ...state,
      users: [...newUsers],
    };
  }

  if (action.type === "SUBMIT_USER") {
    if (
      action.payload.phone.match(phoneRegex) &&
      action.payload.document.match(documentRegex) &&
      action.payload.name &&
      action.payload.status &&
      action.payload.mail
    ) {
      axios
        .post("http://localhost:5000/api/accounts", action.payload)
        .then((resp) => {
          alert("User registered");
          console.log(resp);
        })
        .catch((err) => {
          alert("Request is not valid, check server status on console");
          console.log(err);
        });
    } else {
      alert("Please fill the inputs correctly");
      return state;
    }
  }

  if (action.type === "EDIT_USER") {
    const handleUser = state.users[action.payload];
    return {
      ...state,
      userInputs: { ...handleUser },
    };
  }

  if (action.type === "SUBMIT_USER_EDIT") {
    if (
      action.payload.phone.match(phoneRegex) &&
      action.payload.document.match(documentRegex) &&
      action.payload.name &&
      action.payload.status &&
      action.payload.mail
    ) {
      axios
        .put(`http://localhost:5000/api/accounts/${action.id}`, action.payload)
        .then((resp) => console.log(resp))
        .catch((err) => {
          console.log(err);
        });
      alert("user edited :D");
    } else {
      alert("Please fill the inputs correctly");
      return state;
    }
    return state;
  }
  return state;
};

export default reducer;
