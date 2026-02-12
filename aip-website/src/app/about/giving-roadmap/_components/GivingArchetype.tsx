import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import BgButton from "@/components/buttons/BgButton";
import TitleDescCard from "@/components/cards/TitleDescCard";
import Link from "next/link";
import React from "react";
const itemsArray = [
  {
    title1: "Inspiration Seekers",
    desc: "Inspiration Seekers are on the verge of starting their philanthropic journey. Their giving is sporadic and spontaneous, and often limited to a small set of organisations present in their network.",
  },
  {
    title1: "Emerging Givers",
    desc: "Emerging Givers experiment with different causes and organisations, allocating a small percentage of their Treasure. Their personal involvement in philanthropy remains low as they are still active in their careers.",
  },
  {
    title1: "Strategic Enablers",
    desc: "Strategic Enablers leverage their Time, Talent and Ties to support organisations and stimulate the broader philanthropic ecosystem. They generously provide Treasure, but their main mode of engagement is personal involvement.",
  },
  {
    title1: "Core Givers",
    desc: "Core Givers provide long-term and substantial financial funding to multiple NPOs that directly helps them in scaling their reach and expanding their footprint. They are the backbone of the funding for the social sector.",
  },
  {
    title1: "Cause Champions",
    desc: "Cause Champions have strategic and long-term involvement in their passion or cause of choice, where they commit fully to significantly move the needle instead of branching out.",
  },
  {
    title1: "Rainmakers",
    desc: "Rainmakers are the most influential figures across the philanthropic ecosystem with extensive contribution and visionary approach. They take on a broader approach to address systems and root causes.",
  },
];
const GivingArchetype = () => {
  return (
    <div className="flex flex-col text-center w-full items-center ~pb-[5rem]/[7.56rem] container mx-auto relative">
      <div className="~px-[1.25rem]/[9.844rem]">
        <div className="font-playFair ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem]">
          <TextStaggerAnimation text="What's your" className="" />
          <TextStaggerAnimation
            text="<color>Giving Archetype?</color>"
            className=""
          />
        </div>

        <TextStaggerAnimation
          text=" Our Wealth with Purpose report identifies six distinct archetypes
          among Indian philanthropists, each representing unique values and
          approaches to giving. These archetypes are fluid, evolving as you
          progress in your philanthropic journey. Which one resonates with you?
          Where do you see yourself? AIP can support you in navigating the
          giving landscape and elevating your impact in philanthropy."
          className=" ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]  ~px-[1.563rem]/[11rem] text-midGray ~pt-[1rem]/[2.5rem]"
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 ~gap-x-0/[2.5rem] ~gap-y-[0.75rem]/[3.781rem] ~py-[2rem]/[3.5rem] w-full justify-center px-[1.563rem] md:~px-[4rem]/0">
          {itemsArray.map((items, i) => (
            <CardAnimation delay={0.1} key={i}>
              <div className="col-span-1 flex justify-center">
                <TitleDescCard
                  key={i}
                  title1={items.title1}
                  desc={items.desc}
                />
              </div>
            </CardAnimation>
          ))}
        </div>
        <div className="~pt-0/[2.5rem] flex w-full justify-center">
          <Link href="/contact">
            <BgButton
              className="px-[1.75rem] py-[0.75rem]"
              text="Join The Flow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GivingArchetype;
