import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";
const threeIs = [
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inform.svg",
    title: "Inform",
    desc: "Guide philanthropists to make informed decisions",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/influence.svg",
    title: "Influence",
    desc: "Influence change with strategic philanthropy",
  },
  {
    src: "/svg/aboutPage/aip-journey/three-I-s/inspire.svg",
    title: "Inspire",
    desc: "Inspire philanthropists to give more, give better, give sooner",
  },
];
const OurThreeIs = () => {
  return (
    <div className="container tw-mx-auto  tw-pt-[12.5rem] tw-pb-[7.5rem] tw-px-[7.8rem] tw-relative">
      <h3 className="tw-text-h2 tw-font-playFair tw-text-center">
        Our <i className="tw-text-textPurple">Three I-s</i>
      </h3>
      <div className="tw-pt-[5rem] tw-flex tw-gap-[4.56rem]">
        {threeIs.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            src={item.src}
            title={item.title}
            titleClassName="tw-italic !tw-text-gray80"
            descClassName="tw-px-[0.5rem]"
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default OurThreeIs;
