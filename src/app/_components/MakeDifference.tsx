import ImgTitleDescHor from "@/components/cards/ImgTitleDescHor";
import LeftHomePagePeachCurve from "@public/svg/leftHomePagePeach.svg";
import Image from "next/image";
import React from "react";
const dataS = [
  {
    src: "/svg/difference/vision.svg",
    title: "Vision",
    desc: "To see strategic philanthropy impact India’s transformation",
  },
  {
    src: "/svg/difference/mission.svg",
    title: "Mission",
    desc: "To build a vibrant network by and for philanthropists. To inspire, influence, and inform strategic giving",
  },
];
const MakeDifference = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={LeftHomePagePeachCurve}
        alt=""
        className="tw-left-0 tw-absolute lg:tw-bottom-0 tw-top-[4rem] lg:tw-top-auto ~tw-w-[6.956rem]/[13.125rem] ~tw-h-[19.875rem]/[37.5rem]"
      />
      <div className="container tw-mx-auto tw-relative ~tw-pt-[4.8rem]/[13rem] tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h3 className="~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2rem]/[3.3rem] tw-font-playFair">
          How we are trying to
        </h3>
        <p className="~tw-text-h4/h2 tw-text-textPurple ~tw-leading-[2rem]/[3.3rem] tw-font-playFairItalic">
          make a difference
        </p>
        <div className="tw-grid tw-grid-cols-2 tw-gap-[1.25rem] ~tw-px-[2.9rem]/[7.8rem] ~tw-pt-[2rem]/[5rem]">
          {dataS.map((items, i) => (
            <ImgTitleDescHor
              key={i}
              src={items.src}
              desc={items.desc}
              title={items.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeDifference;
