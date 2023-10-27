import { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import { Employee } from "../api/services";

type FormTypes = {
  handleFormSubmission: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUserInput: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleUserImageInput:  (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  employee: Employee;
};

const Form = ({ handleFormSubmission, handleUserInput, employee, handleUserImageInput }: FormTypes) => {
  return (
    <form onSubmit={handleFormSubmission}>
      <Input
        type={"file"}
        handleUserInput={handleUserImageInput}
        name="image"
        accept="image/png, image/gif, image/jpeg"
      />
      <Input
        type={"text"}
        value={employee.name}
        handleUserInput={handleUserInput}
        placeholder="Employee first name"
        name="name"
      />
      <Input
        type={"text"}
       value={employee.surname}
        handleUserInput={handleUserInput}
        placeholder="Employee last name"
        name="surname"
      />
      <Input
        type={"text"}
        value={employee.phone}
        handleUserInput={handleUserInput}
        placeholder="Employee phone number"
        name="phone"
      />
      <Input
        type={"text"}
        value={employee.email}
        handleUserInput={handleUserInput}
        placeholder="Employee email address"
        name="email"
      />
      <Input
        type={"text"}
        value={employee.position}
        handleUserInput={handleUserInput}
        placeholder="Employee position"
        name="position"
      />
      
      <Button />
    </form>
  );
};

export default Form;
