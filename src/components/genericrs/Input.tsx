import React from 'react';

interface InputProps {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  placeholder: string;
  classname?: string;
}

const Input: React.FC<InputProps> = ({ type, onChange, name, id, placeholder , classname }) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${classname}`}
      />
    </>
  );
};

export default Input;
