import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";
import Input from "./Input";
// import Input

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.div`
  margin: 0 auto;
  padding: 8px;
  height: auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  border: 2px solid #fca103;
  border-radius: 12px;
  background: white;
`;

const Select = styled.select`
  /* width: 18vw; */
  padding: 12px;
  align-self: right;
  margin: 12px;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const Modal = ({ Children, user }) => {
  const userOptions = ["Online", "Offline", "Waiting activation", "Disabled"];
  return (
    <>
      <ModalBackground>
        <StyledModal>
          <ModalWrapper>
            <h3>Edit user </h3>
            <button>X</button>
          </ModalWrapper>
          <Input type="text" placeholder="Name..." value={user.name} />
          <Input type="text" placeholder="E-mail..." value={user.email} />
          <Input type="text" placeholder="Document" value={user.document} />
          <Input type="text" placeholder="Phone..." value={user.phone} />
          <Select name="inputSelect">
            <option selected={user.option}>Select client status</option>
            {userOptions.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {option}
                </option>
              );
            })}
          </Select>

          <ModalWrapper>
            <Button>Save</Button>
          </ModalWrapper>
        </StyledModal>
      </ModalBackground>
    </>
  );
};

export default Modal;
