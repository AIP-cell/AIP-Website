import React from "react";
import Image from "next/image";
import OvalPeach from "@/components/ovals/OvalPeach";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/about/aip-impact/foundationFactBg.svg";
import Link from "next/link";
import OvalPeachCount from "@/components/ovals/OvalPeachCount";
import { TFoundationFacts } from "@/api/type";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import cn from "@/utils/tailwind";
import OvalPurpleCount from "@/components/ovals/OvalPurpleCount";
type Props = {
  button?: string;
  foundationFacts: TFoundationFacts;
  className?: string;
};
const FoundationFacts = ({ button, foundationFacts, className }: Props) => {
  return (
    <div className={cn("relative w-full ~pt-[5rem]/[10rem]", className)}>
      <Image
        src={Bg}
        alt=""
        className="block h-[95rem] object-cover  absolute ~top-[-22rem]/[-19rem] w-[500rem]"
      />
      <div className="relative container mx-auto ">
        {/* <h2 className=" ~text-h4/h2 text-center font-playFair ~leading-[2.6rem]/[3.3rem]">
          Foundation{" "}
          <span className="text-textPurple font-playFairItalic">Facts</span>
        </h2> */}
        <TextStaggerAnimation
          text="Foundation <color>Facts</color>"
          className="~text-h4/h2 text-center font-playFair ~leading-[2.6rem]/[3.3rem]"
        />
        <div className="relative pb-[50.8rem]">
          {foundationFacts?.coreFoundersCount > 0 && (
            <OvalPurple
              mainClass="absolute ~top-[2.5rem]/[2.9rem]  right-0 md:right-auto md:~left-[2rem]/[20.5rem] "
              text1={foundationFacts?.coreFoundersCount}
              textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold "
              sizeClass="~size-[14.2rem]/[17.38rem]"
              text2="Core founders and"
              textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
              text3="founders"
              textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
            />
          )}
          {foundationFacts?.researchReportsCount && (
            <OvalPeach
              mainClass="absolute  flex top-[11rem] md:~top-[5.8rem]/[6.7rem]  left-0 md:left-auto ~md:!~right-[5rem]/[21rem] "
              text1={foundationFacts?.researchReportsCount}
              textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold !text-black"
              sizeClass="~size-[14.2rem]/[17.38rem]"
              // text2="Countries"
              // textClass2=" font-bold text-h6Copy1 leading-[2.1rem]  "
              text3="Research Reports"
              textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
              textParentClass="!pt-0"
            />
          )}
          {foundationFacts?.networkMembersCount > 0 && (
            <OvalPurpleCount
              mainClass="absolute ~top-[19rem]/[21rem] md:~left-0/[8.93rem] left-auto right-0 md:right-auto"
              countEnd={foundationFacts?.networkMembersCount}
              // textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem]  font-semibold !text-white"
              sizeClass="~size-[14.2rem]/[17.38rem]"
              text2="Network"
              textClass2="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "
              text3="Members"
              textClass3="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "

            />
          )}
          {foundationFacts?.purposefulEngagementsCount > 0 && (
            <OvalPurpleCount
              mainClass="absolute top-[27rem] md:~top-[22rem]/[25rem]  left-0 md:left-auto md:~right-0/[8rem] "
              countEnd={foundationFacts?.purposefulEngagementsCount}
              // textClass1="~text-h4/h3 ~leading-[2.6rem]/[3.25rem] font-semibold"
              sizeClass="~size-[14.2rem]/[17.38rem]"
              text2="Purposeful"
              textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "
              text3="Engagements"
              textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] "

            />
          )}
          {foundationFacts?.foundersCount > 0 && (
            <OvalPeachCount
              mainClass="absolute flex md:w-full justify-center  top-[34rem] md:~top-[30rem]/[27rem] !right-0 md:right-auto"
              countEnd={foundationFacts?.foundersCount}
              sizeClass="~size-[14.2rem]/[17.38rem]"
              text2="Knowledge"
              textClass2=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] !text-black"
              text3="Resources"
              textClass3=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] !text-black"
            />
          )}
        </div>
        {/* pt-[47rem] */}
        {button && (
          <div className="flex justify-center absolute ~bottom-[-2rem]/0 w-full ">
            <Link href="/about/aip-impact/foundation-fact-sheet">
              <ButtonAnimation className="bg-darkPurple hover:bg-white text-white hover:text-darkPurple rounded-full">
                <p className="px-[1.75rem] py-[0.75rem] leading-[1.4rem]">
                  {button}
                </p>
              </ButtonAnimation>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoundationFacts;
