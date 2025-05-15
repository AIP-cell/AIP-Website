import CardAnimation from "@/components/animations/CardAnimation";
import TextAnimation from "@/components/animations/TextAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
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
    <div className="w-full relative">
      <Image
        src={LeftHomePagePeachCurve}
        alt=""
        className="left-0 absolute lg:bottom-0 top-[4rem] lg:top-auto ~w-[6.956rem]/[13.125rem] ~h-[19.875rem]/[37.5rem]"
      />
      <div className="container mx-auto relative ~pt-[4.8rem]/[13rem] flex flex-col items-center justify-center">
        {/* <h3 className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair">
          How we are trying to
        </h3> */}
        <TextAnimation>
          <p className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair">
            How we are trying to
          </p>
        </TextAnimation>
        {/* <WordStaggerAnimation
          text="How we are trying to"
          duration={1.1}
          staggerChildren={0.25}
          className="~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair"
        /> */}
        <TextAnimation>
         
          <p className="~text-h4/h2 text-textPurple ~leading-[2.6rem]/[3.3rem] font-playFairItalic">
            make a difference
          </p>
        </TextAnimation>
        {/* <WordStaggerAnimation
          text="make a difference"
          className="~text-h4/h2 text-textPurple ~leading-[2.6rem]/[3.3rem] font-playFairItalic"
        /> */}
        {/* <p className="~text-h4/h2 text-textPurple ~leading-[2.6rem]/[3.3rem] font-playFairItalic">
          make a difference
        </p> */}
        <div className="grid lg:grid-cols-2 gap-[1.25rem] ~px-[2.9rem]/[7.8rem] ~pt-[2rem]/[5rem]">
          {dataS.map((items, i) => (
            <CardAnimation delay={0.2} index={i} key={i}>
              <ImgTitleDescHor
                src={items.src}
                desc={items.desc}
                title={items.title}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeDifference;
