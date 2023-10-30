import React from "react";
import styles from "./styles.module.scss";

interface LabelProps {
  text?: string;
  labelFor?: string;
  className?: string;
  required?: boolean,
};

const Label: React.FC<LabelProps> = ({
  text,
  labelFor,
  className,
  required,
}) => {
  return (
    <>
      <label htmlFor={labelFor} className={className ? className : styles.label}>
        {text} {(required && '*')}
      </label>
    </>
  );
};
export default Label;
