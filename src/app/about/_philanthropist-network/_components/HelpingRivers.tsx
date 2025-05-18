import React from "react";
import OvalPurple from "@/components/ovals/OvalPurple";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";

import Image from "next/image";
import cn from "@/utils/tailwind";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

const datas = [
  {
    text1: "Networking &",
    text2: "Convening",
    desc: "AIP gets philanthropists together, to share their stories, learnings and experience. This helps inspire and build a sense of community amongst the philanthropists.",
  },
  {
    text1: "Knowledge",
    text2: "Work",
    desc: "We create documents with the aim to provide philanthropists with comprehensive perspectives on sectors, topics, and themes, informing and inspiring them at various stages of their philanthropic journey. Conducting and sharing research on social issues, philanthropic trends, and successful interventions to inform and guide the giving efforts of philanthropists.",
  },
  {
    text1: "Bespoke",
    text2: "Partnering",
    desc: "We work with the philanthropists to help them build a perspective of sectors, so they can identify their sector of interest.  We help them define their philanthropic purpose and provide personalized consulting services to develop effective giving strategies, identify high-impact opportunities, and align their philanthropic goals with their values.",
  },
  {
    text1: "Thought",
    text2: "Leadership",
    desc: "Creating a space and enabling a space of regulatory environment for philanthropy to be incentivised. We believe that by advocating for policy changes and legislative reforms, we can foster a more supportive landscape for philanthropy.",
  },
];
const HelpingRivers = () => {
  return (
    <div className="relative ~pt-[7.5rem]/[12.5rem]">
      <Image
        src={CurveBg}
        alt=""
        className="hidden lg:flex absolute  items-center bottom-[9rem]  left-0"
      />
      <Image
        src={bottomCaseStudyCurveSvg}
        alt=""
        className="hidden lg:block absolute  bottom-[-16rem]  right-0"
      />
      <div className=" flex flex-col items-center container mx-auto relative">
        <TextStaggerAnimation
          text="Helping Rivers <color>Give</color>"
          className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-gray80"
        />
        <p className="text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] max-[20rem]:w-[19rem] ~w-[21.8rem]/[27.224rem] text-center   ~pt-[0.75rem]/[1.25rem] ~pb-[1.25rem]/[5rem]">
          At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress.
        </p>
        <div className="flex flex-col ~gap-[0.5rem]/0">
          {datas.map((items, i) => (
            <CardAnimation delay={0.1} key={i}>
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center ~gap-0/[1rem] ~pl-[2.8rem]/[8rem] ~pr-[2.8rem]/[14.3rem] max-[20rem]:!px-[0.5rem]",
                  {
                    "md:flex-row-reverse  !~pr-[2.8rem]/[8rem] !~pl-[2.8rem]/[14.3rem] max-[20rem]:!px-[0.5rem]":
                      i % 2 == 1,
                  }
                )}
              >
                <OvalPurple
                  textClass1="!leading-[2.113rem] !text-h4a !font-playFair"
                  textClass2="!leading-[2.113rem] !text-h4a !font-playFair"
                  sizeClass="~size-[16.5rem]/[18.438rem]"
                  text1={items.text1}
                  text2={items.text2}
                />
                <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center md:text-left text-midGray">
                  {items.desc}
                </p>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpingRivers;
