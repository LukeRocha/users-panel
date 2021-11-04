import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useGlobalContext } from "../context";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 40vw;
  padding: 18px;
  margin: 60px auto;
  background-color: white;
  text-align: right;
`;

const Input = styled.input`
  margin: 12px;
  padding: 10px;
  width: 25vw;
`;

const Form = () => {
  const { submitHandler } = useGlobalContext();

  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    credential: "",
    status: "",
  });
  //dispatch payload is the person, and we return this on the reducer file

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(person);
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            placeholder="input name..."
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            placeholder="input email..."
            value={person.email}
            onChange={(e) => setPerson({ ...person, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <Input
            placeholder="input name..."
            value={person.age}
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <Input
            placeholder="input phone..."
            value={person.phone}
            onChange={(e) => setPerson({ ...person, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="credential">Credential:</label>
          <Input
            placeholder="input credential..."
            value={person.credential}
            onChange={(e) =>
              setPerson({ ...person, credential: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <Input
            placeholder="select"
            value={person.status}
            onChange={(e) => setPerson({ ...person, status: e.target.value })}
          />
        </div>
        <div>
          <Button>
            <Link to="/" className="links">
              Return
            </Link>
          </Button>
          <Button onClick={() => submitHandler(person)}>Submit</Button>
        </div>
      </StyledForm>
    </>
  );
};

export default Form;
