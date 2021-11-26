import { React, useEffect } from "react";
import User from "./User";

import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

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
  const { users, renderUsers } = useGlobalContext();
  // var arrayFromStroage = JSON.parse(localStorage.getItem("name"));
  useEffect(() => {
    const arrayFromStroage = JSON.parse(localStorage.getItem("users"));
    if (arrayFromStroage.length > 0) renderUsers();
  }, []);
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
