import React from "react";
import OvalPurple from "@/components/ovals/OvalPurple";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";

import Image from "next/image";

const HelpingRivers = () => {
  return (
    <div className="tw-relative tw-pt-[12.5rem]">
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
        <h2 className="tw-text-h2 tw-leading-[3.3rem] tw-font-playFair tw-text-gray80">
          Helping Rivers
          <span className="tw-text-textPurple tw-font-playFairItalic">
            &nbsp;Give
          </span>
        </h2>
        <p className="tw-text-midGray  tw-leading-[1.4rem] tw-w-[27.224rem] tw-text-center tw-text-h9Copy4 tw-pt-[1.25rem] tw-pb-[5rem]">
          At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress.
        </p>
        <div className="tw-flex tw-flex-col ">
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pl-[8rem] tw-pr-[14.3rem] ">
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Convening &"
              text2="Networking"
            />
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              AIP gets philanthropists together, to share their stories,
              learnings and experience. This helps inspire and build a sense of
              community amongst the philanthropists.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              We create documents with the aim to provide philanthropists with
              comprehensive perspectives on sectors, topics, and themes,
              informing and inspiring them at various stages of their
              philanthropic journey. Conducting and sharing research on social
              issues, philanthropic trends, and successful interventions to
              inform and guide the giving efforts of philanthropists.
            </p>
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="!tw-size-[18.438rem]"
              text1="Knowledge"
              text2="Work"
            />
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pl-[8rem] tw-pr-[14.3rem]">
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Bespoke"
              text2="Partnering"
            />
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              We work with the philanthropists to help them build a perspective
              of sectors, so they can identify their sector of interest. We help
              them define their philanthropic purpose and provide personalized
              consulting services to develop effective giving strategies,
              identify high-impact opportunities, and align their philanthropic
              goals with their values.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              Creating a space and enabling a space of regulatory environment
              for philanthropy to be incentivised. We believe that by advocating
              for policy changes and legislative reforms, we can foster a more
              supportive landscape for philanthropy.
            </p>
            <OvalPurple
              textClass1="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              textClass2="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Ever"
              text2="Evolving"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingRivers;
