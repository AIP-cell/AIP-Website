import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";
const threeIs = [
  {
    src: "/svg/about/aip-journey/three-I-s/inform.svg",
    title: "Inform",
    desc: "Guide philanthropists to make informed decisions",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/influence.svg",
    title: "Influence",
    desc: "Influence change with strategic philanthropy",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inspire.svg",
    title: "Inspire",
    desc: "Inspire philanthropists to give more, give better, give sooner",
  },
];
const Pillars = () => {
  return (
    <div className="container tw-mx-auto  ~tw-pt-[5rem]/[12.5rem] ~tw-pb-[5rem]/[7.5rem] ~tw-px-[2.938rem]/[7.8rem] tw-relative">
      <h3 className="~tw-text-h4/h2 tw-font-playFair tw-text-center tw-text-gray80">
        The
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;Pillars
        </span>
      </h3>
      <p className="tw-text-midGray tw-text-center tw-pt-[1.25rem]">
        Our commitment towards philanthropy that define our role in the journey
      </p>
      <div className="~tw-pt-10/[5rem] md:tw-flex  ~tw-gap-[1.25rem]/[4.56rem]">
        {threeIs.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            src={item.src}
            title={item.title}
            titleClassName="tw-font-playFairItalic !tw-text-gray80"
            descClassName="~tw-px-[1.15rem]/[0.5rem]"
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Pillars;
