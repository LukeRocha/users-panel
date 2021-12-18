import React, { useReducer, useState } from "react";
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
  const { name, email, document, phone, status } = user; //testar apenas user, com spread
  // const id = new Date().getTime().toString();

  return (
    <>
      <UserContainer id={id}>
        <StyledDiv>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </StyledDiv>
        <StyledDiv>
          <p>{user.document}</p>
          <p>{user.phone}</p>
        </StyledDiv>
        <Wrapper>
          <span
            className={
              user.status === "Waiting activation"
                ? "waiting"
                : user.status.toLowerCase()
            }
          ></span>
          <p>{user.status}</p>
        </Wrapper>
        <Button
          onClick={() => {
            editUser(id);
            setModal(!modal);
          }}
        >
          Edit user
        </Button>
        {/* payload: id */}
      </UserContainer>
      {modal && <Modal user={user} />}
    </>
  );
};

export default User;

//Use the useParams()
