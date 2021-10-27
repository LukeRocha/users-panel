import React, { useState } from "react";
import Users from "./Users";
import ModalForm from "./Modal";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 120px;
  align-items: center;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #21262d;
  opacity: 0.7;
`;

const Title = styled.h1`
  text-align: start;
  font-size: 1.4rem;
  width: 80vw;
`;

const Menu = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  margin-top: 50px;
  color: #21262d;
`;

const Button = styled.button`
  background: #fca103;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid white;
  font-size: 1.2rem;
  cursor: pointer;
`;
const Interface = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
      <Panel>
        <Title>👤 Users panel</Title>
      </Panel>
      <Menu>
        <div>
          <h3>Users list</h3>
          <h4 style={{ opacity: ".6", marginTop: "8px" }}>
            Choose a user to edit data
          </h4>
        </div>
        <Button onClick={() => setIsModal(!isModal)}>New user</Button>
      </Menu>
      <Users />
      {isModal && <ModalForm />}
      <p style={{ opacity: ".6", marginTop: "8px" }}>Showing 0 users</p>
    </Container>
  );
};

export default Interface;
