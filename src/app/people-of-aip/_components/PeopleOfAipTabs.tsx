import cn from "@/utils/tailwind";
import Link from "next/link";
import React from "react";
import PeopleOfAipRespTab from "./PeopleOfAipRespTab";

type Props = {
  currentTab: string;
  tabClassName?: string;
  mainClassName?: string;
  tabListClassName?: string;
  tabList: { key: string; name: string; link: string }[];
};
const PeopleOfAipTabs = ({
  currentTab,
  tabList,
  tabListClassName,
  tabClassName,
  mainClassName,
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "z-[200] w-full hidden lg:flex justify-center items-center ~pt-8/[4.75rem] ",
          mainClassName
        )}
      >
        <div className="flex w-full justify-center">
          <div
            className={cn(
              "z-[200] flex bg-[#F0F0F2] p-1 rounded-full w-fit",
              tabListClassName
            )}
          >
            {tabList.map((items, i) => (
              <div
                key={i}
                className={cn(
                  "~px-[1.5rem]/[2.5rem] py-[0.75rem] flex justify-center items-center text-h9Copy5 leading-[1.22rem] font-inter ",
                  tabClassName,
                  {
                    "!bg-darkPurple !text-white !outline-none !rounded-full":
                      items.key === currentTab,
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
