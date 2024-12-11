import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";
const peopleDataRow1 = [
  {
    title1: "Aakash",
    title2: "Chaudhry",
    desc: "Aakash Educational Services",
  },
  {
    title1: "Ambarish",
    title2: "Raghuvanshi",
    desc: "Info Edge India",
  },

  {
    title1: "GV",
    title2: "Prasad",
    desc: "Dr. Reddy's Lab",
  },
  {
    title1: "Karishma",
    title2: "Shanghvi",
    desc: "Sun Pharma",
  },

  {
    title1: "Mukul",
    title2: "Agrawal",
    desc: "Param Capital",
  },
  {
    title1: "Aakash",
    title2: "Chaudhry",
    desc: "Newgen Software Tech",
  },

  {
    title1: "Pia",
    title2: "Singh",
    desc: "DLF Foundation",
  },
  {
    title1: "Ravindra",
    title2: "Chamaria",
    desc: "Infinity Infotech Parks",
  },
];
const PeopleWeWorkWith = () => {
  return (
    <div className="~pt-[7rem]/[12.5rem] ~pb-[5rem]/[7.5rem] container mx-auto">
      <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center">
        People We
        <span className="text-textPurple font-playFairItalic">
          &nbsp;Work With
        </span>
      </h2>
      <div className="~pt-[2.337rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-[1.25rem]/[5.625rem]">
          {peopleDataRow1.map((people, i) => (
            <div key={i} className="">
              {i % 2 == 0 ? (
                <ATeamCard
                  title={people.title1}
                  title2={people.title2}
                  desc={people.desc}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  title={people.title1}
                  title2={people.title2}
                  desc={people.desc}
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

export default PeopleWeWorkWith;
