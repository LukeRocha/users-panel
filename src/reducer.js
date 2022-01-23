import axios from "axios";
const reducer = (state, action) => {
  if (action.type === "RENDER_USERS") {
    return {
      ...state,
      users: action.payload,
    };
  }

  if (action.type === "SUBMIT_USER") {
    axios
      .post("http://localhost:5000/api/accounts", action.payload)
      .then((resp) => {
        alert("User registered");
        console.log(resp);
        return {
          ...state,
          users: resp,
        };
      })
      .catch((err) => {
        alert("Request is not valid, check server status on console");
        console.log(err);
        return state;
      });
    console.log(state.users);
  }

  if (action.type === "EDIT_USER") {
    const handleUser = state.users[action.payload];
    return {
      ...state,
      userInputs: { ...handleUser },
    };
  }

  if (action.type === "SUBMIT_USER_EDIT") {
    axios
      .put(`http://localhost:5000/api/accounts/${action.id}`, action.payload)
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.log(err);
      });
    alert("user edited :D");
    return state;
  }
  return state;
};

export default reducer;
