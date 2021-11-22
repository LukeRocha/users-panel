import React from "react";
import usersData from "../usersData"; //trocar para api servida pelo nodeJs
import User from "./User";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";
import { useEffect } from "react/cjs/react.development";
import { useGlobalContext } from "../context";

const UsersContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  margin-top: 20px;
`;

const UsersHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px;
  width: 80vw;
  font-size: 1.3em;
  margin: 0 auto;
`;

const Users = () => {
  const { users } = useGlobalContext();
  useEffect(() => {}, [usersData]);

  return (
    <UsersContainer>
      <UsersHeader>
        <span>
          <h4>User area</h4>
          <p>Select user to edit info</p>
        </span>
        <Button>
          <Link to="/register" className="links">
            New User
          </Link>
        </Button>
      </UsersHeader>
      <div>
        {users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    </UsersContainer>
  );
};

export default Users;
