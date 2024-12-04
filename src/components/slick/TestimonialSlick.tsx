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
    if (change <= 0) {
      setChange(arrayLength - 2);
    } else setChange(change - 2);
  };
  const next = () => {
    if (change >= arrayLength - 2) {
      setChange(0);
    } else setChange(change + 2);
  };
  return (
    <div className="tw-hidden md:tw-block ~tw-pt-[2.5rem]/[5rem] container tw-mx-auto">
      <div className="tw-relative  tw-flex tw-justify-center tw-items-center">
        <div className="">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-justify-center md:~tw-gap-[0.5rem]/[4.563rem]">
            {slickArray.slice(change, change + 2).map((items, i) => (
              <>
                {i % 2 == 0 && (
                  <ACard
                    image="/images/aSample.png"
                    name={items.name}
                    work={items.work}
                    desc={items.desc}
                  />
                )}
                {i % 2 == 1 && (
                  <PCard
                    image="/images/pSample.png"
                    name={items.name}
                    work={items.work}
                    desc={items.desc}
                  />
                )}
              </>
            ))}
          </div>
        </div>
        <ButtonAnimation
          onClick={previous}
          className="tw-absolute md:~tw-left-[-3rem]/[8rem] tw-bottom-0 md:tw-bottom-auto md:tw-top-[9.375rem] tw-z-20 tw-text-white hover:tw-bg-white  hover:tw-text-darkPurple  tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
        </ButtonAnimation>
        <ButtonAnimation
          onClick={next}
          className="tw-absolute md:~tw-right-[-3rem]/[8rem] tw-bottom-0 md:tw-bottom-auto md:tw-top-[9.375rem] tw-text-white hover:tw-bg-white tw-bg-darkPurple hover:tw-text-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default TestimonialSlick;
