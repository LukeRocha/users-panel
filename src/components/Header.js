import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #202020;
  padding: 8px;
  color: white;
  font-size: 2rem;
`;

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
