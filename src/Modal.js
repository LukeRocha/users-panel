import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-color: rgba(134, 134, 138, 0.7);
  z-index: 999;
`;
// handleOutsideClick = e => {  if (!this.node.contains(e.target)) this.handleClick();};
const Controls = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 10px;
`;
const Button = styled.button`
  background: #fca103;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid white;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 5px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  background-color: white;
`;

const Input = styled.input`
  margin: 8px;
  padding: 10px;
  width: 25vw;
`;
const ModalForm = () => {
  return (
    <Modal>
      <Form>
        <Input placeholder="Name" type="text" />
        <Input placeholder="E-mail..." type="text" />
        <Input placeholder="Document..." type="text" />
        <Input placeholder="Phone..." type="tel" />
        <Controls>
          <Button>Return</Button>
          <Button>Finish</Button>
        </Controls>
      </Form>
    </Modal>
  );
};

export default ModalForm;
