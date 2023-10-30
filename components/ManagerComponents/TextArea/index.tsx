import React from "react";

interface ManagerTextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  className?: string;
  required: boolean;
  maxLength: number;
}
const ManagerTextArea: React.FC<ManagerTextAreaProps> = ({
  className,
  id,
  name,
  placeholder,
  required,
  maxLength,
}) => {
  return (
    <textarea
      required={required}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength}
    />
  );
};
export default ManagerTextArea;
