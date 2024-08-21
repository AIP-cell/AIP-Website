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
    <div className="container mx-auto overflow-hidden pt-[13rem] flex flex-col items-center justify-center">
      <h3 className="text-h2Heading2 text-gray80 leading-[52.8px] font-playFair">
        How we are trying to
      </h3>
      <i className="text-h2Heading2 text-textPurple leading-[52.8px] font-playFair">
        make a difference
      </i>
      <div className="grid grid-cols-2 gap-[1.25rem] px-[7.8rem] pt-[5rem]">
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
