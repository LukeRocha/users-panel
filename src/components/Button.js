import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fca103;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid white;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 5px;
  /* width: 100vw; */
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
