import Image from "next/image";
import HeroBg from "@public/svg/heroBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-container tw-mx-auto  tw-relative">
      <Image
        src={HeroBg}
        alt=""
        className="tw-absolute  tw-w-full tw-h-[50rem]"
      />
      <div className="container tw-mx-auto tw-relative tw-h-screen ">
        <div className="tw-absolute tw-top-[3.125rem] tw-left-[1.25rem]">
          <Image src={OvalPeach} alt="" className="tw-size-[11.875rem]" />
        </div>
        <div className="tw-flex tw-items-center  tw-justify-center tw-pt-[5.56rem] tw-relative">
          <div className="">
            <h2 className="tw-text-h1 tw-font-playFair tw-leading-[3.7rem] tw-w-[38.125rem] ">
              AIP is a peer network that
              <span className=" tw-font-playFairItalic tw-text-textPurple">
                &nbsp;channels the flow
              </span>
              to accelerate strategic giving in India - a movement
              <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;by and for philanthropists
              </span>
            </h2>
          </div>
          <div className="tw-relative tw-w-[29.6rem] tw-h-[27.8rem] ">
            <Image src="/svg/vecto30.svg" alt="" fill className="tw-z-20" />
            <div className="tw-absolute tw-inset-0 tw-z-10">
              <div className="tw-relative tw-w-[27.846rem] tw-h-[29.17rem]">
                <Image
                  src="/svg/ellipsePeach.svg"
                  alt=""
                  fill
                  className="tw-z-[-2] tw-rotate-[-109.42deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
