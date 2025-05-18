import { TExperts } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";

type Props = {
  people: TExperts[];
};
const NetworkOfExperts = ({ people }: Props) => {
  return (
    <div className="~pt-[7.5rem]/[12.5rem] ~pb-[7rem]/[12.5rem]  container mx-auto">
      <TextStaggerAnimation
        text="<color>Network</color> Of Experts"
        className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center"
      />
      <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] px-[2.8rem] text-midGray text-center ~pt-[0.75rem]/[1.25rem]">
        Were thrilled and grateful for the pro-bono support of experts in our
        network
      </p>
      <div className="~pt-[3.5rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-x-[1.25rem]/[5.625rem] ~gap-y-[3.5rem]/[4.5rem]">
          {people?.map((people, i) => (
            <CardAnimation delay={0.2} key={i}>
              <div key={i} className="">
                {i % 2 == 0 ? (
                  <ATeamCard
                    link=""
                    image={people?.image}
                    titleClassName="underline decoration-[1.5px] underline-offset-4"
                    title={people?.name}
                    desc={people?.organisation}
                    linkedin={false}
                  />
                ) : (
                  <PTeamCard
                    link=""
                    image={people?.image}
                    titleClassName="underline decoration-[1.5px] underline-offset-4"
                    title={people?.name}
                    desc={people?.organisation}
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

export default NetworkOfExperts;
