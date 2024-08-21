import React from "react";
type Props = {
  text: string;
  className: string;
};
const OutlineButton = ({ text, className }: Props) => {
  return (
    <div className="border-2 border-darkPurple">
      <p className={`${className} text-darkPurple`}>{text}</p>
    </div>
  );
};

export default OutlineButton;
