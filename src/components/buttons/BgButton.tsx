import React from "react";
type Props = {
  text: string;
  className: string;
};
const BgButton = ({ text, className }: Props) => {
  return (
    <button className="bg-darkPurple rounded-full ">
      <p className={`${className} text-white`}>{text}</p>
    </button>
  );
};

export default BgButton;
