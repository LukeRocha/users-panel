import React from "react";
import Users from "./Users";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 100px;
  text-align: center;
`;

const Interface = () => {
  return (
    <>
      <Title>
        <h1>Admin panel</h1>
      </Title>
    </>
  );
};

export default Interface;
