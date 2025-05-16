import OvalPurple from "@/components/ovals/OvalPurple";
import React from "react";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";

import Image from "next/image";
import cn from "@/utils/tailwind";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
const datas = [
  {
    text1: "Networking &",
    text2: "Convening",
    desc: "AIP gets philanthropists together, to share their stories, learnings and experience. This helps build a sense of community amongst the philanthropists which inspires and influences strategic philanthropy.",
  },
  {
    text1: "Knowledge",
    text2: "Work",
    desc: "With our well researched knowledge resources and comprehensive perspectives on sectors, topics, and themes we inform and inspire philanthropists at various stages of their philanthropic journey. We enable philanthropists to engage in shared learning, providing insights across sectors and highlighting effective giving practices.",
  },
  {
    text1: "Bespoke",
    text2: "Partnering",
    desc: " We work with individual philanthropists and UHNIs to help define their philanthropic purpose, build perspective in their areas of interest, craft personalized giving plans and learning journeys tailored to their unique motivations.",
  },
  {
    text1: "Thought",
    text2: "Leadership",
    desc: "We work towards creating and advancing a thriving philanthropic ecosystem in India.Thus,influencing the broader landscape to unlock catalytic funding, deepen philanthropic impact and promote “Ease of Giving”.",
  },
];
const FourPillars = () => {
  return (
    <div className="relative">
      <Image
        src={CurveBg}
        alt=""
        className="hidden lg:flex absolute  items-center bottom-[1rem]  left-0"
      />
      <Image
        src={bottomCaseStudyCurveSvg}
        alt=""
        className="hidden lg:block absolute  top-[27rem]  right-0"
      />
      <div className=" flex flex-col items-center container mx-auto relative">
        {/* <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-gray80">
          Our
          <span className="text-textPurple font-playFairItalic">
            &nbsp;Four Pillars
          </span>
        </h2> */}
        <WordStaggerAnimation
          text="Our <color>Four Pillars</color>"
          className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-gray80"
        />
        <WordStaggerAnimation
          className="text-midGray  ~leading-[1.225rem]/[1.4rem] max-[20rem]:w-[19rem] ~w-[21rem]/[38.14rem] ~text-h9Copy5/h9Copy4 text-center  ~pt-[0.75rem]/[1.25rem] ~pb-[1.25rem]/[5rem]"
          text="  At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress. Our Theory of Change is rooted in the
          conviction that philanthropists are not only eager to make a
          difference but are also uniquely positioned to inspire one another. We
          aim to create a vibrant movement of strategic giving that drives
          sustainable impact across the country."
        />
        {/* <p className="text-midGray  ~leading-[1.225rem]/[1.4rem] max-[20rem]:w-[19rem] ~w-[21rem]/[38.14rem] ~text-h9Copy5/h9Copy4 text-center  ~pt-[0.75rem]/[1.25rem] ~pb-[1.25rem]/[5rem]">
          At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress. Our Theory of Change is rooted in the
          conviction that philanthropists are not only eager to make a
          difference but are also uniquely positioned to inspire one another. We
          aim to create a vibrant movement of strategic giving that drives
          sustainable impact across the country.
        </p> */}
        <div className="flex flex-col ~gap-[0.5rem]/0">
          {datas.map((items, i) => (
            <CardAnimation index={i} delay={0.2} key={i}>
              <div
                key={i}
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

export default FourPillars;
