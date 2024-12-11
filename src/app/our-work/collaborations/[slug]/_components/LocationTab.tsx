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
        className={`hidden lg:flex bg-[#F0F0F2] rounded-full w-fit p-[.25rem] ${listClassName}`}
      >
        {tabArray.map((resources: any, i: number) => (
          <Tab
            key={i}
            className={`~px-4/[2.4rem] flex justify-center w-full items-center py-[.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none ${textClassName}`}
          >
            {resources}
          </Tab>
        ))}
      </TabList>
      <Listbox
        value={tabArray.at(selectedIndex)}
        onChange={setSelectedIndex}
        as="div"
        className="block lg:hidden"
      >
        <ListboxButton
          as="div"
          className={`  bg-bgGray5 rounded-full flex items-center  w-full  pr-[1.25rem] `}
        >
          <div
            className={`flex gap-[.79rem] text-darkPurple text-h9Copy5 pl-[1.75rem] py-[1rem] items-center w-full justify-between `}
          >
            <p className="   leading-[1.4rem] ">
              {tabArray.at(selectedIndex)}
            </p>
            <DownTagSvg className="size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" w-[var(--button-width)] mt-[0.4rem] z-[10000] bg-bgGray5 border-2  flex flex-col gap-[1.625rem] rounded-xl   py-[1.313rem]"
        >
          {tabArray?.map((items: any, i: number) => (
            <ListboxOption
              key={i}
              value={i}
              className="data-[focus]:bg-blue-100 text-darkPurple text-center text-h9Copy5 leading-[1.225rem] cursor-pointer"
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
