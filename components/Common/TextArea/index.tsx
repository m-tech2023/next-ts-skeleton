import React from "react";

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  className?: string;
  required: boolean;
  maxLength: number;
  value?: string;
  onChange?: (e: any) => void;
}
const TextArea: React.FC<TextAreaProps> = ({
  className,
  id,
  name,
  placeholder,
  required,
  maxLength,
  value,
  onChange,
}) => {
  return (
    <textarea
      required={required}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextArea;
