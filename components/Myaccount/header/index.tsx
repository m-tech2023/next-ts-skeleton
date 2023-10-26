import React from "react";

interface ComponentHeaderProps {
  text: string;
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({ text }) => {
  return (
    <>
      <p>Minha conta</p>
      <h2>{text}</h2>
    </>
  );
};
export default ComponentHeader;
