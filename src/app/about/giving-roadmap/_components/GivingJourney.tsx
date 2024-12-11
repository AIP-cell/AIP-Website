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
    <div className="flex flex-col text-center ~pb-[7.5rem]/[12.5rem] relative">
      <Image
        src={PeachCurveBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[7.6rem] left-0"
      />
      <Image
        src={PeachBigCircleBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[33.2rem] right-0"
      />
      <Image
        src={PeachSmallCircleBg}
        alt=""
        className="hidden lg:block absolute z-[-1] bottom-[24.8rem] right-[5.37rem]"
      />
      <div className="container mx-auto relative ~px-[1.25rem]/[9.844rem]">
        <div className="font-playFair ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem]">
          Where are you in your
          <h2 className="font-playFairItalic text-textPurple">
            Giving Journey?
          </h2>
        </div>

        <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 ~px-[1.563rem]/[11rem] text-midGray ~pt-[2rem]/[2.5rem]">
          Embark on a transformative journey with the TIE Model of Philanthropy.
          At AIP, we categorise your philanthropic inputs into three impactful
          areas:
        </p>
        <div className="flex flex-col md:flex-row ~gap-[0.75rem]/[2.5rem] ~py-[2rem]/[3.5rem] w-full justify-center ~px-[1.563rem]/0">
          {itemsArray.map((items, i) => (
            <TitleDescCard key={i} title1={items.title1} desc={items.desc} />
          ))}
        </div>
        <div className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center ~px-[1.56rem]/[11rem] text-midGray ">
          <p className=" ">
            Understanding where you stand is the first step towards a purposeful
            journey in giving. Are you just starting to explore? Or are you
            looking to organise and elevate your philanthropic efforts?
          </p>
          <p className=" pt-[1rem]">
            Discover your unique path through our questionnaire. Download it
            here to dive deeper into how AIP can support you in channelling your
            drive for impact.
          </p>
        </div>
        <div className="~pt-[2rem]/[2.5rem] flex w-full justify-center">
          <ButtonAnimation
            type="submit"
            className="text-white hover:text-darkPurple text-h9Copy5 flex gap-[0.5rem] leading-[1.225rem] hover:bg-white bg-darkPurple px-[1.75rem] py-[0.75rem] rounded-[1.5rem] cursor-pointer"
          >
            <p> Discover Your Path</p>

            <DownloadFileSvg className="size-[1.25rem]" />
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default GivingJourney;
