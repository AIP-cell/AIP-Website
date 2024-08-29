import React from "react";
import Bg from "@public/svg/aboutPage/our-approach/fivePModelBg.svg";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import PurpleBgCurve from "@public/svg/PurpleBgCurveMasked.svg";

import Image from "next/image";
const threeP = [
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inform.svg",
    title: "Perspective",
    desc: "Host idea and experience sharing convening and focus group discussions with peers and mentors, to curate and develop insightful knowledge resources",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/influence.svg",
    title: "Purpose",
    desc: "Workshops to support philanthropist in discovering a mission and vision for their giving. ",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inspire.svg",
    title: "Process",
    desc: "Identify best practices and benchmarks that show a way forward for effective giving Help in setting up a giving vehicle",
  },
];
const twoP = [
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inform.svg",
    title: "Portfolio",
    desc: "Design evidence-based giving roadmap Search and match NPOs across the matrix of sectors and intervention",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/influence.svg",
    title: "Performance",
    desc: "Draw frameworks template and toolkits for impact assessments Facilitate partnerships with M&E service providers to measure portfolio efficacy",
  },
];
const FivePModel = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <Image
        src={PurpleBgCurve}
        alt=""
        className="tw-absolute -tw-top-[26rem]  tw-left-0"
      />
      <Image
        src={Bg}
        alt="bg-svg"
        className="tw-absolute tw-inset-0 tw-w-full tw-h-full"
      />
      <div className="tw-relative tw-pt-[21.25rem] tw-pb-[21.625rem] container tw-mx-auto">
        <h3 className="tw-text-h3 tw-text-center tw-text-gray80 tw-leading-[3.1rem] tw-font-playFair ">
          Our <i className="tw-text-textPurple">Five P Model</i>
        </h3>
        <div className="tw-pt-[5rem] tw-grid tw-grid-cols-3 tw-gap-[4.56rem] tw-px-[6.43rem]">
          {threeP.map((item, i) => (
            <ImgTitleDescVer
              key={i}
              src={item.src}
              title={item.title}
              titleClassName=" !tw-text-gray80"
              descClassName="tw-leading-[1.4rem]"
              desc={item.desc}
            />
          ))}
        </div>
        <div className="tw-pt-[3rem] tw-grid tw-grid-cols-2 tw-gap-[4.56rem] tw-px-[18.6rem]">
          {twoP.map((item, i) => (
            <ImgTitleDescVer
              key={i}
              src={item.src}
              title={item.title}
              titleClassName=" !tw-text-gray80"
              descClassName="tw-leading-[1.4rem]"
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FivePModel;
