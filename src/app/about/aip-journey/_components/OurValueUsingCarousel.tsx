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
  type CarouselApi,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import useClient from "@/hooks/useClient";

const OurValueUsingCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const [current, setCurrent] = React.useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + (isDesktop ? 1 : 0));
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + (isDesktop ? 1 : 0));
    });
  }, [api, isDesktop]);
  const client = useClient();
  if (!client) return;

  let ourValues;
  isDesktop
    ? (ourValues = [
        {},
        {
          text1: "1Respect",
          text2: "Agency",
          desc: "1It highlights the belief that success is achieved through collaboration, and collective efforts of individuals and teams. . It promotes a culture of teamwork, shared responsibility, effective communication, and continuous learning, creating an environment where everyone can thrive and contribute to the organizations success.",
        },
        {
          text1: "2Respect",
          text2: "Agency",
          desc: "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
        {
          text1: "3 Respect",
          text2: "Agency",
          desc: "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
        {
          text1: "4 Respect",
          text2: "Agency",
          desc: "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
        {},
      ])
    : (ourValues = [
        {
          text1: "1Respect",
          text2: "Agency",
          desc: "1 It highlights the belief that success is achieved through collaboration, and collective efforts of individuals and teams. . It promotes a culture of teamwork, shared responsibility, effective communication, and continuous learning, creating an environment where everyone can thrive and contribute to the organizations success.",
        },
        {
          text1: "2 Respect",
          text2: "Agency",
          desc: "2 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
        {
          text1: "3 Respect",
          text2: "Agency",
          desc: "3 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
        {
          text1: "4 Respect",
          text2: "Agency",
          desc: "4 believe in fostering an environment where every individual's voice is heard and respected, encouraging them to take ownership of their work, make independent decisions, and contribute to the organisation’s success.",
        },
      ]);

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
          setApi={setApi}
          className="~pt-[5rem]/[10rem] relative container mx-auto w-full items-center"
        >
          <div className="flex flex-col justify-center items-center ">
            <h3 className="~text-h4/h2 text-darkGray font-playFair leading-[52.8px]">
              Our <i className="text-textPurple">Values</i>
            </h3>
            <p className="~pt-[0.5rem]/[1.25rem] ~px-[4.1rem]/[20.938rem] text-center text-midGray  font-inter ~text-h9Copy5/h9Copy4 ~leading-[1.4rem]/[1.225rem]">
              The foundations that drive AIP to drive positive change
            </p>
          </div>
          <div className="relative">
            <CarouselContent className="~pt-[2.5rem]/[5rem] relative ">
              {ourValues.map((items, i) => (
                <CarouselItem
                  key={i}
                  className="basis:1/1 xl:!basis-1/3 justify-center gap-[1.25rem] flex "
                >
                  <div className=" flex justify-center  ~size-[14.25rem]/[18.4rem]">
                    {isDesktop ? (
                      i != 0 &&
                      i != ourValues.length - 1 && (
                        <OvalPurple
                          sizeClass="~size-[14.25rem]/[18.4rem]"
                          mainClass=" snap-center "
                          text1={items.text1}
                          text2={items.text2}
                          textClass1="~text-h5/h4 font-playFair text-purple10 ~leading-[1.75rem]/[2.6rem]"
                          textClass2=" font-playFairItalic ~text-h5/h4 ~leading-[1.75rem]/[2.6rem]"
                        />
                      )
                    ) : (
                      <OvalPurple
                        sizeClass="~size-[14.25rem]/[18.4rem]"
                        mainClass=" snap-center "
                        text1={items.text1}
                        text2={items.text2}
                        textClass1="~text-h5/h4 font-playFair text-purple10 ~leading-[1.75rem]/[2.6rem]"
                        textClass2=" font-playFairItalic ~text-h5/h4 ~leading-[1.75rem]/[2.6rem]"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute ~bottom-[6rem]/[-4rem] ~px-[0.5rem]/[2rem] z-[50] flex w-full justify-between">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <div className=" justify-center gap-[1.25rem] pb-[5rem] relative items-center">
            <div className="flex  w-full">
              <div className=" w-full flex justify-center shrink-0  container mx-auto ">
                <div className="relative ~w-[16.125rem]/[38rem] flex justify-center items-center">
                  <p className=" text-center ~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem]">
                    {ourValues.at(current)?.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:hidden flex justify-center w-full pt-[2rem]">
              <div className=" w-[4.5rem] flex gap-[0.5rem] ">
                {ourValues.map((items: any, index: number) => (
                  <div
                    key={index}
                    className={cn(
                      " rounded-full h-[0.5rem] bg-[#E1CCED80] basis-1/5",
                      { "basis-2/4 bg-textPurple": index === current }
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* <CarouselContent>
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
          </CarouselContent> */}
        </Carousel>
      </div>
      {/* <ValueSlick slickArray={ourValues} /> */}
    </>
  );
};

export default OurValueUsingCarousel;
