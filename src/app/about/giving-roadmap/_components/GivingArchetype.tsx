import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
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
    <div className="flex flex-col text-center w-full items-center ~pb-[5rem]/[7.56rem] container mx-auto relative">
      <div className="~px-[1.25rem]/[9.844rem]">
        <div className="font-playFair ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem]">
        <TextStaggerAnimation text="What's your" className="" />
          <TextStaggerAnimation
            text="<color>Giving Architype?</color>"
            className=""
          />
          {/* What&apos;s your */}
          {/* <h2 className="font-playFairItalic text-textPurple">
            Giving Architype?
          </h2> */}
        </div>

        <p className=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]  ~px-[1.563rem]/[11rem] text-midGray ~pt-[1rem]/[2.5rem]">
          Our Wealth with Purpose report identifies six distinct archetypes
          among Indian philanthropists, each representing unique values and
          approaches to giving. These archetypes are fluid, evolving as you
          progress in your philanthropic journey. Which one resonates with you?
          Where do you see yourself? AIP can support you in navigating the
          giving landscape and elevating your impact in philanthropy.
        </p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 ~gap-x-[2.5rem]/0 ~gap-y-[0.75rem]/[3.781rem] ~py-[2rem]/[3.5rem] w-full justify-center px-[1.563rem] md:~px-[4rem]/0">
          {itemsArray.map((items, i) => (
            <CardAnimation index={i} delay={0.1} key={i}>
              <div  className="col-span-1 flex justify-center">
                <TitleDescCard key={i} title1={items.title1} desc={items.desc} />
              </div>
            </CardAnimation>
          ))}
        </div>
        <div className="~pt-0/[2.5rem] flex w-full justify-center">
          <BgButton
            className="px-[1.75rem] py-[0.75rem]"
            text="Join The Flow"
          />
        </div>
      </div>
    </div>
  );
};

export default GivingArchetype;
