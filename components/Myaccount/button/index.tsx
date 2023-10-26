import React from "react";

interface ComponentButtonProps {
  text: string;
  className: string;
}

const ComponentButton: React.FC<ComponentButtonProps> = ({
  text,
  className,
}) => {
  return <button className={className}>{text}</button>;
};
export default ComponentButton;
