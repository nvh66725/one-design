import React, { MouseEventHandler } from "react";

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button style={{ color: "red" }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
