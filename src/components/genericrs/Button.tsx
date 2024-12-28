import React from "react";

interface ButtonProps {
  classname?: string;
  text: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconClass?: string;
}
const Button: React.FC<ButtonProps> = ({
  classname,
  text,
  onclick,
  type,
  icon,
  iconClass,
}) => {
  return (
    <button
      type={type}
      className={`text-whire flex justify-center items-center gap-x-4 ${classname}`}
      onClick={onclick}
    >
      {text} {icon ? <span className={`ml-2 ${iconClass}`}>{icon}</span> : null}
    </button>
  );
};

export default Button;
