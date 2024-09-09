import React from "react";
import JourneyArchetype1 from "./_components/GivingJourney";
import JourneyArchetype2 from "./_components/GivingArchetype";
import Bg from "@public/svg/about/giving-roadmap/givingRoadMapHeroSectionBg.svg";
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
      <div className="bg-container tw-mx-auto">
        <Image
          src={Bg}
          alt=""
          className="tw-absolute tw-top-[14rem] tw-inset-x-0 tw-w-full"
        />
        <div className="container tw-mx-auto tw-relative">
          <BreadCrump
            textOne="About Us"
            linkOne="/about"
            textTwo="Giving Roadmap"
            linkTwo="/about/giving-roadmap"
          />
          <div className="tw-text-center tw-relative">
            <Image
              src={OvalPurple}
              alt=""
              className="tw-absolute tw-bottom-[4rem] tw-right-[7.8rem]"
            />
            <p className="~tw-px-5/[7.813rem] ~tw-pt-[4.313rem]/[7.5rem] ~tw-pb-[15rem]/[19.5rem] ~tw-text-h4a/h3 tw-text-gray80 tw-font-playFair tw-leading-[3.25rem] ">
              At AIP we believe: Philanthropists can make a difference.
              Philanthropists want to make a difference. And philanthropists,
              are best at inspiring each other. After chatting with you, we
              build a plan to provide a perspective, identify sectors, help
              define philanthropic purpose.
            </p>
          </div>

          <div className="tw-relative">
            <Image
              src={PeachCurveBg}
              alt=""
              className="tw-absolute tw-z-[-1] tw-bottom-[7.6rem] tw-left-0"
            />
            <Image
              src={PeachBigCircleBg}
              alt=""
              className="tw-absolute tw-z-[-1] tw-top-[8.5rem] tw-right-0"
            />
            <Image
              src={PeachSmallCircleBg}
              alt=""
              className="tw-absolute tw-z-[-1] tw-top-[24.8rem] tw-right-[5.37rem]"
            />

            <JourneyArchetype1 />
            <JourneyArchetype2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
