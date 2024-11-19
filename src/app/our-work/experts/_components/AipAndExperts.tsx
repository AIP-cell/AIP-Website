import OvalPurple from "@/components/ovals/OvalPurple";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import bottomCaseStudyCurveSvg from "@public/svg/peach-bg-curve-founders.svg";
import Image from "next/image";
import React from "react";

const AipAndExperts = () => {
  return (
    <div className="tw-relative">
      <Image
        src={CurveBg}
        alt=""
        className="tw-hidden lg:tw-flex tw-absolute  tw-items-center tw-bottom-[14rem]  tw-left-0"
      />
      <Image
        src={bottomCaseStudyCurveSvg}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute  tw-bottom-[-12rem]  tw-right-0"
      />
      <div className="tw-pt-[6.688rem] tw-pb-[5rem] container tw-mx-auto">
        <h1 className="tw-text-h2 tw-leading-[3.3rem] tw-font-playFair tw-text-center tw-w-full">
          AIP
          <span className="tw-font-playFairItalic tw-text-textPurple">
            &nbsp;&&nbsp;
          </span>
          Experts
        </h1>
        <div className="tw-px-[14.375rem] tw-flex tw-flex-col tw-w-full tw-items-center tw-gap-[1rem] tw-pt-[2.5rem] tw-text-center">
          <p className="tw-text-gray80 tw-leading-[1.4rem]">
            Experts play a vital role in AIP’s mission by contributing their
            wealth of experience across various touchpoints. Their engagement
            spans multiple activities that help our network members understand
            the complexities of social issues, develop strategic giving
            frameworks, and identify high-impact interventions. Here are some of
            the key ways experts contribute to AIP’s work.
          </p>

          <p className="tw-text-gray80 tw-leading-[1.4rem]">
            Experts engage with AIP across a variety of platforms and activities
            designed to maximise their impact.
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-pt-[2.5rem]">
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pl-[8rem] tw-pr-[14.3rem] ">
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Producing "
              text2="Sector"
            />
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4 tw-text-midGray">
              These essential knowledge products are co-created with experts.
              From scoping the research and validating hypotheses through key
              informant interviews to reviewing the final product, the experts’
              input ensures the depth and accuracy of our findings. Their
              insights help shape primers that provide philanthropists with a
              well-rounded understanding of the sector, the challenges it faces,
              and the opportunities for philanthropic intervention.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4 tw-text-midGray">
              Our thematic workshops are designed in collaboration with experts
              who help define the agenda and curate topics for discussion.
              Experts not only guide the content but also actively participate,
              sharing their well-founded views on the challenges, opportunities,
              and effective interventions in the ecosystem. Their evidence-based
              insights and best practices offer philanthropists a thorough
              understanding of the thematic landscape.
            </p>
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="!tw-size-[18.438rem]"
              text1="Thematic"
              text2="Workshops"
            />
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pl-[8rem] tw-pr-[14.3rem]">
            <OvalPurple
              textClass1="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              textClass2="!tw-leading-[2.113rem] !tw-text-h4a !tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Personalised"
              text2="Learning"
            />
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4 tw-text-midGray">
              When philanthropists seek to deepen their knowledge in a specific
              area, we curate personalized learning expeditions with the
              guidance of our experts. These immersive teaching and learning
              experiences, either through one-on-one engagements or in-the-field
              interventions, allow philanthropists to learn from the experts
              vertical and functional specialism. Experts provide nuanced
              insights that leave a lasting impact on the philanthropists’
              approach to tackling social challenges.
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-[1rem] tw-pr-[8rem] tw-pl-[14.3rem]">
            <p className="tw-leading-[1.4rem] tw-text-h9Copy4 tw-text-midGray">
              As part of our convening and networking events, experts contribute
              to dynamic panel discussions and fireside chats. These sessions
              are designed to inspire and inform, with experts offering their
              first-hand experience on critical topics. By engaging directly
              with philanthropists, they help spark new ideas and strategies for
              high-impact giving.
            </p>
            <OvalPurple
              textClass1="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              textClass2="!tw-leading-[2.6rem] !tw-text-h4a tw-font-playFair"
              sizeClass="tw-size-[18.438rem]"
              text1="Panel "
              text2="Discussions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AipAndExperts;
