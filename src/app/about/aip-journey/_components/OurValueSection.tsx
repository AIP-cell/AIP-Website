import OvalPurple from "@/components/ovals/OvalPurple";
import React from "react";
import Bg from "@public/svg/wavePeachLeft.svg";
import Image from "next/image";
const ourValues = [
  {
    text1: "Respect",
    text2: "Agency",
  },
  {
    text1: "Respect",
    text2: "Agency",
  },
  {
    text1: "Respect",
    text2: "Agency",
  },
  {
    text1: "Respect",
    text2: "Agency",
  },
  {
    text1: "Respect",
    text2: "Agency",
  },
];
const OurValueSection = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-relative container tw-mx-auto ">
      <Image
          src={Bg}
          alt=""
          className=" tw-absolute -tw-top-[2.5rem] tw-inset-x-0 tw-object-cover"
        />
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
        <h3 className="tw-text-h2Heading2 tw-text-darkGray tw-font-playFair tw-leading-[52.8px]">
          Our <i className="tw-text-textPurple">Values</i>
        </h3>
        <p className="tw-pt-[1.25rem] tw-text-midGray tw-font-inter">
          The foundations that drive AIP to drive positive change
        </p>
      </div>
      <div className="tw-pt-[5rem] tw-pl-[7.5rem] ">
        <div className="tw-flex tw-gap-[5rem]  tw-overflow-x-auto no-scrollbar">
          {ourValues.map((items, i) => (
            <OvalPurple
              key={i}
              sizeClass="tw-size-[18.4rem]"
              mainClass=""
              text1={items.text1}
              text2={items.text2}
              textClass1="tw-text-h4Heading4 tw-font-playFair tw-text-purple10 leading-[41.6px]"
              textClass2=" tw-italic tw-font-playFair tw-text-h4Heading4 leading-[41.6px]"
            />
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default OurValueSection;
