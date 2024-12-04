import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TitleDescCard from "@/components/cards/TitleDescCard";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import Image from "next/image";
import PeachCurveBg from "@public/svg/about/giving-roadmap/givingRoadMapPeachCurveBg.svg";
import PeachBigCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapBigCircleBg.svg";
import PeachSmallCircleBg from "@public/svg/about/giving-roadmap/givingRoadMapSmallCircleBg.svg";
import React from "react";
const itemsArray = [
  {
    title1: "Treasure",
    desc: "How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title1: "Involvement",
    desc: "How do you leverage your time, talent, and connections to amplify the change you wish to see?",
  },
  {
    title1: "Evangelisation",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
];
const GivingJourney = () => {
  return (
    <div className="tw-flex tw-flex-col tw-text-center ~tw-pb-[7.5rem]/[12.5rem] tw-relative">
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
      <div className="container tw-mx-auto tw-relative ~tw-px-[1.25rem]/[9.844rem]">
        <div className="tw-font-playFair ~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem]">
          Where are you in your
          <h2 className="tw-font-playFairItalic tw-text-textPurple">
            Giving Journey?
          </h2>
        </div>

        <p className="~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4 ~tw-px-[1.563rem]/[11rem] tw-text-midGray ~tw-pt-[2rem]/[2.5rem]">
          Embark on a transformative journey with the TIE Model of Philanthropy.
          At AIP, we categorise your philanthropic inputs into three impactful
          areas:
        </p>
        <div className="tw-flex tw-flex-col md:tw-flex-row ~tw-gap-[0.75rem]/[2.5rem] ~tw-py-[2rem]/[3.5rem] tw-w-full tw-justify-center ~tw-px-[1.563rem]/0">
          {itemsArray.map((items, i) => (
            <TitleDescCard key={i} title1={items.title1} desc={items.desc} />
          ))}
        </div>
        <div className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-center ~tw-px-[1.56rem]/[11rem] tw-text-midGray ">
          <p className=" ">
            Understanding where you stand is the first step towards a purposeful
            journey in giving. Are you just starting to explore? Or are you
            looking to organise and elevate your philanthropic efforts?
          </p>
          <p className=" tw-pt-[1rem]">
            Discover your unique path through our questionnaire. Download it
            here to dive deeper into how AIP can support you in channelling your
            drive for impact.
          </p>
        </div>
        <div className="~tw-pt-[2rem]/[2.5rem] tw-flex tw-w-full tw-justify-center">
          <ButtonAnimation
            type="submit"
            className="tw-text-white hover:tw-text-darkPurple tw-text-h9Copy5 tw-flex tw-gap-[0.5rem] tw-leading-[1.225rem] hover:tw-bg-white tw-bg-darkPurple tw-px-[1.75rem] tw-py-[0.75rem] tw-rounded-[1.5rem] tw-cursor-pointer"
          >
            <p> Discover Your Path</p>

            <DownloadFileSvg className="tw-size-[1.25rem]" />
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default GivingJourney;
