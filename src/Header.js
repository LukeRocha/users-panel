import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #202020;
  padding: 8px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Users</Title>
    </HeaderContainer>
  );
};

export default Header;
