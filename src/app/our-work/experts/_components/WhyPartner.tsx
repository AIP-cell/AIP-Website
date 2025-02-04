import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import MailSvg from "@/components/svg/MailSvg";
import Link from "next/link";
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
    <div className="~px-[2.84rem]/[18.656rem] ~pt-[7.5rem]/[12.5rem] ~pb-[7.5rem]/[8rem] container mx-auto flex flex-col items-center w-full">
      {/* <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-gray80 font-playFair text-center">
        <span className="text-textPurple font-playFairItalic">Why</span> Partner
      </h2> */}
      <TextStaggerAnimation
        text="<color>Why</color> Partner"
        className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-gray80 font-playFair text-center"
      />
      <p className="text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[0.75rem]/[1.5rem] text-center">
        As an expert engaged with AIP, you will experience a range of
        opportunities that extend beyond the immediate ones for knowledge
        sharing.
      </p>
      <div className="pt-[4rem] flex flex-wrap justify-center gap-x-[4.563rem] gap-y-[3rem]  ">
        {datas.map((items, i) => (
          <CardAnimation index={i} delay={0.2} key={i}>
            <ImgTitleDescVer
              titleClassName="!text-h4 !leading-[2.6rem]"
              totalWidth="!w-[19rem]"
              imageWidth="!w-[11.875rem]"
              title={items.title1}
              title2={items.title2}
              desc={items.desc}
              src={items.src}
            />
          </CardAnimation>
        ))}
      </div>
      <ButtonAnimation className=" ~mt-[2rem]/[3rem] text-darkPurple border-2 border-darkPurple hover:text-white bg-white hover:bg-darkPurple rounded-full  py-[0.75rem] px-[1.75rem]">
        <Link
          href="/contact"
          className=" flex items-center text-h9Copy5 gap-[0.5rem]"
        >
          <p className="">Contact Us</p>
          <MailSvg />
        </Link>
      </ButtonAnimation>
    </div>
  );
};

export default WhyPartner;
