import { TExperts } from "@/api/type";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import React from "react";
// const peopleDataRow1 = [
//   {
//     title1: "Aakash",
//     title2: "Chaudhry",
//     desc: "Aakash Educational Services",
//   },
//   {
//     title1: "Ambarish",
//     title2: "Raghuvanshi",
//     desc: "Info Edge India",
//   },

//   {
//     title1: "GV",
//     title2: "Prasad",
//     desc: "Dr. Reddy's Lab",
//   },
//   {
//     title1: "Karishma",
//     title2: "Shanghvi",
//     desc: "Sun Pharma",
//   },

//   {
//     title1: "Mukul",
//     title2: "Agrawal",
//     desc: "Param Capital",
//   },
//   {
//     title1: "Aakash",
//     title2: "Chaudhry",
//     desc: "Newgen Software Tech",
//   },

//   {
//     title1: "Pia",
//     title2: "Singh",
//     desc: "DLF Foundation",
//   },
//   {
//     title1: "Ravindra",
//     title2: "Chamaria",
//     desc: "Infinity Infotech Parks",
//   },
// ];
type Props = {
  people: TExperts[];
};
const NetworkOfExperts = ({ people }: Props) => {
  return (
    <div className="~pt-[7.5rem]/[12.5rem] ~pb-[7.5rem]/0 container mx-auto">
      <h2 className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair text-darkBrown text-center">
        <span className="text-textPurple font-playFairItalic">
          Network&nbsp;
        </span>
        Of Experts
      </h2>
      <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] px-[2.8rem] text-midGray text-center ~pt-[0.75rem]/[1.25rem]">
        Were thrilled and grateful for the pro-bono support of experts in our
        network
      </p>
      <div className="~pt-[3.5rem]/[5rem] ~px-[1.25rem]/[7.8rem]">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ~gap-x-[1.25rem]/[5.625rem] ~gap-y-[3.5rem]/[4.5rem]">
          {people.map((people, i) => (
            <div key={i} className="">
              {i % 2 == 0 ? (
                <ATeamCard
                  image={people.image}
                  titleClassName="underline decoration-[1.5px] underline-offset-4"
                  title2ClassName="underline decoration-[1.5px] underline-offset-4"
                  title={people.name}
                  // title2={people.title2}
                  desc={people.organisation}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  image={people.image}
                  titleClassName="underline decoration-[1.5px] underline-offset-4"
                  title2ClassName="underline decoration-[1.5px] underline-offset-4"
                  title={people.name}
                  // title2={people.title2}
                  desc={people.organisation}
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
