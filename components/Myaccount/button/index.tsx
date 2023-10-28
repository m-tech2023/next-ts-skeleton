import React from "react";

interface ComponentButtonProps {
  text: string;
  className?: string;
  type: "button" | "submit" | "reset";
}

const ComponentButton: React.FC<ComponentButtonProps> = ({
  text,
  className,
  type,
}) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};
export default ComponentButton;
