import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useGlobalContext } from "../context";

const FormHeader = styled.header`
  width: 80vw;
  margin: 10px auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: #5e5e5e;
  padding: 10px;
  gap: 4px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 80vw;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  width: 200px;
  margin: 12px;
`;
const Select = styled.select`
  width: 18vw;
  padding: 12px;
  align-self: right;
  margin: 12px;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: right;
  padding: 10px;
  width: 60vw;
`;

const Form = () => {
  const { editInput, submitHandler, ...state } = useGlobalContext();

  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    status: "",
  });

  const options = ["Online", "Offline", "Waiting activation", "Disabled"];

  return (
    <>
      <FormHeader>
        <h3>New user</h3>
        <h4>Fullfill the inputs to create a new user</h4>
      </FormHeader>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(person);
          setPerson({
            name: "",
            email: "",
            document: "",
            phone: "",
            status: "",
          });
        }}
      >
        <Input
          placeholder="Name..."
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          name="inputName"
        />

        <Input
          placeholder="Email..."
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          name="inputEmail"
        />

        <Input
          placeholder="Document.."
          value={person.document}
          onChange={(e) => setPerson({ ...person, document: e.target.value })}
          name="inputDocument"
        />

        <Input
          placeholder="Phone..."
          value={person.phone}
          onChange={(e) => setPerson({ ...person, phone: e.target.value })}
          name="inputPhone"
        />

        <Select
          onChange={(e) => setPerson({ ...person, status: e.target.value })}
          name="inputSelect"
        >
          <option disabled selected>
            Select client status
          </option>
          {options.map((option, index) => {
            return (
              <option value={option} key={index}>
                {option}
              </option>
            );
          })}
        </Select>
        <ButtonArea>
          <Button>
            <Link to="/" type="button" className="links">
              Return
            </Link>
          </Button>
          <Button type="submit" onClick={() => submitHandler(person)}>
            Submit
          </Button>
        </ButtonArea>
      </StyledForm>
    </>
  );
};

export default Form;
