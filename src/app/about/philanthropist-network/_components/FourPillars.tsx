import React from "react";
import Image from "next/image";
import OvalPurple from "@/components/ovals/OvalPurple";
import Bg from "@public/svg/wavePeachLeft.svg";

import ValueSlick from "@/components/slick/ValueSlick";

const serviceData = [
  {
    text1: "Convening &",
    text2: "Networking",
  },
  {
    text1: "Knowledge",
    text2: "Work",
  },
  {
    text1: "Bespoke",
    text2: "Partnering",
  },
  {
    text1: "Respect",
    text2: "Agency",
  },
];
const serviceSlickData = [
  "0The whole idea is to get philanthropists together, to share their stories, share their learnings and share their experience. This helps to inspire people and build a sense of community amongst the philanthropists.",
  "1The whole idea is to get philanthropists together, to share their stories, share their learnings and share their experience. This helps to inspire people and build a sense of community amongst the philanthropists.",
  "2The whole idea is to get philanthropists together, to share their stories, share their learnings and share their experience. This helps to inspire people and build a sense of community amongst the philanthropists.",
  "3The whole idea is to get philanthropists together, to share their stories, share their learnings and share their experience. This helps to inspire people and build a sense of community amongst the philanthropists.",
];
const FourPillars = () => {
  return (
    <div className="relative bg-container mx-auto">
      <Image
        src={Bg}
        alt=""
        className=" absolute -top-[11.5rem]  z-[-1] h-[70rem]  w-[400rem]"
      />
      <div className="pt-[12.5rem] ~px-5/[7.8rem] container mx-auto">
        <h2 className="font-playFair text-center text-gray80 text-h2 leading-[3.3rem]">
          <span className="text-textPurple font-playFairItalic">
            Four
          </span>
          &nbsp;Pillars
        </h2>
        <div className="pt-[5rem] flex no-scrollbar gap-[4.5rem] overflow-x-auto">
          {serviceData.map((items, i) => (
            <OvalPurple
              key={i}
              sizeClass="size-[18.4rem]"
              mainClass=""
              text1={items.text1}
              text2={items.text2}
              textClass1="text-h4 font-playFair text-white leading-[2.113rem]"
              textClass2=" italic font-playFair text-white text-h4a leading-[2.113rem]"
            />
          ))}
        </div>
        <ValueSlick slickArray={serviceSlickData} />
      </div>
    </div>
  );
};

export default FourPillars;
