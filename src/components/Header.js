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

const Header = () => {
  return <HeaderContainer>Users Panel</HeaderContainer>;
};

export default Header;
