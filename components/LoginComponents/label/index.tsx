import styles from "../styles.module.scss";
import React from "react";

interface LoginLabelProps {
  text: string;
  labelFor: string;
}
const LoginLabel: React.FC<LoginLabelProps> = ({ text, labelFor }) => {
  return (
    <>
      <label htmlFor={labelFor} className={styles.label}>
        {text}
      </label>
    </>
  );
};
export default LoginLabel;
