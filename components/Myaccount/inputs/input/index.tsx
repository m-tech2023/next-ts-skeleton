import React from "react";

interface ComponentInputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  className?: string;
}

const ComponentInput: React.FC<ComponentInputProps> = ({
  type,
  placeholder,
  id,
  name,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
export default ComponentInput;
