import ImgTitleDescHor from "@/components/cards/ImgTitleDescHor";
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
    <div className="container tw-mx-auto tw-overflow-hidden tw-pt-[13rem] tw-flex tw-flex-col tw-items-center tw-justify-center">
      <h3 className="tw-text-h2Heading2 tw-text-gray80 tw-leading-[52.8px] tw-font-playFair">
        How we are trying to
      </h3>
      <i className="tw-text-h2Heading2 tw-text-textPurple tw-leading-[52.8px] tw-font-playFair">
        make a difference
      </i>
      <div className="tw-grid tw-grid-cols-2 tw-gap-[1.25rem] tw-px-[7.8rem] tw-pt-[5rem]">
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
  );
};

export default MakeDifference;
