"use client";
import React, { useState } from "react";
import LeftArrow from "@public/svg/leftArrow.svg";
import RightArrow from "@public/svg/rightArrow.svg";
import Image from "next/image";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import LeftSlickArrowSvg from "../svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "../svg/RightSlickArrowSvg";

type Props = {
  slickArray: any[];
};
const ValueSlick = ({ slickArray }: Props) => {
  const arrayLength = slickArray.length;
  const [change, setChange] = useState(0);
  const previous = () => {
    if (change == 0) {
      setChange(arrayLength - 1);
    } else {
      setChange(change - 1);
    }
  };
  const next = () => {
    setChange(change + 1);
    if (change == arrayLength - 1) {
      setChange(0);
    }
  };
  return (
    <div className="pt-[5rem] container mx-auto pb-[9.25rem]">
      <div className="relative  flex justify-center items-center">
        <p className="~w-[16.1rem]/[38rem] text-center text-midGray ~leading-[1.225rem]/[1.4rem]">
          {slickArray.at(change).desc}
        </p>
        <ButtonAnimation
          onClick={previous}
          className="absolute ~left-[1.25rem]/[8rem] z-20 text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
        >
          <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </ButtonAnimation>
        <ButtonAnimation
          onClick={next}
          className="absolute ~right-[1.25rem]/[8rem] text-white bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
        >
          <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default ValueSlick;
