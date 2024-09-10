import BreadCrump from "@/components/bread-crump/BreadCrump";
import Image from "next/image";
import PurpleWave from "@public/svg/about/aip-founder-network/heroSectionPurpleBg.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import React from "react";

const FounderNetworkHeroSection = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <Image
        src={PurpleWave}
        alt=""
        className="tw-absolute tw-top-0 tw-right-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="tw-absolute tw-top-[20.313rem] tw-z-10 tw-right-[1.18rem]"
      />
      <BreadCrump
        textOne="About Us"
        linkOne="/about"
        textTwo="AIP Founder Network"
        linkTwo="/about/aip-founder-network"
      />
      <div className="~tw-pl-5/[7.81rem] ~tw-pr-5/[14.375rem]">
        <h4 className="tw-leading-[1.3rem] tw-font-semibold tw-uppercase tw-text-purple40 tw-pt-[6.5rem]">
          A Grant-maker not a fundraiser
        </h4>
        <div className="tw-pt-[0.75rem] ">
          <div className=" tw-text-h4 tw-text-gray80 tw-leading-[2.6rem] tw-font-playFair">
            <p>AIP is by and for philanthropists - </p>
            to{" "}
            <span className="tw-text-textPurple tw-font-playFairItalic">
              inspire, influence
            </span>{" "}
            and
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;inform
            </span>{" "}
            strategic giving.
            <p> AIP’s Core Founders are Ashish and Manisha Dhawan</p>
            <p>(The Convergence Foundation), Rohini Nilekani </p>
            <p>(RohiniNilekani Philanthropies), Amit and Archana Chandra</p>
            (ATE Chandra Foundation) and Vishal Tulsyan.
          </div>
          <div className=" tw-text-h4 tw-text-gray80 tw-leading-[2.6rem] tw-font-playFair tw-pt-[3rem]">
            They are joined by
            <span className="tw-text-textPurple tw-font-playFairItalic">
              ~30 Founders
            </span>{" "}
            who have committed to support AIP, help expand this movement, and
            inspire others. The AIP umbrella has so far touched over 125
            philanthropists, who are at different stages in their philanthropic
            journey, yet are bound by a shared vision for meaningful
            philanthropy that aids India’s transformation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNetworkHeroSection;
