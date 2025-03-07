"use client";
import React from "react";
import StoryBg from "@public/svg/home/aipWayBg.svg";
import LeftHomePagePeachCurve from "@public/svg/leftHomePagePeach.svg";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import AipWaySvg from "@/components/svg/background-svg/AipWaySvg";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
const AipWay = () => {
  return (
    <div className="w-full relative">
      <Image
        src={LeftHomePagePeachCurve}
        alt=""
        className="hidden left-0 absolute top-[15rem] ~w-[6.956rem]/[13.125rem] ~h-[37.5rem]/[19.875rem]"
      />
      <FadeInAnimation
        delay={0.1}
        x1={-20}
        x2={0}
        duration={1}
        className="block absolute ~left-[-6rem]/0 ~top-[2rem]/[2rem]  ~w-[16rem]/[26rem] ~h-[25rem]/[37.5rem]"
      >
        <AipWaySvg className="block absolute ~left-[-6rem]/0 ~top-[2rem]/[2rem] ~w-[16rem]/[26rem] ~h-[25rem]/[37.5rem]" />
      </FadeInAnimation>
      {/* <Image
        src={StoryBg}
        alt="bg-image"
        className="block absolute ~left-[-6rem]/0 ~top-[2rem]/[2rem] ~w-[16rem]/[26rem] ~h-[25rem]/[37.5rem]"
      /> */}

      {/* <FadeInAnimation delay={0.1} y1={-20} y2={0} duration={1} className="absolute ~top-[7.75rem]/[5rem] flex justify-center w-full md:w-auto md:block"> */}
      <OvalPeach
        mainClass="absolute ~top-[7.75rem]/[5rem] flex justify-center w-full md:w-auto md:block ~md:~left-0/[14.093rem]"
        text1="The"
        textClass1="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] !text-midGray !font-playFair !text-center"
        sizeClass="~size-[17rem]/[24.166rem]"
        text2="AIP Way"
        textClass2=" ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] !text-textPurple !font-playFairItalic"
      />
      {/* </FadeInAnimation> */}
      <div className="hidden md:block absolute bottom-[3.125rem] right-[14.366rem]">
        <Image src={OvalPeachSvg} alt="" className="size-[8.726rem]" />
      </div>

      <div className=" ~/md:~pt-[25rem]/[5rem] container mx-auto  relative  flex flex-col justify-center items-end ~pl-[1.75rem]/0  ~md:~pr-[1.75rem]/[16rem]">
        <div className=" ~pt-[2rem]/[5rem]  flex flex-col ~gap-[1.5rem]/[1.625rem]">
          <div className="flex font-playFair font-medium flex-col text-midGray   pr-[5rem] ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p> A philanthropist&apos;s journey is like a river,</p>
            <p>It gives as much as it can,</p>
          </div>
          <div className="flex flex-col font-playFair font-medium text-midGray  pl-[5rem] ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>nurtures ecosystems,</p>
            <p>connects communities and</p>
            <p>sculpts the landscape.</p>
          </div>

          <div className="flex flex-col font-playFair font-medium pr-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>Unlocking human potential.</p>
            <p>Inspiring change.</p>
            {/* <p>and sculpts the landscape</p> */}
          </div>

          <div className="flex flex-col font-playFair font-medium pl-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>No two rivers are the same;</p> <p>No two philanthropic</p>
            <p>journeys are the same.</p>
          </div>
          <div className="flex flex-col font-playFair font-medium pr-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>AIP helps shape the</p>
            <p>journeys and the flow,</p>
            <p>from its origin to its destination.</p>
          </div>

          <div className="relative flex flex-col font-playFair font-medium pl-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p> From inspiration</p>
            <p>to Impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AipWay;
