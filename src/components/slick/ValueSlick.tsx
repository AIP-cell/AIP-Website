"use client";
import React, { useState } from "react";
import LeftArrow from "@public/svg/leftArrow.svg";
import RightArrow from "@public/svg/rightArrow.svg";
import Image from "next/image";

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
    <div className="tw-pt-[5rem] container tw-mx-auto">
      <div className="tw-relative  tw-flex tw-justify-center tw-items-center">
        <p className="tw-w-[25rem] tw-text-center">{slickArray.at(change)}</p>
        <div
          onClick={previous}
          className="tw-absolute tw-left-[8rem] tw-z-20 tw-text-midGray tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={LeftArrow} alt="left-arrow" fill className="" />
          </div>
        </div>
        <div
          onClick={next}
          className="tw-absolute tw-right-[8rem]  tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={RightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSlick;
