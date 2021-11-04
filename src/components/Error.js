import React from "react";
import styled from "styled-components";
import Button from "./Button";
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
      <Button>
        <Link to="/" className="links">
          Back home
        </Link>
      </Button>
    </ErrorComponent>
  );
};

export default Error;
