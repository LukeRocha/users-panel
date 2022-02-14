import axios from "axios";
const url = "http://localhost:5000/api/accounts";

export const getUsers = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const postUser = async (user) => {
  const postResult = await axios
    .post(url, user)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  return postResult;
};

export const editUserData = async (user, id) => {
  const putUserResult = await axios
    .put(`http://localhost:5000/api/accounts/${id}`, user)
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  return putUserResult;
};
