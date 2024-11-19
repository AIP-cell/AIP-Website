import React from "react";
import GivingJourney from "./_components/GivingJourney";
import GivingArchetype from "./_components/GivingArchetype";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import SmBg from "@public/svg/about/giving-roadmap/smPurpleBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";
import PeachCurveBg from "@public/svg/about/giving-roadmap/givingRoadMapPeachCurveBg.svg";
import PeachBigCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapBigCircleBg.svg";
import PeachSmallCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapSmallCircleBg.svg";
import Image from "next/image";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-relative tw-w-full">
        {/* tw-top-[9rem] */}
        <Image
          src={Bg}
          alt=""
          className="tw-hidden sm:tw-block tw-absolute ~tw-top-[9rem]/[17rem] tw-h-[60rem] tw-object-cover tw-w-[300rem]"
        />
        <Image
          src={SmBg}
          alt=""
          className="sm:tw-hidden tw-block tw-absolute tw-top-[8rem] tw-object-cover tw-w-full"
        />
        <div className="tw-relative">
          <div className="container tw-mx-auto tw-relative">
            <BreadCrump
              textOne="About Us"
              linkOne="/about"
              textTwo="Giving Roadmap"
              linkTwo="/about/giving-roadmap"
            />
            <div className="tw-text-left md:tw-text-center tw-relative">
              <Image
                src={OvalPurple}
                alt=""
                className="tw-absolute ~tw-bottom-[4rem]/[3rem] ~tw-w-[10rem]/[11.875rem] ~tw-right-0/[7.8rem]"
              />
              <p className="~tw-px-[1.25rem]/[7rem] ~tw-pt-[4.313rem]/[7.5rem] ~tw-pb-[15rem]/[19.5rem] ~tw-text-h4a/h3 tw-text-gray80 tw-font-playFair tw-tracking-[-0.5px] ~tw-leading-[2.113rem]/[2.6rem] ">
                At AIP, we believe in the transformative power of philanthropy.
                Philanthropists can make a difference. Philanthropists want to
                make a difference, and philanthropists are the best at inspiring
                each other. We want to channel this drive and vision to create
                lasting change, and ignite a ripple effect of impact. Together,
                we craft a tailored roadmap to guide your journey—identifying
                key sectors, clarifying your purpose, and shaping a legacy of
                meaningful giving.
              </p>
            </div>
          </div>
          <GivingJourney />
          <GivingArchetype />
        </div>
      </div>
    </div>
  );
};

export default page;
