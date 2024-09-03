"use client";
import React, { useState } from "react";
import LeftArrow from "@public/svg/leftArrow.svg";
import RightArrow from "@public/svg/rightArrow.svg";
import Image from "next/image";
import ASrc from "@public/images/aSample.png";

import ACard from "@/components/cards/aCards/ACard";
import PCard from "@/components/cards/pCards/PCard";
import RightSlickArrowSvg from "../svg/RightSlickArrowSvg";
import LeftSlickArrowSvg from "../svg/LeftSlickArrowSvg";
import { ButtonAnimation } from "../animations/ButtonAnimation";
type Props = {
  slickArray: any[];
};
const TestimonialSlick = ({ slickArray }: Props) => {
  const [change, setChange] = useState<number>(0);
  const arrayLength = slickArray.length;
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
        <div className="tw-w-[25rem]">
          <div className="tw-flex tw-justify-center tw-gap-[4.563rem]">
            <ACard
              image="/images/aSample.png"
              name={slickArray.at(change).a.name}
              work={slickArray.at(change).a.work}
              desc={slickArray.at(change).a.desc}
            />
            <PCard
              image="/images/pSample.png"
              name={slickArray.at(change).p.name}
              work={slickArray.at(change).p.work}
              desc={slickArray.at(change).p.desc}
            />
          </div>
        </div>
        <ButtonAnimation
          onClick={previous}
          className="tw-absolute tw-left-[8rem] tw-top-[9.375rem] tw-z-20 tw-text-white hover:tw-bg-white  hover:tw-text-darkPurple  tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          {/* <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={LeftArrow} alt="left-arrow" fill className="" />
          </div> */}
        </ButtonAnimation>
        <ButtonAnimation
          onClick={next}
          className="tw-absolute tw-right-[8rem] tw-top-[9.375rem] tw-text-white hover:tw-bg-white tw-bg-darkPurple hover:tw-text-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
          {/* <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={RightArrow} alt="right-arrow" />
          </div> */}
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default TestimonialSlick;
