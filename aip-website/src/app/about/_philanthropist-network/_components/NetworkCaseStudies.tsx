import CaseStudy from "@/components/cards/CaseStudy";
import Image from "next/image";
import React from "react";
import CurvePurple from "@public/svg/purpleCurveCaseStudy.svg";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import { TCaseStudies } from "@/api/type";
import CardSlideAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

type Props = {
  casestudies?: TCaseStudies[];
};
const NetworkCaseStudies = ({ casestudies }: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={CurveBg}
        alt=""
        className="hidden lg:flex absolute items-center top-[7rem] h-full left-0"
      />
      <Image
        src={CurvePurple}
        alt=""
        className="hidden lg:block absolute  bottom-[-2rem]  right-0"
      />
      <div className=" relative container mx-auto ~pt-[4.702rem]/[12.5rem]">
        <TextStaggerAnimation
          text="Case <color>Studies</color>"
          className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-darkBrown font-playFair"
        />
        <div className="~pt-[2.5rem]/[6.56rem]  flex flex-col ~gap-[3.5rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
          {casestudies?.map((item, i: number) => (
            <CardSlideAnimation delay={0.1} key={i}>
              <CaseStudy
                index={i}
                foundationName={item?.organisationName}
                foundationNameClassName="!~pt-[1rem]/[1.25rem] !~text-h6M/h5"
                initiativeName={item?.initiativeName}
                title={item?.title}
                desc={item?.description}
                image={item?.image}
                isLinkOrPdf={item?.isLinkOrPdf}
                file={item?.file}
                fileLink={item?.fileLink}
              />
            </CardSlideAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkCaseStudies;
