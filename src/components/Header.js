import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #202020;
  padding: 8px;
  color: white;
  font-size: 2rem;
  width: 100vw;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const PanelTitle = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 80vw;
  margin: 0 auto;
  margin-top: 80px;
  border-bottom: 1px solid #202020;
  font-size: 1.7em;
  padding: 10px;
  gap: 18px;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} />
      </HeaderContainer>
      <PanelTitle>
        <Span>
          <img
            alt="icon"
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ei-user.svg/1200px-Ei-user.svg.png"
          />
          Users Panel
        </Span>
      </PanelTitle>
    </>
  );
};

export default Header;
