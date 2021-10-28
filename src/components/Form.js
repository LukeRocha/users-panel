import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0 auto;
  background-color: white;
`;

const submitHandler = (e) => {
  e.preventDefault();
};
const Form = ({ children }) => {
  return <StyledForm onSubmit={submitHandler}>{children}</StyledForm>;
};

export default Form;
