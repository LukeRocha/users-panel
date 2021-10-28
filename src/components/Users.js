import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  margin-top: 120px;
`;

const UsersHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
  font-size: 1.3em;
`;
const Users = ({ modalToggle }) => {
  return (
    <UsersContainer>
      <UsersHeader>
        <span>
          <h4>User area</h4>
          <p>Select user to edit info</p>
        </span>
        <Button modalToggle={modalToggle}>New User</Button>
      </UsersHeader>
    </UsersContainer>
  );
};

export default Users;
