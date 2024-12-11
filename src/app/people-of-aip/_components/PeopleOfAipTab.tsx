"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import OurCoreFoundersContent from "../core-founders/_components/OurCoreFoundersContent";
import TeamAip from "../team-AIP/_components/TeamAip";
import Link from "next/link";
import Experts from "../experts/_components/Experts";
import cn from "@/utils/tailwind";

type Props = {
  tabSelect: string;
};

const PeopleOfAipTab = ({ tabSelect }: Props) => {
  let active;
  if (tabSelect === "core-founders") {
    active = 0;
  } else if (tabSelect === "founders") {
    active = 1;
  } else if (tabSelect === "Advisory Board") {
    active = 2;
  } else if (tabSelect === "team-AIP") {
    active = 3;
  } else if (tabSelect === "experts") {
    active = 4;
  }
  return (
    <div className=" w-full hidden md:flex justify-center ~pt-8/[4.75rem] ">
      <TabGroup
        defaultIndex={active}
        className="flex w-full flex-col items-center justify-center"
      >
        <TabList className="flex bg-[#F0F0F2] p-1 rounded-full w-fit">
          <Tab className="~px-[1rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
            <Link href="/people-of-aip/core-founders">Core Founders</Link>
          </Tab>
          <Tab
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/founders">Founders</Link>
          </Tab>
          <Tab
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/our-advisory-board/slug">
              Advisory Board
            </Link>
          </Tab>
          <Tab
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/team-AIP">Team AIP</Link>
          </Tab>
          <Tab
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/experts">Experts</Link>
          </Tab>
        </TabList>
        <TabPanels className="w-full">
          <TabPanel>
            <OurCoreFoundersContent />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>
            <TeamAip />
          </TabPanel>
          <TabPanel>
            <Experts />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default PeopleOfAipTab;
