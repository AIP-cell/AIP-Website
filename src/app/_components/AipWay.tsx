"use client";
import React from "react";
import StoryBg from "@public/svg/home/aipWayBg.svg";
import LeftHomePagePeachCurve from "@public/svg/leftHomePagePeach.svg";
import OvalPeachSvg from "@public/svg/ovalPeach.svg";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
const AipWay = () => {
  return (
    <div className="w-full relative">
      <Image
        src={LeftHomePagePeachCurve}
        alt=""
        className="hidden left-0 absolute top-[15rem] ~w-[6.956rem]/[13.125rem] ~h-[37.5rem]/[19.875rem]"
      />
      <Image
        src={StoryBg}
        alt="bg-image"
        className="block absolute ~left-[-6rem]/0 ~top-[2rem]/[2rem] ~w-[16rem]/[26rem] ~h-[25rem]/[37.5rem]"
      />
      <OvalPeach
        mainClass="absolute ~top-[7.75rem]/[5rem] flex justify-center w-full md:w-auto md:block ~md:~left-0/[14.093rem]"
        text1="The"
        textClass1="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] !text-midGray !font-playFair !text-center"
        sizeClass="~size-[17rem]/[24.166rem]"
        text2="AIP Way"
        textClass2=" ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] !text-textPurple !font-playFairItalic"
      />
      <div className="hidden md:block absolute bottom-[3.125rem] right-[14.366rem]">
        <Image src={OvalPeachSvg} alt="" className="size-[8.726rem]" />
      </div>

      <div className=" ~/md:~pt-[25rem]/[5rem] container mx-auto  relative  flex flex-col justify-center items-end ~pl-[1.75rem]/0  ~md:~pr-[1.75rem]/[16rem]">
        <div className=" ~pt-[2rem]/[5rem]  flex flex-col ~gap-[1.5rem]/[1.625rem]">
          <div className="flex font-playFair font-medium flex-col text-midGray   pr-[5rem] ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p> A philanthropist’s wealth is the origin</p>
            <p>and Philanthropy is the river.</p>
          </div>
          <div className="flex flex-col font-playFair font-medium text-midGray  pl-[5rem] ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p> When a river flows,</p>
            <p>it gives as much as it can</p>
            <p>To everyone on its way</p>
          </div>

          <div className="flex flex-col font-playFair font-medium pr-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>It nurtures ecosystems;</p>
            <p> connects communities</p> <p>and sculpts the landscape</p>
          </div>

          <div className="flex flex-col font-playFair font-medium pl-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>To enable conversations.</p> <p>To foster understanding.</p>
            <p>That inspires change.</p>
          </div>
          <div className="flex flex-col font-playFair font-medium pr-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>No two rivers are the same;</p>
            <p>No two philanthropists are the same;</p>
            <p>No two journeys are alike.</p>
          </div>

          <div className="relative flex flex-col font-playFair font-medium pl-[5rem] text-midGray  ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.4rem]">
            <p>AIP is the gentle uplifting spirit,</p>
            <p>The bank that holds, that shapes it all.</p>
            <p>To form & connect networks.</p> <p>That bridge gaps.</p>
            <p>Taking a philanthropist,</p> <p>From inspiration to impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AipWay;
