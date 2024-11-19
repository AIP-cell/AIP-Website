import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BgButton from "@/components/buttons/BgButton";
import TitleDescCard from "@/components/cards/TitleDescCard";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import React from "react";
const itemsArray = [
  {
    title1: "Inspiration Seekers",
    desc: "How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title1: "Emerging Givers",
    desc: "How do you leverage your time, talent, and connections to amplify the change you wish to see?",
  },
  {
    title1: "Strategic Enablers",
    desc: "  How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
  {
    title1: "Core Givers",
    desc: " How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title1: "Cause Champions",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
  {
    title1: "Rainmakers",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
];
const GivingArchetype = () => {
  return (
    <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-items-center tw-pb-[7.56rem] container tw-mx-auto tw-relative">
      <div className="tw-px-[9.844rem]">
        <div className="tw-font-playFair ~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem]">
          What's your
          <h2 className="tw-font-playFairItalic tw-text-textPurple">
            Giving Architype?
          </h2>
        </div>

        <p className="~tw-leading-[1.225rem]/[1.4rem]  ~tw-px-5/[11rem] tw-text-midGray tw-pt-[2.5rem]">
          Our Wealth with Purpose report identifies six distinct archetypes
          among Indian philanthropists, each representing unique values and
          approaches to giving. These archetypes are fluid, evolving as you
          progress in your philanthropic journey. Which one resonates with you?
          Where do you see yourself? AIP can support you in navigating the
          giving landscape and elevating your impact in philanthropy.
        </p>
        <div className="tw-grid tw-grid-cols-3 tw-gap-x-[2.5rem] tw-gap-y-[3.781rem] tw-py-[3.5rem] tw-w-full tw-justify-center">
          {itemsArray.map((items, i) => (
            <div className="tw-col-span-1 tw-flex tw-justify-center">
              <TitleDescCard key={i} title1={items.title1} desc={items.desc} />
            </div>
          ))}
        </div>

        <div className="tw-pt-[2.5rem] tw-flex tw-w-full tw-justify-center">
          <BgButton
            className="tw-px-[1.75rem] tw-py-[0.75rem]"
            text="Join The Flow"
          />
        </div>
      </div>
    </div>
  );
};

export default GivingArchetype;
