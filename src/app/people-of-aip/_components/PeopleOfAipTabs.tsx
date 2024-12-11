import cn from "@/utils/tailwind";
import Link from "next/link";
import React from "react";
import PeopleOfAipRespTab from "./PeopleOfAipRespTab";

const tabList = [
  { name: "Our Core Founders", link: "/people-of-aip/core-founders" },
  { name: "Founders", link: "/people-of-aip/founders" },
  {
    name: "Our Advisory Board",
    link: "/people-of-aip/our-advisory-board",
  },
  { name: "Team AIP", link: "/people-of-aip/team-AIP" },
  { name: "Experts", link: "/people-of-aip/experts" },
];
type Props = {
  currentTab: string;
};
const PeopleOfAipTabs = ({ currentTab }: Props) => {
  return (
    <>
      <div className=" w-full hidden lg:flex justify-center ~pt-8/[4.75rem] ">
        <div className="flex w-full justify-center">
          <div className="flex bg-[#F0F0F2] p-1 rounded-full w-fit">
            {tabList.map((items, i) => (
              <div
                key={i}
                className={cn(
                  "~px-[1.5rem]/[2.5rem] py-[0.75rem] text-h9Copy5 leading-[1.22rem] font-inter ",
                  {
                    "!bg-darkPurple !text-white !outline-none !rounded-full":
                      items.name === currentTab,
                  }
                )}
              >
                <Link href={items.link}>{items.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PeopleOfAipRespTab selected={currentTab} listArray={tabList} />
    </>
  );
};

export default PeopleOfAipTabs;
