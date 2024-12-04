import React from "react";
import OvalPurple from "@/components/ovals/OvalPurple";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";

import Image from "next/image";
import cn from "@/utils/tailwind";

const datas = [
  {
    text1: "Convening &",
    text2: "Networking",
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
    desc: " We collaborate with individual philanthropists and UHNIs to craft personalized giving plans and learning journeys tailored to their unique motivations.",
  },
  {
    text1: "Ever",
    text2: "Evolving",
    desc: " We work with the philanthropists to help them build a perspective of sectors, so they can identify their sector of interest. We help them define their philanthropic purpose and provide personalized consulting services to develop effective giving strategies, identify high-impact opportunities, and align their philanthropic goals with their values.",
  },
];
const HelpingRivers = () => {
  return (
    <div className="tw-relative ~tw-pt-[7.5rem]/[12.5rem]">
      <Image
        src={CurveBg}
        alt=""
        className="tw-hidden lg:tw-flex tw-absolute  tw-items-center tw-bottom-[9rem]  tw-left-0"
      />
      <Image
        src={bottomCaseStudyCurveSvg}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute  tw-bottom-[-16rem]  tw-right-0"
      />
      <div className=" tw-flex tw-flex-col tw-items-center container tw-mx-auto tw-relative">
        <h2 className="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair tw-text-gray80">
          Helping Rivers
          <span className="tw-text-textPurple tw-font-playFairItalic">
            &nbsp;Give
          </span>
        </h2>
        <p className="tw-text-midGray ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] ~tw-w-[21.8rem]/[27.224rem] tw-text-center   ~tw-pt-[0.75rem]/[1.25rem] ~tw-pb-[1.25rem]/[5rem]">
          At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress.
        </p>
        <div className="tw-flex tw-flex-col ~tw-gap-[0.5rem]/0">
          {datas.map((items, i) => (
            <div
              key={i}
              className={cn(
                "tw-flex tw-flex-col md:tw-flex-row tw-items-center ~tw-gap-0/[1rem] ~tw-pl-[2.8rem]/[8rem] ~tw-pr-[2.8rem]/[14.3rem] max-[20rem]:!tw-px-[0.5rem]",
                {
                  "md:tw-flex-row-reverse  !~tw-pr-[2.8rem]/[8rem] !~tw-pl-[2.8rem]/[14.3rem] max-[20rem]:!tw-px-[0.5rem]":
                    i % 2 == 1,
                }
              )}
            >
              <OvalPurple
                textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
                textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
                sizeClass="~tw-size-[16.5rem]/[18.438rem]"
                text1={items.text1}
                text2={items.text2}
              />
              <p className="~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4 tw-text-center md:tw-text-left tw-text-midGray">
                {items.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpingRivers;
