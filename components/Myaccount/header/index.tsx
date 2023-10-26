import React from "react";

interface ComponentHeaderProps {
  title?: string;
  text: string;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ text, title }) => {
  return (
    <>
      <p>{title}</p>
      <h2>{text}</h2>
    </>
  );
};
export default ComponentHeader;
