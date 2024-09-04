import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";
const peopleDataRow1 = [
  {
    a: {
      title1: "Aakash",
      title2: "Chaudhry",
      desc: "Aakash Educational Services",
    },
    p: {
      title1: "Ambarish",
      title2: "Raghuvanshi",
      desc: "Info Edge India",
    },
  },
  {
    a: {
      title1: "GV",
      title2: "Prasad",
      desc: "Dr. Reddy's Lab",
    },
    p: {
      title1: "Karishma",
      title2: "Shanghvi",
      desc: "Sun Pharma",
    },
  },
];
const peopleDataRow2 = [
  {
    a: {
      title1: "Mukul",
      title2: "Agrawal",
      desc: "Param Capital",
    },
    p: {
      title1: "Aakash",
      title2: "Chaudhry",
      desc: "Newgen Software Tech",
    },
  },
  {
    a: {
      title1: "Pia",
      title2: "Singh",
      desc: "DLF Foundation",
    },
    p: {
      title1: "Ravindra",
      title2: "Chamaria",
      desc: "Infinity Infotech Parks",
    },
  },
];
const PeopleWeWorkWith = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-pb-[7.5rem] container tw-mx-auto">
      <h2 className="tw-text-h2 tw-font-playFair tw-text-darkBrown tw-text-center">
        People We
        <span className="tw-text-textPurple tw-font-playFairItalic">
          &nbsp;Work With
        </span>
      </h2>
      <div className="tw-pt-[5rem]">
        <div className=" tw-flex tw-justify-center tw-flex-wrap tw-gap-[5.625rem]">
          {peopleDataRow1.map((people, i) => (
            <div key={i} className="tw-flex tw-gap-[5.625rem]">
              <ATeamCard
                title={people.a.title1}
                title2={people.a.title2}
                desc={people.a.desc}
                linkedin={false}
              />
              <PTeamCard
                title={people.p.title1}
                title2={people.p.title2}
                desc={people.p.desc}
                linkedin={false}
              />
            </div>
          ))}
        </div>
        <div className=" tw-pt-[4rem] tw-flex  tw-justify-center tw-flex-wrap tw-gap-[5.625rem]">
          {peopleDataRow2.map((people, i) => (
            <div key={i} className="tw-flex tw-gap-[5.625rem]">
              <ATeamCard
                title={people.a.title1}
                title2={people.a.title2}
                desc={people.a.desc}
                linkedin={false}
              />
              <PTeamCard
                title={people.p.title1}
                title2={people.p.title2}
                desc={people.p.desc}
                linkedin={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleWeWorkWith;
