import OvalPurple from "@/components/ovals/OvalPurple";
import Image from "next/image";
import React from "react";
import Bg from "@public/svg/wavePeachRight.svg";
import SmBg from "@public/svg/home/smMemberBg.svg";
import { THomePageCount } from "@/api/type";
import OvalPurpleCount from "@/components/ovals/OvalPurpleCount";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import TextAnimation from "@/components/animations/TextAnimation";
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
          <div className=" w-full xl:w-[65%] ~pl-[1.25rem]/[7rem] ~/md:~pr-[1.25rem]/[2rem] xl:pr-0 z-40">
           <TextAnimation delay={0.2}>
              <div className="hidden md:block ~text-h4/h3  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] z-40">
                We believe Philanthropy can <br /> catalyse India's
                transformation; <br /> Philanthropists are keen to make a <br />{" "}
                difference; and Philanthropists are <br /> best at inspiring each
                other.
              </div>
           </TextAnimation>
          <TextAnimation  delay={0.2}>
              <div className="block md:hidden ~text-h4/h3  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] z-40">
                We believe Philanthropy can catalyse India's transformation;
                Philanthropists are keen to make a difference; and Philanthropists
                are best at inspiring each other.
              </div>
          </TextAnimation>
           <TextAnimation delay={0.2}>
              <div className="text-midGray ~leading-[1.22rem]/[1.4rem] pt-[0.7875rem] ~pr-[1rem]/[18rem] z-40">
                With our Core Founders, Founders and purposefully engaged
                philanthropists, the AIP network is growing and shaping personal
                giving by UHNIs and helping catalyse strategic giving.
              </div>
           </TextAnimation>
            {/* <WordStaggerAnimation
              text="We believe Philanthropy can <br> catalyse India's transformation;<br>
              Philanthropists are keen to make a <br> difference; and Philanthropists are <br> best at inspiring each other."
              className="hidden md:block ~text-h4/h3  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] z-40"
            />
            <WordStaggerAnimation
              text="We believe Philanthropy can catalyse India's transformation;
              Philanthropists are keen to make a difference; and Philanthropists are best at inspiring each other."
              className="block md:hidden ~text-h4/h3  font-playFair text-gray50 ~leading-[2.6rem]/[3.3rem] z-40"
            />
            <WordStaggerAnimation
              text="With our Core Founders, Founders and purposefully engaged philanthropists, the AIP network is growing and shaping personal giving by UHNIs and helping catalyse strategic giving."
              className="text-midGray ~leading-[1.22rem]/[1.4rem] pt-[0.7875rem] ~pr-[1rem]/[18rem] z-40"
            /> */}
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
              mainClass=" absolute ~top-0/[-2rem] left-0 md:left-auto   md:right-[20rem] lg:~right-[46rem]/[11.862rem] "
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
