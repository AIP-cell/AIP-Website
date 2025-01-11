import React from "react";
import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import { TMethodsOfJoining } from "@/api/type";

type Props = {
  methodsOfJoining: TMethodsOfJoining[];
};
const Join = ({ methodsOfJoining }: Props) => {
  return (
    <div className="w-full relative">
      <div className="relative container mx-auto ">
        <div className="relative flex flex-col items-center justify-center ~pt-[7.5rem]/[12.5rem]">
          <h2 className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]">
            Methods of
            <span className="text-textPurple font-playFairItalic">
              &nbsp;Joining
            </span>
          </h2>
          <p className="text-midGray text-center ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~px-[2.813rem]/[20.93rem] ~pt-[1rem]/[1.25rem]">
            We invite you to join our growing network of philanthropists to see
            strategic philanthropy impact India’s transformation.
          </p>
          <p className="text-gray80 ~text-h6M/h5 ~leading-[1.575rem]/[1.75rem] font-playFair text-center ~px-5/[20.93rem] ~pt-[2.5rem]/[3.123rem]">
            To initiate a conversation, email our Philanthropy Partners
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ~gap-x-[1.25rem]/[5.625rem] ~gap-y-[1rem]/[5.625rem]  w-full justify-center ~pt-[1.25rem]/[4rem] ~px-[1.25rem]/[7.813rem]">
          {methodsOfJoining.map((join, i) => (
            <div key={i} className="flex justify-center">
              {i % 2 == 0 ? (
                <ATeamCard
                  image={join?.image}
                  titleClassName="underline decoration-[1px] underline-offset-4"
                  title2ClassName="underline decoration-[1px] underline-offset-4"
                  // location={join.location}
                  email={join?.email}
                  title={join?.name}
                  // title2={join.title2}
                  desc={join?.designation}
                  linkedin={false}
                />
              ) : (
                <PTeamCard
                  titleClassName="underline decoration-[1px] underline-offset-4"
                  title2ClassName="underline decoration-[1px] underline-offset-4"
                  image={join?.image}
                  // location={join.location}
                  email={join?.email}
                  title={join?.name}
                  // title2={join.title2}
                  desc={join?.designation}
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

export default Join;
