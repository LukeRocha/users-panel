import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  position: absolute;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgb(50, 46, 59, 0.7);
`;

const Input = styled.input`
  margin: 8px;
  padding: 10px;
  width: 25vw;
`;

const Modal = ({ modalToggle }) => {
  return (
    <StyledModal>
      <Form>
        <Input placeholder="Name" type="text" />
        <Input placeholder="E-mail..." type="text" />
        <Input placeholder="Document..." type="text" />
        <Input placeholder="Phone..." type="tel" />
        <div>
          <Button type="button" onClick={modalToggle}>
            Return
          </Button>
          <Button type="submit">Finish</Button>
        </div>
      </Form>
    </StyledModal>
  );
};

export default Modal;
