import Image from "next/image";
import HeroBg from "@public/svg/heroBg.svg";
import SmHeroBg from "@public/svg/home/smHeroPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-container tw-mx-auto  tw-relative lg:tw-h-screen">
      <Image
        src={HeroBg}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute tw-top-[-2rem] tw-w-[120rem] tw-h-full  tw-object-fill"
      />
      <div className="container tw-mx-auto tw-relative tw-h-screen ">
        <div className="tw-hidden lg:tw-block tw-absolute tw-top-[3.125rem] tw-left-[1.25rem]">
          <Image src={OvalPeach} alt="" className="tw-size-[11.875rem]" />
        </div>
        <div className="tw-flex tw-flex-col lg:tw-flex-row ~tw-gap-[3.25rem]/0 tw-items-center  ~tw-pt-[2.5rem]/[5.56rem] ~tw-pl-[1rem]/[7.8rem] ~tw-pr-[1rem]/[5rem] tw-relative">
          <div className="tw-relative tw-shrink-0 tw-w-auto lg:tw-w-[38.125rem] tw-z-[1000] ~tw-text-h4/h1 tw-font-playFair ~tw-leading-[2.6rem]/[3.7rem]  ">
            AIP is a peer network that
            <span className=" tw-font-playFairItalic tw-text-textPurple">
              &nbsp;channels the flow&nbsp;
            </span>
            to accelerate strategic giving in India - a movement
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;by and for philanthropists
            </span>
          </div>
          <Image
            src={SmHeroBg}
            alt="sm-hero-bg"
            className="tw-block lg:tw-hidden tw-absolute tw-bottom-0  tw-w-full tw-object-cover"
          />
          <div className="">
            <div className="tw-relative ~tw-w-[19rem]/[29.6rem] ~tw-h-[18rem]/[27.8rem] tw-shrink-0">
              <div className="tw-absolute tw-inset-0 tw-z-10">
                <div className="tw-relative ~tw-w-[19.2rem]/[27.846rem] ~tw-h-[16rem]/[29.17rem]">
                  <Image
                    src="/svg/ellipsePeach.svg"
                    alt=""
                    fill
                    className="tw-z-[-2] tw-rotate-[-109.42deg]"
                  />
                </div>
              </div>
              <Image src="/svg/heroImage.svg" alt="" fill className="tw-z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
