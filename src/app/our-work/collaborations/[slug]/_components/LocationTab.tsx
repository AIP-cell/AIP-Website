"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DownTagSvg from "@/components/svg/DownTagSvg";
type Props = {
  tabArray: any;
  textClassName?: string;
  listClassName?: string;
};
const LocationTabs = ({ tabArray, textClassName, listClassName }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <TabGroup>
      <TabList
        className={`tw-hidden lg:tw-flex tw-bg-[#F0F0F2] tw-rounded-full tw-w-fit tw-p-[.25rem] ${listClassName}`}
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
      <Listbox
        value={tabArray.at(selectedIndex)}
        onChange={setSelectedIndex}
        as="div"
        className="tw-block lg:tw-hidden"
      >
        <ListboxButton
          as="div"
          className={`  tw-bg-bgGray5 tw-rounded-full tw-flex tw-items-center  tw-w-full  tw-pr-[1.25rem] `}
        >
          <div
            className={`tw-flex tw-gap-[.79rem] tw-text-darkPurple tw-text-h9Copy5 tw-pl-[1.75rem] tw-py-[1rem] tw-items-center tw-w-full tw-justify-between `}
          >
            <p className="   tw-leading-[1.4rem] ">
              {tabArray.at(selectedIndex)}
            </p>
            <DownTagSvg className="tw-size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" tw-w-[var(--button-width)] tw-mt-[0.4rem] tw-z-[10000] tw-bg-bgGray5 tw-border-2  tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-xl   tw-py-[1.313rem]"
        >
          {tabArray?.map((items: any, i: number) => (
            <ListboxOption
              key={i}
              value={i}
              className="data-[focus]:bg-blue-100 tw-text-darkPurple tw-text-center tw-text-h9Copy5 tw-leading-[1.225rem] tw-cursor-pointer"
            >
              {items}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </TabGroup>
  );
};

export default LocationTabs;
