import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
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

const Select = styled.select`
  width: 200px;
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
  const { submitHandler, ...state } = useGlobalContext();
  const selectOptions = Object.values(state.userStatus);

  const [person, setPerson] = useState({
    name: "",
    email: "",
    document: "",
    phone: "",
    status: "",
  });

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
          {selectOptions.map((status, index) => {
            return (
              <option value={status} key={index}>
                {status}
              </option>
            );
          })}
        </Select>
        <ButtonArea>
          <Button type="button">
            <Link to="/" className="links">
              Return
            </Link>
          </Button>
          <Button
            type="submit"
            onClick={(e) => {
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
            Submit
          </Button>
        </ButtonArea>
      </StyledForm>
    </>
  );
};

export default Form;
