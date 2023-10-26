import React from "react";

interface ComponentInputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
}

const ComponentInput: React.FC<ComponentInputProps> = ({
  type,
  placeholder,
  id,
  name,
}) => {
  return <input type={type} id={id} name={name} placeholder={placeholder} />;
};
export default ComponentInput;
