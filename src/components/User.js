import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";
import "../index.css";
import { useGlobalContext } from "../context";

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
const Wrapper = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 5px;
`;

const User = ({ user, id }) => {
  const { editUser } = useGlobalContext();
  const [modal, setModal] = useState(false);
  const { name, email, document, phone, status } = user;

  return (
    <>
      <UserContainer id={id}>
        <StyledDiv>
          <p>{name}</p>
          <p>{email}</p>
        </StyledDiv>
        <StyledDiv>
          <p>{document}</p>
          <p>{phone}</p>
        </StyledDiv>
        <Wrapper>
          <span
            className={
              status === "Waiting activation"
                ? "waiting"
                : user.status.toLowerCase()
            }
          ></span>
          <p>{status}</p>
        </Wrapper>
        <Button
          onClick={() => {
            editUser(id);
            setModal(!modal);
          }}
        >
          Edit user
        </Button>
      </UserContainer>
      {modal && (
        <Modal closeModal={() => setModal(!modal)} id={id} user={user} />
      )}
    </>
  );
};

export default User;
