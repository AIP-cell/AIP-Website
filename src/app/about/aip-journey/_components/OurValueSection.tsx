"use client";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/wavePeachLeft.svg";
import SmBg from "@public/svg/about/aip-journey/smValueBg.svg";
import Image from "next/image";
import React, { useRef, useState } from "react";

import ValueSlick from "@/components/slick/ValueSlick";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import cn from "@/utils/tailwind";

const ourValues = [
  {
    text1: "Respect",
    text2: "Agency",
    desc: "It highlights the belief that success is achieved through collaboration, and collective efforts of individuals and teams. . It promotes a culture of teamwork, shared responsibility, effective communication, and continuous learning, creating an environment where everyone can thrive and contribute to the organizations success.",
  },
  {
    text1: "Respect",
    text2: "Agency",
    desc: "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  },
  {
    text1: "Respect",
    text2: "Agency",
    desc: "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  },
  {
    text1: "Respect",
    text2: "Agency",
    desc: "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
  },
];

const OurValueSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const OvalRef = useRef<HTMLDivElement>(null);
  const previous = () => {
    if (textRef.current && OvalRef.current) {
      const textSlide = textRef.current.querySelector("div");
      const OvalSlide = OvalRef.current.querySelector("div");
      //   console.log("card prev::", card);
      if (textSlide && OvalSlide) {
        const textWidth = textSlide.offsetWidth;
        const OvalWidth = OvalSlide.offsetWidth;
        // console.log("cardWidth::", cardWidth);
        textRef.current.scrollBy({ left: -textWidth, behavior: "smooth" });
        OvalRef.current.scrollBy({ left: -OvalWidth, behavior: "smooth" });
      }
    }
  };
  const next = () => {
    if (textRef.current && OvalRef.current) {
      const textSlide = textRef.current.querySelector("div");
      const OvalSlide = OvalRef.current.querySelector("div");
      //   console.log("card prev::", card);
      if (textSlide && OvalSlide) {
        const textWidth = textSlide.offsetWidth;
        const OvalWidth = OvalSlide.offsetWidth;
        // console.log("cardWidth::", cardWidth);
        textRef.current.scrollBy({ left: textWidth, behavior: "smooth" });
        OvalRef.current.scrollBy({ left: OvalWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className="tw-w-full tw-relative ">
        <Image
          src={Bg}
          alt="bg"
          className=" tw-hidden lg:tw-block tw-absolute -tw-top-[7rem] tw-h-[60rem]  tw-w-[400rem] "
        />
        <Image
          src={SmBg}
          alt="sm-bg"
          className=" tw-block lg:tw-hidden tw-absolute tw-top-[9rem] tw-w-full "
        />
        <div className="~tw-pt-[5rem]/[10rem]  tw-relative container tw-mx-auto ">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
            <h3 className="~tw-text-h4/h2 tw-text-darkGray tw-font-playFair tw-leading-[52.8px]">
              Our <i className="tw-text-textPurple">Values</i>
            </h3>
            <p className="~tw-pt-[0.5rem]/[1.25rem] ~tw-px-[4.1rem]/[20.938rem] tw-text-center tw-text-midGray  tw-font-inter ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.4rem]/[1.225rem]">
              The foundations that drive AIP to drive positive change
            </p>
          </div>
          <div className="~tw-pt-[2.5rem]/[5rem]  ">
            <div className="tw-relative tw-flex tw-flex-col ~tw-gap-[1.25rem]/[5rem] ">
              <div
                ref={OvalRef}
                className="~tw-px-[10rem]/[30.5rem] tw-flex  tw-snap-x tw-snap-mandatory tw-pointer-events-none tw-overflow-x-scroll no-scrollbar tw-gap-[5rem] tw-w-full"
              >
                {ourValues.map((items, i) => (
                  <div key={i} className="">
                    <OvalPurple
                      key={i}
                      sizeClass="~tw-size-[14.25rem]/[18.4rem]"
                      mainClass=" tw-snap-center "
                      text1={items.text1}
                      text2={items.text2}
                      textClass1="~tw-text-h5/h4 tw-font-playFair tw-text-purple10 ~tw-leading-[1.75rem]/[2.6rem]"
                      textClass2=" tw-font-playFairItalic ~tw-text-h5/h4 ~tw-leading-[1.75rem]/[2.6rem]"
                    />
                  </div>
                ))}
              </div>
              <div
                ref={textRef}
                className="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-x-scroll no-scrollbar tw-w-full"
              >
                {ourValues.map((items, i) => (
                  <div
                    key={i}
                    className=" tw-snap-center tw-w-full tw-flex tw-justify-center tw-shrink-0  container tw-mx-auto tw-pb-[5rem]"
                  >
                    <div className="tw-relative ~tw-w-[16.125rem]/[38rem] tw-flex tw-justify-center tw-items-center">
                      <p className=" tw-text-center ~tw-text-h9Copy5/h9Copy4 tw-text-midGray ~tw-leading-[1.225rem]/[1.4rem]">
                        {items.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ButtonAnimation
                onClick={previous}
                className="tw-absolute tw-top-[6rem] md:tw-top-auto md:tw-bottom-[11rem] ~tw-left-[1.25rem]/[8rem] tw-z-20 tw-text-white tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
              >
                <LeftSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
              </ButtonAnimation>
              <ButtonAnimation
                onClick={next}
                className="tw-absolute tw-top-[6rem] md:tw-top-auto md:tw-bottom-[11rem] ~tw-right-[1.25rem]/[8rem] tw-text-white tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
              >
                <RightSlickArrowSvg className="tw-w-[1rem] tw-h-[0.57rem]" />
              </ButtonAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* <ValueSlick slickArray={ourValues} /> */}
    </>
  );
};

export default OurValueSection;
