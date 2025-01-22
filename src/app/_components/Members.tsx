import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "@public/svg/wavePeachRight.svg";
import SmBg from "@public/svg/home/smMemberBg.svg";
import { THomePageCount } from "@/api/type";
import OvalPurpleCount from "@/components/ovals/OvalPurpleCount";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
// import MembersWavePeachRightSvg from "@/components/svg/background-svg/MembersWavePeachRightSvg";

type Props = {
  countData: THomePageCount;
};
const Members = ({ countData }: Props) => {
  return (
    <div className=" relative w-full">
      {/* <MembersWavePeachRightSvg className="hidden md:block max-cover absolute w-[300rem] h-full ~md:~bottom-[0rem]/[-5rem]" /> */}

      <Image
        src={Bg}
        alt=""
        className="hidden md:block max-cover absolute w-[300rem] h-full ~md:~bottom-[0rem]/[-5rem]"
      />
      <div className=" container mx-auto ~pt-[5rem]/[13.25rem]">
        <div className="relative flex flex-col xl:flex-row w-full ~h-[45rem]/[49rem]  ~gap-[2rem]/0">
          <div className=" w-full xl:w-[65%] ~pl-[1.25rem]/[7rem] ~/md:~pr-[1.25rem]/[2rem] xl:pr-0">
            {/* <h2 className="~text-h4/h2  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem]">
              Accelerate Indian
            </h2>
            <h2 className="~text-h4/h2  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] ">
              Philanthropy is a peer network set up
              <span className="text-textPurple font-playFairItalic">
                &nbsp;by philanthropists,
              </span>
            </h2>
            <h2 className="~text-h4/h2 font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] ">
              <span className="text-textPurple font-playFairItalic">
                for philanthropists
              </span>
              &nbsp;to support their giving efforts.
            </h2> */}
            <WordStaggerAnimation
              text="Accelerate Indian"
              className="~text-h4/h2  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem]"
            />
            <WordStaggerAnimation
              text="Philanthropy is a peer network set up <color>by philanthropists,</color>"
              className="~text-h4/h2  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem]"
            />
            <WordStaggerAnimation
              text="<color>for philanthropists</color> to support their giving efforts."
              className="~text-h4/h2  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem]"
            />
          </div>
          {/* <OvalPurpleSvg className="-top-[4rem] right-[11.85rem]"/> */}
          <div className="w-full xl:w-[35%] relative flex justify-center ">
            <Image
              src={SmBg}
              alt=""
              className="block md:hidden object-cover absolute w-full bottom-[-30rem] "
            />
            <OvalPurple
              sizeClass="~size-[13rem]/[17.3rem]"
              textClass1="~text-h4/h3"
              textClass2="~text-h9Copy5/h9Copy4"
              text1={`${countData?.coreFoundersCount}`}
              text2="Core Founders"
              mainClass=" absolute ~top-0/[-4rem] left-0 md:left-auto   md:right-[20rem] lg:~right-[46rem]/[11.862rem] "
            />
            <OvalPurple
              sizeClass="~size-[13rem]/[17.3rem]"
              textClass1="~text-h4/h3"
              textClass2="~text-h9Copy5/h9Copy4"
              text1={`${countData?.foundersCount}`}
              text2="Founders"
              mainClass=" absolute ~top-[6.75rem]/[15.5rem] right-0  md:right-[6.4rem] "
            />
            <OvalPurpleCount
              sizeClass="~size-[13rem]/[17.3rem]"
              countEnd={countData?.membersCount}
              countClass="!text-white"
              text2="Members"
              textClass2="~text-h9Copy5/h9Copy4 !text-white"
              mainClass="absolute ~/md:~top-[14.3rem]/[15rem] lg:~top-[11rem]/[20rem]  left-0 md:left-auto ~md:~right-[25rem]/[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
