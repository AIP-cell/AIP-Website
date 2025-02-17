import { TPeople } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";

type Props = {
  peopleData: TPeople[];
};
const PeopleWeWorkWith = ({ peopleData }: Props) => {
  return (
    // ~pt-[7rem]/[12.5rem]
    <div className=" ~pb-[5rem]/[7.5rem] container mx-auto">
      {/* <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center">
        People We
        <span className="text-textPurple font-playFairItalic">
          &nbsp;Work With
        </span>
      </h2> */}
      <TextStaggerAnimation
          text="People We <color>Work With</color>"
          className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center"
        />
      <div className="~pt-[2.337rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-[1.25rem]/[5.625rem]">
          {peopleData.map((people, i) => (
            <CardAnimation key={i} index={i} delay={0.3}>
              <div  className="">
                {i % 2 == 0 ? (
                  <ATeamCard
                    title={people?.name}
                    image={people?.image}
                    // title2={people.designation}
                    desc={people?.designation}
                    linkedin={false}
                  />
                ) : (
                  <PTeamCard
                    title={people?.name}
                    image={people?.image}
                    // title2={people.title2}
                    desc={people?.designation}
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

export default PeopleWeWorkWith;
