import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, value, onChange }: Props) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
