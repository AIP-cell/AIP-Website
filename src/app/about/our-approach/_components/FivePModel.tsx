import React from "react";
import Bg from "@public/svg/about/our-approach/fivePModelBg.svg";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import TopImage from "@public/images/fivePTopSection.png";
import BottomImage from "@public/images/fivePBottomSection.png";

import Image from "next/image";
const threeP = [
  {
    src: "/svg/about/our-approach/perspectiveModel.svg",
    title: "Perspective",
    desc: "By fostering peer and expert convenings, roundtable discussions, and sharing sectoral insights, we broaden the horizons of philanthropists, offering a wealth of knowledge, research, and case studies that inspire impactful giving. ",
  },
  {
    src: "/svg/about/our-approach/purposeModel.svg",
    title: "Purpose",
    desc: "We help philanthropists clarify the mission and vision of their giving through workshops and immersive learning expeditions, allowing them to deeply understand the issues they care about. ",
  },
  {
    src: "/svg/about/our-approach/processModel.svg",
    title: "Process",
    desc: "We provide guidance on best practices and benchmarks, helping set up giving vehicles and ensuring that philanthropists have a solid, efficient approach to their philanthropy. ",
  },
  {
    src: "/svg/about/our-approach/portfolioModel.svg",
    title: "Portfolio",
    desc: "Our team designs evidence-based giving roadmaps and helps identify and match the right NPOs across sectors, ensuring strategic alignment with the philanthropist’s goals.",
  },
  {
    src: "/svg/about/our-approach/performanceModel.svg",
    title: "Performance",
    desc: "We equip philanthropists with frameworks and tools for impact assessments and facilitate partnerships with monitoring and evaluation (M&E) service providers, ensuring their giving is measurable and impactful.",
  },
];
const twoP = [
  {
    src: "/svg/about/our-approach/portfolioModel.svg",
    title: "Portfolio",
    desc: "Our team designs evidence-based giving roadmaps and helps identify and match the right NPOs across sectors, ensuring strategic alignment with the philanthropist’s goals.",
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
      <Image src={TopImage} alt="" className="tw-w-full " />
      <div className="tw-w-full tw-bg-fivePBackground ~tw-h-[110rem]/[36.5rem] tw-relative">
        <div className="tw-absolute ~tw-top-0/[-13rem] tw-w-full">
          <div className="tw-relative container tw-mx-auto">
            <div className="tw-relative tw-flex tw-flex-col tw-items-center container tw-mx-auto">
              <h3 className="~tw-text-h4/h3 tw-text-center tw-text-gray80 ~tw-leading-[2.6rem]/[3.1rem] tw-font-playFair ">
                <span className="tw-text-textPurple tw-font-playFairItalic">
                  Partnering
                </span>
                &nbsp;The Flow
              </h3>
              <p className="tw-text-midGray ~tw-pt-[0.75rem]/[1.25rem] ~tw-px-[2.8rem]/[21rem] ~tw-text-h9Copy5/h9Copy4 tw-text-center ~tw-leading-[1.225rem]/[1.4rem]">
                At AIP, we help philanthropists move from Inspiration to Impact
                through our proprietary 5P Framework. This structured approach
                guides strategic giving, ensuring that every act of philanthropy
                is thoughtful, effective, and transformative.
              </p>
              <div className="~tw-pt-[5.68rem]/[5rem] tw-flex tw-flex-wrap tw-justify-center ~tw-gap-x-5/[3.8rem] ~tw-gap-y-5/[3rem] max-[20rem]:tw-px-[0.5rem] ~tw-px-[2.7rem]/[6.43rem] max-md:tw-bg-[#fcf5e3]">
                {threeP.map((item, i) => (
                  <ImgTitleDescVer
                    totalWidth="!tw-w-[18.7rem] md:!~tw-w-[15rem]/[19.8rem]"
                    imageWidth="!tw-w-[11.875rem]"
                    key={i}
                    src={item.src}
                    title={item.title}
                    titleClassName=" !tw-text-gray80"
                    descClassName="tw-leading-[1.4rem]"
                    desc={item.desc}
                  />
                ))}
              </div>
              {/* <div className="~tw-pt-[1.25rem]/[3rem] tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 ~tw-gap-5/[4.56rem] ~tw-px-[2.813rem]/[6.43rem] md:~tw-px-[4.25rem]/[18.6rem] max-md:tw-bg-[#fcf5e3] ~tw-pb-[5rem]/[21.625rem]">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Image src={BottomImage} alt="" className="tw-w-full " />
    </div>
  );
};

export default FivePModel;
