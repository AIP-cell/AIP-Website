import React from "react";
import JourneyArchetype1 from "./_components/GivingJourney";
import JourneyArchetype2 from "./_components/GivingArchetype";
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
          className="tw-hidden sm:tw-block tw-absolute ~tw-top-[9rem]/[13.5rem] tw-h-[60rem] tw-object-cover tw-w-[300rem]"
        />
        <Image
          src={SmBg}
          alt=""
          className="sm:tw-hidden tw-block tw-absolute tw-top-[8rem] tw-object-cover tw-w-full"
        />
        <div className="tw-relative">
          <Image
            src={PeachCurveBg}
            alt=""
            className="tw-hidden lg:tw-block tw-absolute tw-z-[-1] tw-bottom-[7.6rem] tw-left-0"
          />
          <Image
            src={PeachBigCircleBg}
            alt=""
            className="tw-hidden lg:tw-block tw-absolute tw-z-[-1] tw-bottom-[33.2rem] tw-right-0"
          />
          <Image
            src={PeachSmallCircleBg}
            alt=""
            className="tw-hidden lg:tw-block tw-absolute tw-z-[-1] tw-bottom-[24.8rem] tw-right-[5.37rem]"
          />
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
              <p className="~tw-px-[1.25rem]/[7.813rem] ~tw-pt-[4.313rem]/[7.5rem] ~tw-pb-[15rem]/[19.5rem] ~tw-text-h4a/h3 tw-text-gray80 tw-font-playFair ~tw-leading-[2.113rem]/[3.25rem] ">
                At AIP we believe: Philanthropists can make a difference.
                Philanthropists want to make a difference. And philanthropists,
                are best at inspiring each other. After chatting with you, we
                build a plan to provide a perspective, identify sectors, help
                define philanthropic purpose.
              </p>
            </div>

            <JourneyArchetype1 />
            <JourneyArchetype2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
