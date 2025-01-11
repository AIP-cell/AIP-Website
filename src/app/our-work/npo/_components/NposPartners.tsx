import { TPeople } from "@/api/type";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";

type Props = {
  people: TPeople[];
};
const NposPartners = ({ people }: Props) => {
  return (
    <div className="~pt-[5rem]/[10rem] ~pb-[5rem]/[7.5rem] container mx-auto">
      <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center">
        NPOs We
        <span className="text-textPurple font-playFairItalic">
          &nbsp;Partner With
        </span>
      </h2>
      <div className="~pt-[2.5rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-[1.25rem]/[5.625rem]">
          {people?.map((people, i) => (
            <div key={i} className="">
              {i % 2 == 0 ? (
                <ATeamCard
                  title={people?.name}
                  // title2={people.title2}
                  desc={people?.designation}
                  image={people?.image}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  title={people?.name}
                  // title2={people.title2}
                  desc={people?.designation}
                  image={people?.image}
                  linkedin={false}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NposPartners;
