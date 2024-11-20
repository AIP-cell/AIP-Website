"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import OurCoreFoundersContent from "../founders/_components/OurCoreFoundersContent";
import TeamAip from "../founders/_components/TeamAip";
import Link from "next/link";
import Experts from "../founders/_components/Experts";
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
    <div className=" tw-w-full tw-hidden md:tw-flex tw-justify-center ~tw-pt-8/[4.75rem] ">
      <TabGroup
        defaultIndex={active}
        className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center"
      >
        <TabList className="tw-flex tw-bg-[#F0F0F2] tw-p-1 tw-rounded-full tw-w-fit">
          <Tab className="tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            <Link href="/people-of-aip/core-founders">Core Founders</Link>
          </Tab>
          <Tab
            className={cn(
              "tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/founders">Founders</Link>
          </Tab>
          <Tab
            className={cn(
              "tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/our-advisory-board/slug">
              Advisory Board
            </Link>
          </Tab>
          <Tab
            className={cn(
              "tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/team-AIP">Team AIP</Link>
          </Tab>
          <Tab
            className={cn(
              "tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/experts">Experts</Link>
          </Tab>
        </TabList>
        <TabPanels className="tw-w-full">
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
