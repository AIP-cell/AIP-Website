import React from "react";
type Props = {
  text: string;
  className: string;
};
const OutlineButton = ({ text, className }: Props) => {
  return (
    <div className="tw-border-2 tw-border-darkPurple">
      <p className={`${className} tw-text-darkPurple`}>{text}</p>
    </div>
  );
};

export default OutlineButton;
