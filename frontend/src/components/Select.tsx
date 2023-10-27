import { ChangeEvent } from "react";

type SelectTypes = {
  placeholder?: string;
  name: string;
  value: string;
  handleUserInput: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ name, handleUserInput, value }: SelectTypes) => {
  return (
    <select
      name={name}
      value={value}
      onChange={handleUserInput}
      className="block px-3 py-2 text-sm bg-slate-700 outline-none w-full my-2 text-slate-200"
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default Select;
