import { TPeople } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";

type Props = {
  people: TPeople[];
};
const NposPartners = ({ people }: Props) => {
  return (
    <div className=" ~pb-[5rem]/[7.5rem] container mx-auto">
      <TextStaggerAnimation
        text="NPOs We <color>Partner With</color>"
        className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center"
      />
      <div className="~pt-[2.5rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-[1.25rem]/[5.625rem]">
          {people?.map((people, i) => (
            <CardAnimation delay={0.2} key={i}>
              <div key={i} className="">
                {i % 2 == 0 ? (
                  <ATeamCard
                    title={people?.name}
                    desc={people?.designation}
                    image={people?.image}
                    linkedin={false}
                  />
                ) : (
                  <PTeamCard
                    title={people?.name}
                    desc={people?.designation}
                    image={people?.image}
                    linkedin={false}
                  />
                )}
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NposPartners;
