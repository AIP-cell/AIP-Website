import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";

const datas = [
  {
    src: "/svg/careers/career3.svg",
    title1: "Engage Your",
    title2: "Expertise",
    desc: "Partner with a dynamic community of philanthropists passionate about creating meaningful impact. Your expertise can guide philanthropic journeys aligning purpose with sustainable, scalable solutions.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inspire.svg",
    title1: "Connect With",
    title2: "Community",
    desc: "Expand your network and impact through personalized learning platforms like workshops, panels, sector primers, research products, etc. deepening cross-sectoral and multi-functional connections.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inform.svg",
    title1: "Enable",
    title2: "Transformation",
    desc: "Shape the way philanthropists think about their giving, and influence high-impact strategies that address systemic social issues.",
  },
  {
    src: "/svg/about/our-approach/purposeModel.svg",
    title1: "Share Best",
    title2: "Practices",
    desc: "Collaborating with other experts/leaders from diverse fields enhances learning and expertise.",
  },
];
const WhyPartner = () => {
  return (
    <div className="tw-px-[18.656rem] tw-pt-[12.5rem] container tw-mx-auto">
      <h2 className="tw-text-h2 tw-leading-[3.3rem] tw-text-gray80 tw-font-playFair tw-text-center">
        <span className="tw-text-textPurple tw-font-playFairItalic">Why</span>{" "}
        Partner
      </h2>
      <p className="tw-text-gray80 tw-leading-[1.4rem] tw-pt-[1.5rem] tw-text-center">
        As an expert engaged with AIP, you will experience a range of
        opportunities that extend beyond the immediate ones for knowledge
        sharing.
      </p>
      <div className="tw-pt-[4rem] tw-flex tw-flex-wrap tw-gap-x-[4.563rem] tw-gap-y-[3rem]  ">
        {datas.map((items, i) => (
          <ImgTitleDescVer
            titleClassName="!tw-text-h4 !tw-leading-[2.6rem]"
            totalWidth="!tw-w-[19rem]"
            imageWidth="!tw-w-[11.875rem]"
            key={i}
            title={items.title1}
            title2={items.title2}
            desc={items.desc}
            src={items.src}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
