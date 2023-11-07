import React from "react";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  className?: string;
  required: boolean;
  maxLength: number;
}
const TextArea: React.FC<TextAreaProps> = ({
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
export default TextArea;
