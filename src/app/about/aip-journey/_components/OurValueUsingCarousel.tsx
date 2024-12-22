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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const OurValueUsingCarousel = () => {
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
        <Carousel
          opts={{
            align: "start",
          }}
          className="~pt-[5rem]/[10rem] relative container mx-auto w-full "
        >
          <div className="flex flex-col justify-center items-center ">
            <h3 className="~text-h4/h2 text-darkGray font-playFair leading-[52.8px]">
              Our <i className="text-textPurple">Values</i>
            </h3>
            <p className="~pt-[0.5rem]/[1.25rem] ~px-[4.1rem]/[20.938rem] text-center text-midGray  font-inter ~text-h9Copy5/h9Copy4 ~leading-[1.4rem]/[1.225rem]">
              The foundations that drive AIP to drive positive change
            </p>
          </div>
          <CarouselContent className="~pt-[2.5rem]/[5rem]  relative ">
            {ourValues.map((items, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center ~gap-[1.25rem]/[5rem] "
              >
                <CarouselItem
                  key={i}
                  className="md:!basis-1/2 lg:!basis-1/2 xl:!basis-1/3 justify-center gap-[1.25rem] flex  "
                >
                  <div className=" flex justify-center w-full">
                    <OvalPurple
                      sizeClass="~size-[14.25rem]/[18.4rem]"
                      mainClass=" snap-center "
                      text1={items.text1}
                      text2={items.text2}
                      textClass1="~text-h5/h4 font-playFair text-purple10 ~leading-[1.75rem]/[2.6rem]"
                      textClass2=" font-playFairItalic ~text-h5/h4 ~leading-[1.75rem]/[2.6rem]"
                    />
                  </div>
                </CarouselItem>
                {/* <CarouselItem className="basis-1 justify-center gap-[1.25rem] flex  ">
                  <div className="flex  w-full">
                    <div className=" w-full flex justify-center shrink-0  container mx-auto pb-[5rem]">
                      <div className="relative ~w-[16.125rem]/[38rem] flex justify-center items-center">
                        <p className=" text-center ~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem]">
                          {items.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem> */}
              </div>
            ))}
          </CarouselContent>
          <CarouselContent>
            {ourValues.map((items, i) => (
              <CarouselItem
                key={i}
                className="basis-full justify-center gap-[1.25rem] flex  "
              >
                <div className="flex  w-full">
                  <div className=" w-full flex justify-center shrink-0  container mx-auto pb-[5rem]">
                    <div className="relative ~w-[16.125rem]/[38rem] flex justify-center items-center">
                      <p className=" text-center ~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem]">
                        {items.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top h-full w-full justify-center flex items-center">
            <div className="absolute flex w-full justify-between">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
      {/* <ValueSlick slickArray={ourValues} /> */}
    </>
  );
};

export default OurValueUsingCarousel;
