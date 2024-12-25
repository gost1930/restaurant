import React from "react";
interface SelectProps {
  name: string;
  id?: string;
  classname?: string;
  onclick?: (event: React.MouseEvent<HTMLSelectElement>) => void;
  onchange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {id?: number; label: string; value: string }[];
}
const Select: React.FC<SelectProps> = ({
  name,
  id,
  classname,
  onchange,
  onclick,
  options,
}) => {
  return (
    <select
      onClick={onclick}
      onChange={onchange}
      name={name}
      className={`${classname} p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer`}
      id={id}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className=" cursor-pointer">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
