import React from "react";

interface ComponentLabelProps {
  text: string;
  htmlFor: string;
  className?: string;
}

const ComponentLabel: React.FC<ComponentLabelProps> = ({
  text,
  htmlFor,
  className,
}) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
export default ComponentLabel;
