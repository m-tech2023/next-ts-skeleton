import styles from "../styles.module.scss";
import React, { ChangeEvent } from "react";

interface LoginInputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const LoginInput: React.FC<LoginInputProps> = ({
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
        className={styles.input}
      />
    </>
  );
};
export default LoginInput;
