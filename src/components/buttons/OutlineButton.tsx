import React from "react";
type Props = {
  text: string;
  className: string;
  buttonClassName?: string;
};
const OutlineButton = ({ text, className ,buttonClassName}: Props) => {
  return (
    <div className={`border-2 border-darkPurple ${buttonClassName}`}>
      <p className={`${className} text-darkPurple`}>{text}</p>
    </div>
  );
};

export default OutlineButton;
