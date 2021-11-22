import React from "react";
import styled from "styled-components";
import Button from "./Button";

const UserContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  color: #313131;
  align-items: center;
  padding: 13px;
  border: 1px solid rgba(6, 16, 8, 0.2);
  width: 80vw;
  margin: 10px auto;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 5px;
  gap: 4px;
  width: 20vw;
`;

const User = ({ user }) => {
  const { name, email, document, phone, status } = user;
  return (
    <UserContainer>
      <StyledDiv>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </StyledDiv>
      <StyledDiv>
        <p>{user.document}</p>
        <p>{user.phone}</p>
      </StyledDiv>
      <StyledDiv>
        <p>{user.status}</p>
      </StyledDiv>
      <Button>Edit user</Button>
    </UserContainer>
  );
};

export default User;

//Use the useParams()
