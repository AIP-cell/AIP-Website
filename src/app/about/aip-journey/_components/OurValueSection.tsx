import OvalPurple from "@/components/ovals/OvalPurple";
import React from "react";
import Bg from "@public/svg/wavePeachLeft.svg";
import SmBg from "@public/svg/about/aip-journey/smValueBg.svg";
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
    <div className="tw-w-full tw-relative ">
      <Image
        src={Bg}
        alt="bg"
        className=" tw-hidden lg:tw-block tw-absolute -tw-top-[7rem] tw-h-[60rem]  tw-w-[400rem] "
      />
      <Image
        src={SmBg}
        alt="sm-bg"
        className=" tw-block lg:tw-hidden tw-absolute tw-top-[9rem] tw-w-full "
      />
      <div className="~tw-pt-[4.625rem]/[10rem]  tw-relative container tw-mx-auto ">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center ">
          <h3 className="~tw-text-h4/h2 tw-text-darkGray tw-font-playFair tw-leading-[52.8px]">
            Our <i className="tw-text-textPurple">Values</i>
          </h3>
          <p className="~tw-pt-[0.5rem]/[1.25rem] ~tw-px-[4.1rem]/[20.938rem] tw-text-center tw-text-midGray  tw-font-inter ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.4rem]/[1.225rem]">
          At AIP, our core values define who we are and guide every action we take. 
          They are the foundation of our culture, shaping the way we work and the impact we seek to create.
          </p>
        </div>
        <div className="~tw-pt-[2.5rem]/[5rem] ~tw-px-0/[7.5rem] ">
          <div className="tw-flex tw-gap-[5rem]  tw-overflow-x-auto no-scrollbar">
            {ourValues.map((items, i) => (
              <OvalPurple
                key={i}
                sizeClass="~tw-size-[14.25rem]/[18.4rem]"
                mainClass=""
                text1={items.text1}
                text2={items.text2}
                textClass1="~tw-text-h5/h4 tw-font-playFair tw-text-purple10 ~tw-leading-[1.75rem]/[2.6rem]"
                textClass2=" tw-font-playFairItalic ~tw-text-h5/h4 ~tw-leading-[1.75rem]/[2.6rem]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValueSection;
