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
    <div className="~px-[2.84rem]/[18.656rem] ~pt-[7.5rem]/[12.5rem] container mx-auto">
      <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-gray80 font-playFair text-center">
        <span className="text-textPurple font-playFairItalic">Why</span>{" "}
        Partner
      </h2>
      <p className="text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[0.75rem]/[1.5rem] text-center">
        As an expert engaged with AIP, you will experience a range of
        opportunities that extend beyond the immediate ones for knowledge
        sharing.
      </p>
      <div className="pt-[4rem] flex flex-wrap justify-center gap-x-[4.563rem] gap-y-[3rem]  ">
        {datas.map((items, i) => (
          <ImgTitleDescVer
            titleClassName="!text-h4 !leading-[2.6rem]"
            totalWidth="!w-[19rem]"
            imageWidth="!w-[11.875rem]"
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
