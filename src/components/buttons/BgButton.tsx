import React from "react";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  text: string;
  className: string;
};
const BgButton = ({ text, className }: Props) => {
  return (
    <ButtonAnimation className="tw-bg-darkPurple hover:tw-bg-white tw-text-white hover:tw-text-darkPurple tw-rounded-full ">
      <p className={`${className} `}>{text}</p>
    </ButtonAnimation>
  );
};

export default BgButton;
