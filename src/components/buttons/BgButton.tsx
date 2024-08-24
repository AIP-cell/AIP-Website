import React from "react";
type Props = {
  text: string;
  className: string;
};
const BgButton = ({ text, className }: Props) => {
  return (
    <button className="tw-bg-darkPurple tw-rounded-full ">
      <p className={`${className} tw-text-white`}>{text}</p>
    </button>
  );
};

export default BgButton;
