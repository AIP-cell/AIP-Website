"use client";
import React, { useState } from "react";
import LeftArrow from "@public/svg/leftArrow.svg";
import RightArrow from "@public/svg/rightArrow.svg";
import Image from "next/image";
const valueDescArray = [
  "1 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
];
const arrayLenghth = valueDescArray.length;
const ValueSlick = () => {
  const [change, setChange] = useState(0);
  const previous = () => {
    if (change == 0) {
      setChange(arrayLenghth - 1);
    } else {
      setChange(change - 1);
    }
  };
  const next = () => {
    setChange(change + 1);
    if (change == arrayLenghth - 1) {
      setChange(0);
    }
  };
  return (
    <div className="tw-pt-[5rem] container tw-mx-auto">
      <div className="tw-relative  tw-flex tw-justify-center tw-items-center">
        <p className="tw-w-[25rem]">{valueDescArray.at(change)}</p>
        <div
          onClick={previous}
          className="tw-absolute tw-left-[8rem] tw-z-20 tw-text-midGray tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-full tw-rounded-bl-full tw-rounded-tr-2xl tw-rounded-br-2xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={LeftArrow} alt="left-arrow" fill className="" />
          </div>
        </div>
        <div
          onClick={next}
          className="tw-absolute tw-right-[8rem]  tw-bg-darkPurple tw-rounded-tr-full tw-rounded-br-full tw-rounded-tl-2xl tw-rounded-bl-2xl tw-py-[1.15rem] tw-px-[0.92rem]"
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
