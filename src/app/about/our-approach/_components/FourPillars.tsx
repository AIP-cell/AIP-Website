import OvalPurple from "@/components/ovals/OvalPurple";
import React from "react";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";

import Image from "next/image";
const FourPillars = () => {
  return (
    <div className="tw-relative">
      <Image
        src={CurveBg}
        alt=""
        className="tw-hidden lg:tw-flex tw-absolute  tw-items-center tw-bottom-[1rem]  tw-left-0"
      />
      <Image
        src={bottomCaseStudyCurveSvg}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute  tw-top-[27rem]  tw-right-0"
      />
      <div className=" tw-flex tw-flex-col tw-items-center container tw-mx-auto tw-relative">
        <h2 className="tw-text-h2 tw-leading-[3.3rem] tw-font-playFair tw-text-gray80">
          Our
          <span className="tw-text-textPurple tw-font-playFairItalic">
            &nbsp;Four Pillars
          </span>
        </h2>
        <p className="tw-text-midGray  tw-leading-[1.4rem] tw-w-[38.14rem] tw-text-h9Copy4 tw-text-center  tw-pt-[1.25rem] tw-pb-[5rem]">
          At AIP, we believe in the transformative power of philanthropy to
          catalyse India’s progress. Our Theory of Change is rooted in the
          conviction that philanthropists are not only eager to make a
          difference but are also uniquely positioned to inspire one another. We
          aim to create a vibrant movement of strategic giving that drives
          sustainable impact across the country.
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
              By facilitating spaces for philanthropists to exchange
              motivations, ideas, and experiences, we create a community that
              inspires and influences strategic philanthropy.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              With our well-founded knowledge resources, we enable
              philanthropists to engage in shared learning, providing insights
              across sectors and highlighting effective giving practices.
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
              We collaborate with individual philanthropists and UHNIs to craft
              personalized giving plans and learning journeys tailored to their
              unique motivations.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4">
              We champion a thriving philanthropic ecosystem, influencing the
              broader landscape to unlock catalytic funding and deepen the
              impact of philanthropy.
            </p>
            <OvalPurple
              textClass1="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              textClass2="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Thought"
              text2="Leadership"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPillars;
