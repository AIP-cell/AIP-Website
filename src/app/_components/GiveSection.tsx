import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import Image from "next/image";
import Bg from "../../../public/svg/give-section/giveBg.svg";
import React from "react";
const giveData = [
  {
    src: "/svg/give-section/giveMore.svg",
    title: "Give",
    span: "More",
    desc: "Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    src: "/svg/give-section/giveSooner.svg",
    title: "Give",
    span: "Sooner",
    desc: "Individuals tend to engage in philanthropy later in life (between 60-75 years of age), though they often have resources to give sooner.",
  },
  {
    src: "/svg/give-section/giveBetter.svg",
    title: "Give",
    span: "Better",
    desc: "A robust ecosystem of knowledge, learnings, and peer networks is required to support individuals to give better.",
  },
];
const GiveSection = () => {
  return (
    <div className="container tw-mx-auto  ~tw-pt-[5rem]/[3.5rem] ~tw-px-[2.8rem]/[7.8rem] tw-relative">
      <Image src={Bg} alt="give-section-Bg" className="tw-absolute tw--top-[10.5rem] tw-right-0 " />
      <div className=" tw-flex tw-flex-col md:tw-flex-row ~tw-gap-[1.25rem]/[4.56rem]">
        {giveData.map((item, i) => (
          <ImgTitleDescVer
            key={i}
            src={item.src}
            title={item.title}
            span={item.span}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default GiveSection;
