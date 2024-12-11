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
      <div className="w-full relative ">
        <Image
          src={Bg}
          alt="bg"
          className=" hidden lg:block absolute -top-[7rem] h-[60rem]  w-[400rem] "
        />
        <Image
          src={SmBg}
          alt="sm-bg"
          className=" block lg:hidden absolute top-[9rem] w-full "
        />
        <div className="~pt-[5rem]/[10rem]  relative container mx-auto ">
          <div className="flex flex-col justify-center items-center ">
            <h3 className="~text-h4/h2 text-darkGray font-playFair leading-[52.8px]">
              Our <i className="text-textPurple">Values</i>
            </h3>
            <p className="~pt-[0.5rem]/[1.25rem] ~px-[4.1rem]/[20.938rem] text-center text-midGray  font-inter ~text-h9Copy5/h9Copy4 ~leading-[1.4rem]/[1.225rem]">
              The foundations that drive AIP to drive positive change
            </p>
          </div>
          <div className="~pt-[2.5rem]/[5rem]  ">
            <div className="relative flex flex-col ~gap-[1.25rem]/[5rem] ">
              <div
                ref={OvalRef}
                className="~px-[10rem]/[30.5rem] flex  snap-x snap-mandatory pointer-events-none overflow-x-scroll no-scrollbar gap-[5rem] w-full"
              >
                {ourValues.map((items, i) => (
                  <div key={i} className="">
                    <OvalPurple
                      key={i}
                      sizeClass="~size-[14.25rem]/[18.4rem]"
                      mainClass=" snap-center "
                      text1={items.text1}
                      text2={items.text2}
                      textClass1="~text-h5/h4 font-playFair text-purple10 ~leading-[1.75rem]/[2.6rem]"
                      textClass2=" font-playFairItalic ~text-h5/h4 ~leading-[1.75rem]/[2.6rem]"
                    />
                  </div>
                ))}
              </div>
              <div
                ref={textRef}
                className="flex snap-x snap-mandatory overflow-x-scroll no-scrollbar w-full"
              >
                {ourValues.map((items, i) => (
                  <div
                    key={i}
                    className=" snap-center w-full flex justify-center shrink-0  container mx-auto pb-[5rem]"
                  >
                    <div className="relative ~w-[16.125rem]/[38rem] flex justify-center items-center">
                      <p className=" text-center ~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem]">
                        {items.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <ButtonAnimation
                onClick={previous}
                className="absolute top-[6rem] md:top-auto md:bottom-[11rem] ~left-[1.25rem]/[8rem] z-20 text-white leading-[22.4px] font-inter bg-darkPurple rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl py-[1.15rem] px-[0.92rem]"
              >
                <LeftSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
              </ButtonAnimation>
              <ButtonAnimation
                onClick={next}
                className="absolute top-[6rem] md:top-auto md:bottom-[11rem] ~right-[1.25rem]/[8rem] text-white bg-darkPurple rounded-tr-3xl rounded-br-3xl rounded-tl-xl rounded-bl-xl py-[1.15rem] px-[0.92rem]"
              >
                <RightSlickArrowSvg className="w-[1rem] h-[0.57rem]" />
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
