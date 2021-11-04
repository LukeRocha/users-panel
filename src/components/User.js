import React from "react";
import styled from "styled-components";
import Button from "./Button";

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #313131;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(6, 16, 8, 0.2);
  margin-top: 22px;
`;

const User = ({ user }) => {
  const { name, phone, email, status, credential } = user;
  return (
    <UserContainer>
      <div>
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </div>
      <div>
        <p>{user.email}</p>
        <p>{user.credential}</p>
      </div>
      <div>
        <p>{user.status}</p>
      </div>
      <Button>Edit user</Button>
    </UserContainer>
  );
};

export default User;

//Use the useParams()
