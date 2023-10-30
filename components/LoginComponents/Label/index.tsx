import React from "react";

interface LoginLabelProps {
  text: string;
  labelFor: string;
  className?: string;
}
const LoginLabel: React.FC<LoginLabelProps> = ({
  text,
  labelFor,
  className,
}) => {
  return (
    <label htmlFor={labelFor} className={className}>
      {text}
    </label>
  );
};
export default LoginLabel;
