"use client";
import React, { useState } from "react";
// import LeftArrow from "@public/svg/leftArrow.svg";
// import RightArrow from "@public/svg/rightArrow.svg";
// import Image from "next/image";
// import ASrc from "@public/images/aSample.png";
import { useMediaQuery } from "react-responsive";
import ACard from "@/components/cards/aCards/ACard";
import PCard from "@/components/cards/pCards/PCard";
import RightSlickArrowSvg from "../svg/RightSlickArrowSvg";
import LeftSlickArrowSvg from "../svg/LeftSlickArrowSvg";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import cn from "@/utils/tailwind";
import useClient from "@/hooks/useClient";
type Props = {
  slickArray: any[];
};
const TestimonialSlick = ({ slickArray }: Props) => {
  const [change, setChange] = useState<number>(0);

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const itemsPerSlide = isDesktop ? 2 : 1;
  const arrayLength = slickArray.length;
  const previous = () => {
    if (change <= 0) {
      setChange(arrayLength - itemsPerSlide);
    } else setChange(change - itemsPerSlide);
  };
  const next = () => {
    if (change >= arrayLength - itemsPerSlide) {
      setChange(0);
    } else setChange(change + itemsPerSlide);
  };
  const isClient = useClient();
  if (!isClient) {
    return;
  }
  return (
    <div>
      <div className=" ~tw-pt-[2.5rem]/[5rem] container tw-mx-auto">
        <div className="tw-relative  tw-flex tw-justify-center tw-items-center">
          <div className="">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-justify-center tw-gap-[4.563rem]">
              {slickArray
                .slice(change, change + itemsPerSlide)
                .map((items, i) => {
                  const actualIndex = (change + i) % arrayLength;
                  // console.log("actualIndex", actualIndex);
                  return (
                    <div key={actualIndex}>
                      {actualIndex % 2 == 0 && (
                        <ACard
                          key={i}
                          image="/images/sample.png"
                          name={items.name}
                          work={items.work}
                          desc={items.desc}
                        />
                      )}
                      {actualIndex % 2 == 1 && (
                        <PCard
                          key={i}
                          image="/images/sample.png"
                          name={items.name}
                          work={items.work}
                          desc={items.desc}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="tw-flex tw-gap-[1.25rem] tw-absolute tw-bottom-[-8rem] md:tw-bottom-auto md:tw-top-[9.375rem] tw-justify-center md:tw-justify-between tw-w-full ~tw-px-0/[7.813rem] tw-z-20">
            <ButtonAnimation
              onClick={previous}
              className=" tw-text-white hover:tw-bg-white  hover:tw-text-darkPurple  tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
            >
              <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={next}
              className=" tw-text-white hover:tw-bg-white tw-bg-darkPurple hover:tw-text-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
            >
              <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
            </ButtonAnimation>
          </div>
        </div>
      </div>
      <div className="md:tw-hidden tw-flex tw-justify-center tw-w-full  tw-pt-[3.25rem]">
        <div className=" tw-w-[4.5rem] tw-flex tw-gap-[0.5rem] ">
          {slickArray.map((items: any, index: number) => (
            <div
              key={index}
              className={cn(
                " tw-rounded-full tw-h-[0.5rem] tw-bg-[#E1CCED80] tw-basis-1/5",
                { "tw-basis-2/4 tw-bg-textPurple": index === change }
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlick;
