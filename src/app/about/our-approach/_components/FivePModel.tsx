import React from "react";
import Bg from "@public/svg/about/our-approach/fivePModelBg.svg";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import PurpleBgCurve from "@public/svg/purple-Bg-Curve-Masked.svg";
import TopImage from "@public/images/fivePTopSection.png";
import BottomImage from "@public/images/fivePBottomSection.png";

import Image from "next/image";
const threeP = [
  {
    src: "/svg/about/our-approach/perspectiveModel.svg",
    title: "Perspective",
    desc: "Host idea and experience sharing convening and focus group discussions with peers and mentors, to curate and develop insightful knowledge resources",
  },
  {
    src: "/svg/about/our-approach/purposeModel.svg",
    title: "Purpose",
    desc: "Workshops to support philanthropist in discovering a mission and vision for their giving. ",
  },
  {
    src: "/svg/about/our-approach/processModel.svg",
    title: "Process",
    desc: "Identify best practices and benchmarks that show a way forward for effective giving Help in setting up a giving vehicle",
  },
];
const twoP = [
  {
    src: "/svg/about/our-approach/portfolioModel.svg",
    title: "Portfolio",
    desc: "Design evidence-based giving roadmap Search and match NPOs across the matrix of sectors and intervention",
  },
  {
    src: "/svg/about/our-approach/performanceModel.svg",
    title: "Performance",
    desc: "We equip philanthropists with frameworks and tools for impact assessments and facilitate partnerships with monitoring and evaluation (M&E) service providers, ensuring their giving is measurable and impactful.",
  },
];
const FivePModel = () => {
  return (
    <div className="tw-relative  tw-w-full">
      <Image
        src={PurpleBgCurve}
        alt=""
        className="tw-absolute -tw-top-[26rem]  ~tw-left-[-18rem]/0"
      />
      {/* <Image
        src={Bg}
        alt="bg-svg"
        className="tw-absolute tw-inset-x-0 tw-w-full md:tw-h-full tw-top-0"
      /> */}
      <Image src={TopImage} alt="" className="tw-w-full " />
      <div className="tw-w-full tw-bg-fivePBackground tw-h-[100rem] md:~tw-h-[60rem]/[32rem] tw-relative">
        <div className="tw-absolute ~tw-top-0/[-13rem] tw-w-full">
          <div className="tw-relative container tw-mx-auto">
            <div className="tw-relative  container tw-mx-auto">
              <h3 className="~tw-text-h4/h3 tw-text-center tw-text-black tw-leading-[3.1rem] tw-font-playFair ">
                Rivers Flow.{" "}
                <span className="tw-text-textPurple tw-font-playFairItalic">
                  We Guide.
                </span>
              </h3>
              <p className="tw-text-midGray tw-pt-[1.25rem] tw-text-center">
                Our 5P model helps channel the flow, while giving it direction
                and depth.
              </p>
              <div className="~tw-pt-[2.5rem]/[5rem] tw-grid tw-grid-cols-1 md:tw-grid-cols-3 ~tw-gap-5/[4.56rem] ~tw-px-[4.25rem]/[6.43rem] max-md:tw-bg-[#fcf5e3]">
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
              <div className="~tw-pt-5/[3rem] tw-grid tw-grid-cols-1 md:tw-grid-cols-2 ~tw-gap-5/[4.56rem] ~tw-px-[4.25rem]/[6.43rem] md:~tw-px-[4.25rem]/[18.6rem] max-md:tw-bg-[#fcf5e3] ~tw-pb-[5.313rem]/[21.625rem]">
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
        </div>
      </div>
      <Image src={BottomImage} alt="" className="tw-w-full " />
    </div>
  );
};

export default FivePModel;
