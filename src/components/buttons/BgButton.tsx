import React from "react";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  text: string;
  className: string;
};
const BgButton = ({ text, className }: Props) => {
  return (
    <ButtonAnimation className="bg-darkPurple hover:bg-white text-white hover:text-darkPurple rounded-full ">
      <p className={`${className} `}>{text}</p>
    </ButtonAnimation>
  );
};

export default BgButton;
