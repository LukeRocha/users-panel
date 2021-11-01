import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px;
  margin: 0 auto;
  background-color: white;
`;

const Input = styled.input`
  margin: 8px;
  padding: 10px;
  width: 25vw;
`;

const submitHandler = (e) => {
  e.preventDefault();
};
const Form = () => {
  return (
    <StyledForm onSubmit={submitHandler}>
      <Input placeholder="Name" />
      <Input placeholder="User Name" />
      <Input placeholder="e-Mail" />
      <Input placeholder="Password" />
      <div>
        <Button>
          <Link to="/" className="links">
            Return
          </Link>
        </Button>
        <Button>Submit</Button>
      </div>
    </StyledForm>
  );
};

export default Form;
