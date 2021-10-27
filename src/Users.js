import React, { useState } from "react";
import styled from "styled-components";

const UsersContainer = styled.ul`
  display: flex;
`;

const handleChange = (e) => {
  e.preventDefault();
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    cpf: "",
    phoneNumber: "",
    status: false,
    edit: false,
  });

  return <div>{}</div>;
};

export default Users;
