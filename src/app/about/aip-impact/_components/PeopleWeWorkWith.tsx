import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";
const peopleDataRow1 = [
  {
    a: {
      title: "Aakash Chaudhry",
      desc: "Aakash Educational Services",
    },
    p: {
      title: "Ambarish Raghuvanshi",
      desc: "Info Edge India",
    },
  },
  {
    a: {
      title: "GV Prasad",
      desc: "Dr. Reddy's Lab",
    },
    p: {
      title: "Karishma Shanghvi",
      desc: "Sun Pharma",
    },
  },
];
const peopleDataRow2 = [
  {
    a: {
      title: "Mukul Agrawal",
      desc: "Param Capital",
    },
    p: {
      title: "Aakash Chaudhry",
      desc: "Newgen Software Tech",
    },
  },
  {
    a: {
      title: "Pia Singh",
      desc: "DLF Foundation",
    },
    p: {
      title: "Ravindra Chamaria",
      desc: "Infinity Infotech Parks",
    },
  },
];
const PeopleWeWorkWith = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-pb-[7.5rem] container tw-mx-auto">
      <h2 className="tw-text-h2 tw-font-playFair tw-text-darkBrown tw-text-center">
        People We <span className="tw-text-textPurple tw-font-playFairItalic"> Work With</span>
      </h2>
      <div className="tw-pt-[5rem]">
        <div className=" tw-flex tw-justify-center tw-flex-wrap tw-gap-[5.625rem]">
          {peopleDataRow1.map((people, i) => (
            <div key={i} className="tw-flex tw-gap-[5.625rem]">
              <ATeamCard
                title={people.a.title}
                desc={people.a.desc}
                linkedin={false}
              />
              <PTeamCard
                title={people.p.title}
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
                title={people.a.title}
                desc={people.a.desc}
                linkedin={false}
              />
              <PTeamCard
                title={people.p.title}
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
