import { ChangeEvent } from "react";

type InputTypes = {
  placeholder?: string;
  name: string;
  value?: string;
  type: string;
  accept?: string;
  handleUserInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, name, handleUserInput, value, type, accept }: InputTypes) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      accept={accept}
      onChange={handleUserInput}
      className="block px-3 py-2 text-sm bg-slate-700 outline-none w-full my-2 text-slate-200"
      placeholder={placeholder}
    />
  );
};

export default Input;
