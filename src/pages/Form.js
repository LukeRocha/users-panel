import React, { useState } from "react";
import * as yup from "yup";
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

  const userSchema = yup.object().shape({
    user_name: yup.string().required(),
    user_mail: yup.string().email(),
    user_document: yup
      .number()
      .required()
      .positive()
      .integer()
      .min(11),
    user_phone: yup
      .number()
      .required()
      .positive()
      .integer()
      .min(11),
  });

  const [person, setPerson] = useState({
    user_name: "",
    user_mail: "",
    user_document: "",
    user_phone: "",
    user_status: "",
  });

  const formValidationHandler = async () => {
    const isValid = await userSchema.isValid(person);
    if (isValid) {
      submitHandler(person);
      setPerson({
        user_name: "",
        user_mail: "",
        user_document: "",
        user_phone: "",
        user_status: "",
      });
      alert("User has been registered...");
    } else {
      alert("Please fill the inputs correctly");
    }
  };

  return (
    <>
      <FormHeader>
        <h3>New user</h3>
        <h4>Fullfill the inputs to create a new user</h4>
      </FormHeader>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          formValidationHandler();
        }}
      >
        <Input
          placeholder="Name..."
          value={person.user_name}
          onChange={(e) => setPerson({ ...person, user_name: e.target.value })}
          name="inputName"
        />

        <Input
          placeholder="Email..."
          value={person.user_mail}
          onChange={(e) => setPerson({ ...person, user_mail: e.target.value })}
          name="inputEmail"
        />

        <Input
          placeholder="Document.."
          value={person.user_document}
          onChange={(e) =>
            setPerson({ ...person, user_document: e.target.value })
          }
          name="inputDocument"
        />

        <Input
          placeholder="Phone..."
          value={person.user_phone}
          onChange={(e) => setPerson({ ...person, user_phone: e.target.value })}
          name="inputPhone"
        />

        <Select
          onChange={(e) =>
            setPerson({ ...person, user_status: e.target.value })
          }
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
              formValidationHandler();
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
