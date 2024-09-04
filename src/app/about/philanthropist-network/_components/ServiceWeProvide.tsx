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
const ServiceWeProvide = () => {
  return (
    <div className="tw-relative bg-container tw-mx-auto">
      <Image
        src={Bg}
        alt=""
        className=" tw-absolute -tw-top-[11.5rem] tw-w-full"
      />
      <div className="tw-pt-[12.5rem] tw-px-[7.8rem] container tw-mx-auto">
        <h2 className="tw-font-playFair tw-text-center tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
          <span className="tw-text-textPurple tw-font-playFairItalic">
            Services
          </span>
          &nbsp;We Provide
        </h2>
        <div className="tw-pt-[5rem] tw-flex no-scrollbar tw-gap-[4.5rem] tw-overflow-x-auto">
          {serviceData.map((items, i) => (
            <OvalPurple
              key={i}
              sizeClass="tw-size-[18.4rem]"
              mainClass=""
              text1={items.text1}
              text2={items.text2}
              textClass1="tw-text-h4 tw-font-playFair tw-text-white leading-[2.113rem]"
              textClass2=" tw-italic tw-font-playFair tw-text-white tw-text-h4a leading-[2.113rem]"
            />
          ))}
        </div>
        <ValueSlick slickArray={serviceSlickData} />
      </div>
    </div>
  );
};

export default ServiceWeProvide;
