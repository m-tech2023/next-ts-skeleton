import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  min?: string,
  max?: string,
  required?: boolean;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  id,
  name,
  placeholder,
  value,
  required,
  min,
  max,
  onChange,
  onClick,
}) => {
  return (
    <>
      <input
        required={required}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        min={min}
        max={max}
        className={className ? className : styles.input}
      />
    </>
  );
};
export default Input;
