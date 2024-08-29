import React from "react";
import JourneyArchetype1 from "./_components/JourneyArchetype1";
import JourneyArchetype2 from "./_components/JourneyArchetype2";
import Bg from "@public/svg/aboutPage/giving-roadmap/givingRoadMapHeroSectionBg.svg";
import OvalPurple from "@public/svg/ovalPurple.svg";
import PeachCurveBg from "@public/svg/aboutPage/giving-roadmap/givingRoadMapPeachCurveBg.svg";
import PeachBigCircleBg from "@public/svg/aboutPage/giving-roadmap/givingRoadMapBigCircleBg.svg";
import PeachSmallCircleBg from "@public/svg/aboutPage/giving-roadmap/givingRoadMapSmallCircleBg.svg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9Copy5 tw-leading-[19.6px]"
        >
          {"<"} About Us &nbsp;/&nbsp;
        </Link>
        <Link href="">Giving Roadmap</Link>
      </div>
      <div className="tw-text-center tw-relative">
        <Image src={Bg} alt="" className="tw-absolute tw-top-[14rem]" />
        <Image
          src={OvalPurple}
          alt=""
          className="tw-absolute tw-bottom-[4rem] tw-right-[7.8rem]"
        />
        <p className="tw-px-[7.813rem] tw-pt-[7.5rem] tw-pb-[19.5rem] tw-text-h3 tw-text-gray80 tw-font-playFair tw-leading-[3.25rem] ">
          At AIP we believe: Philanthropists can make a difference.
          Philanthropists want to make a difference. And philanthropists, are
          best at inspiring each other. After chatting with you, we build a plan
          to provide a perspective, identify sectors, help define philanthropic
          purpose.
        </p>
      </div>

      <div className="tw-relative">
        <Image
          src={PeachCurveBg}
          alt=""
          className="tw-absolute tw-bottom-[7.6rem] tw-left-0"
        />
        <Image
          src={PeachBigCircleBg}
          alt=""
          className="tw-absolute tw-top-[8.5rem] tw-right-0"
        />
        <Image
          src={PeachSmallCircleBg}
          alt=""
          className="tw-absolute tw-top-[24.8rem] tw-right-[5.37rem]"
        />

        <JourneyArchetype1 />
        <JourneyArchetype2 />
      </div>
    </div>
  );
};

export default page;
