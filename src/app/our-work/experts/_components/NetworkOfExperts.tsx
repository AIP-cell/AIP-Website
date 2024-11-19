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
const NetworkOfExperts = () => {
  return (
    <div className="~tw-pt-[5rem]/[12.5rem] tw-pb-[7.5rem] container tw-mx-auto">
      <h2 className="~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair tw-text-darkBrown tw-text-center">
        <span className="tw-text-textPurple tw-font-playFairItalic">
          Network&nbsp;
        </span>
        Of Experts
      </h2>
      <p className="tw-leading-[1.4rem] tw-text-midGray tw-text-center tw-pt-[1.25rem]">
        Were thrilled and grateful for the pro-bono support of experts in our
        network
      </p>
      <div className="tw-pt-[5rem] ~tw-px-[1.25rem]/[7.8rem]">
        <div className=" tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-justify-center ~tw-gap-x-[1.25rem]/[5.625rem] tw-gap-y-[4.5rem]">
          {peopleDataRow1.map((people, i) => (
            <div key={i} className="">
              {i % 2 == 0 ? (
                <ATeamCard
                  titleClassName="tw-underline tw-decoration-[2px] tw-underline-offset-4"
                  title2ClassName="tw-underline tw-decoration-[2px] tw-underline-offset-4"
                  title={people.title1}
                  title2={people.title2}
                  desc={people.desc}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  titleClassName="tw-underline tw-decoration-[2px] tw-underline-offset-4"
                  title2ClassName="tw-underline tw-decoration-[2px] tw-underline-offset-4"
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

export default NetworkOfExperts;
