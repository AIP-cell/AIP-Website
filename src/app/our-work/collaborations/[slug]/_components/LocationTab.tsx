import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

type Props = {
  tabArray: any;
  textClassName?: string;
  listClassName?: string;
};
const LocationTabs = ({ tabArray, textClassName, listClassName }: Props) => {
  return (
    <TabList
      className={`tw-flex tw-bg-[#F0F0F2] tw-rounded-full tw-w-fit tw-p-[.25rem] ${listClassName}`}
    >
      {tabArray.map((resources: any, i: number) => (
        <Tab
          key={i}
          className={`~tw-px-4/[2.4rem] tw-flex tw-justify-center tw-w-full tw-items-center tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none ${textClassName}`}
        >
          {resources}
        </Tab>
      ))}
    </TabList>
  );
};

export default LocationTabs;
