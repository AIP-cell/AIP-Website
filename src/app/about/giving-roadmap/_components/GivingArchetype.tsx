import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BgButton from "@/components/buttons/BgButton";
import TitleDescCard from "@/components/cards/TitleDescCard";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import React from "react";
const itemsArray = [
  {
    title: "Inspiration Seekers",
    desc: "How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title: "Emerging Givers",
    desc: "How do you leverage your time, talent, and connections to amplify the change you wish to see?",
  },
  {
    title: "Strategic Enablers",
    desc: "  How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
  {
    title: "Core Givers",
    desc: " How do you strategically allocate your financial resources to create the greatest impact?",
  },
  {
    title: "Cause Champions",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
  {
    title: "Rainmakers",
    desc: " How do you use your voice and influence to inspire others and advocate for meaningful causes?",
  },
];
const GivingArchetype = () => {
  return (
    <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-items-center tw-pb-[7.56rem] container tw-mx-auto tw-relative">
      <div className="">
        <div className="tw-font-playFair ~tw-text-h4/h2 tw-text-gray80 ~tw-leading-[2.6rem]/[3.3rem]">
          What's your
          <h2 className="tw-font-playFairItalic tw-text-textPurple">
            Giving Journey?
          </h2>
        </div>

        <p className="~tw-leading-[1.225rem]/[1.4rem]  ~tw-px-5/[20.875rem] tw-text-midGray tw-pt-[2.5rem]">
          Embark on a transformative journey with the TIE Model of Philanthropy.
          At AIP, we categorise your philanthropic inputs into three impactful
          areas:
        </p>
        <div className="tw-grid tw-grid-cols-3 tw-gap-x-[2.5rem] tw-gap-y-[3.781rem] tw-py-[3.5rem] tw-w-full tw-justify-center">
            {itemsArray.map((items, i) => (
          <div className="tw-col-span-1 tw-flex tw-justify-center">
              <TitleDescCard key={i} title={items.title} desc={items.desc} />
          </div>
            ))}
        </div>
        <p className="~tw-leading-[1.225rem]/[1.4rem] tw-text-center ~tw-px-5/[20.875rem] tw-text-midGray  ">
          Understanding where you stand is the first step towards a purposeful
          journey in giving. Are you just starting to explore? Or are you
          looking to organise and elevate your philanthropic efforts?
        </p>
        <p className="~tw-leading-[1.225rem]/[1.4rem] tw-text-center ~tw-px-5/[20.875rem] tw-text-midGray tw-pt-[1rem]">
          Discover your unique path through our questionnaire. Download it here
          to dive deeper into how AIP can support you in channelling your drive
          for impact.
        </p>
        <div className="tw-pt-[2.5rem] tw-flex tw-w-full tw-justify-center">
          <BgButton className="tw-px-[1.75rem] tw-py-[0.75rem]" text="Join The Flow"/>
        </div>
      </div>
    </div>
  );
};

export default GivingArchetype;
