import React from "react";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  text: string;
  className: string;
};
const BgButton = ({ text, className }: Props) => {
  return (
    <ButtonAnimation className=" z-30 bg-darkPurple hover:bg-white text-white hover:text-darkPurple rounded-full transition-all duration-500 ">
      <p className={`${className} `}>{text}</p>
    </ButtonAnimation>
  );
};

export default BgButton;
