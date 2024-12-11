import CaseStudy from "@/components/cards/CaseStudy";
import Image from "next/image";
import React from "react";
import CurvePurple from "@public/svg/purpleCurveCaseStudy.svg";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";

const caseStudyData = [
  {
    title: "Grant Making",
    foundationName: "Foundation Name",
    // initiativeName:"Initiative Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
  {
    title: "Grant Making",
    foundationName: "Foundation Name",
    // initiativeName:"Initiative Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
  {
    title: "Grant Making",
    foundationName: "Foundation Name",
    // initiativeName:"Initiative Name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec lacus vitae urna tincidunt aliquet. Nullam scelerisque urna ut lacus accumsan, ac porttitor nisi tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet, velit id euismod vehicula, nulla elit malesuada libero, in posuere est justo id lorem. Aliquam erat volutpat. Sed pharetra augue ut felis fermentum, nec aliquam risus tincidunt. Donec bibendum sapien eget mauris lacinia, ut pellentesque justo luctus. Duis vehicula odio in risus sagittis, sit amet viverra mauris facilisis.",
    image: "/images/case-studies/caseStudy1.png",
  },
];
const NetworkCaseStudies = () => {
  return (
    <div className="relative w-full">
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
        <h2 className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-darkBrown font-playFair">
          Case
          <span className="text-textPurple font-playFairItalic">
            &nbsp;Studies
          </span>
        </h2>
        <div className="~pt-[2.5rem]/[6.56rem]  flex flex-col ~gap-[3.5rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
          {caseStudyData.map((item: any, i: number) => (
            <CaseStudy
              key={i}
              index={i}
              foundationName={item.foundationName}
              foundationNameClassName="!~pt-[1rem]/[1.25rem] !~text-h6M/h5"
              initiativeName={item.initiativeName}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkCaseStudies;
