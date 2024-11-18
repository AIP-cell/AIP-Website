import React from "react";
type Props = {
  text: string;
  className: string;
  buttonClassName?: string;
};
const OutlineButton = ({ text, className ,buttonClassName}: Props) => {
  return (
    <div className={`tw-border-2 tw-border-darkPurple ${buttonClassName}`}>
      <p className={`${className} tw-text-darkPurple`}>{text}</p>
    </div>
  );
};

export default OutlineButton;
