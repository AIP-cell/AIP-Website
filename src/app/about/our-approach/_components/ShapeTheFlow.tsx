import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import React from "react";
const threeIs = [
  {
    src: "/svg/about/aip-journey/three-I-s/inform.svg",
    title: "Inform",
    desc: "Creating and curating research, knowledge and sector specific information for the philanthropic ecosystem.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/influence.svg",
    title: "Influence",
    desc: "Helping build purpose and perspective to guide philanthropic action.",
  },
  {
    src: "/svg/about/aip-journey/three-I-s/inspire.svg",
    title: "Inspire",
    desc: "Highlighting inspirational stories and fostering meaningful connects amongst ecosystem players.",
  },
];
const ShapeTheFlow = () => {
  return (
    <div className="container mx-auto  ~pt-[5rem]/[12.5rem] ~pb-[5rem]/[7.5rem] ~px-[2.938rem]/[7.8rem] relative">
      <WordStaggerAnimation
        text="Helping <color>Shape </color>  The Flow"
        className="~text-h4/h2 font-playFair text-center text-gray80"
      />
        <WordStaggerAnimation
        text=" Our commitment towards philanthropy that define our role in the journey"
        className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center text-midGray"
      />
      <div className="~pt-10/[5rem] flex flex-col lg:flex-row  ~gap-[1.25rem]/[4.56rem]">
        {threeIs.map((item, i) => (
          <CardAnimation delay={0.2} index={i} key={i}>
            <ImgTitleDescVer
              key={i}
              src={item.src}
              title={item.title}
              titleClassName="font-playFairItalic !text-gray80"
              descClassName="~px-[1.15rem]/[0.5rem]"
              desc={item.desc}
            />
          </CardAnimation>
        ))}
      </div>
    </div>
  );
};

export default ShapeTheFlow;
