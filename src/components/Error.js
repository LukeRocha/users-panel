import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorComponent = styled.div`
  text-align: center;
  margin: 130px auto;
`;
const Error = () => {
  return (
    <ErrorComponent>
      <h1>Error...</h1>
      <h3>Something went wrong with the application</h3>
    </ErrorComponent>
  );
};

export default Error;
