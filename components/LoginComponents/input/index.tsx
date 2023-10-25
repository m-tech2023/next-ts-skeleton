import React, { ChangeEvent } from "react";

interface LoginInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const LoginInput: React.FC<LoginInputProps> = ({
  className,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
};
export default LoginInput;
