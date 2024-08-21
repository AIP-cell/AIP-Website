import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import Image from "next/image";
import Bg from "../../../public/svg/giveSection/giveBg.svg";
import React from "react";
const giveData = [
  {
    src: "/svg/giveSection/giveMore.svg",
    title: "Give",
    span: "More",
    desc: "Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    src: "/svg/giveSection/giveSooner.svg",
    title: "Give",
    span: "Sooner",
    desc: "Individuals tend to engage in philanthropy later in life (between 60-75 years of age), though they often have resources to give sooner.",
  },
  {
    src: "/svg/giveSection/giveBetter.svg",
    title: "Give",
    span: "Better",
    desc: "A robust ecosystem of knowledge, learnings, and peer networks is required to support individuals to give better.",
  },
];
const GiveSection = () => {
  return (
    <div className="container mx-auto  pt-[3.5rem] px-[7.8rem] relative">
      <Image src={Bg} alt="give-section-Bg" className="absolute -top-[10.5rem] right-0 " />
      <div className=" flex gap-[4.56rem]">
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
