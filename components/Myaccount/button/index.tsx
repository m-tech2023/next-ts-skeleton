import React from "react";

interface ComponentButtonProps {
  text: string;
  className?: string;
  type: "button" | "submit" | "reset";
  onChange?: () => void;
}

const ComponentButton: React.FC<ComponentButtonProps> = ({
  text,
  className,
  type,
  onChange,
}) => {
  return (
    <button type={type} className={className} onChange={onChange}>
      {text}
    </button>
  );
};
export default ComponentButton;
