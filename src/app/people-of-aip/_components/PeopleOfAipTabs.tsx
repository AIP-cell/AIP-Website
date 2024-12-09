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
      <div className=" tw-w-full tw-hidden lg:tw-flex tw-justify-center ~tw-pt-8/[4.75rem] ">
        <div className="tw-flex tw-w-full tw-justify-center">
          <div className="tw-flex tw-bg-[#F0F0F2] tw-p-1 tw-rounded-full tw-w-fit">
            {tabList.map((items, i) => (
              <div
                key={i}
                className={cn(
                  "~tw-px-[1.5rem]/[2.5rem] tw-py-[0.75rem] tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter ",
                  {
                    "!tw-bg-darkPurple !tw-text-white !tw-outline-none !tw-rounded-full":
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
