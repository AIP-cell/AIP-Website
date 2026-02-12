"use client";
import React from "react";
import { Tab, TabList } from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DownTagSvg from "@/components/svg/DownTagSvg";
import { TCities } from "@/api/type";

type Props = {
  tabArray: TCities[];
  textClassName?: string;
  listClassName?: string;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
};
const LocationTabs = ({
  tabArray,
  textClassName,
  listClassName,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  return (
    <>
      <TabList
        className={`hidden lg:flex bg-[#F0F0F2] rounded-full w-fit p-[.25rem] ${listClassName}`}
      >
        {tabArray.map((resources, i: number) => (
          <Tab
            key={i}
            className={`~px-4/[2.4rem] flex justify-center w-full items-center py-[.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none ${textClassName}`}
          >
            {resources.name}
          </Tab>
        ))}
      </TabList>
      <Listbox
        value={selectedIndex}
        onChange={setSelectedIndex}
        as="div"
        className="block lg:hidden"
      >
        <ListboxButton
          as="div"
          className={`  bg-bgGray5 rounded-full flex items-center  w-full  pr-[1.25rem] `}
        >
          <div
            className={`flex gap-[.79rem] text-darkPurple outline-none text-h9Copy5 pl-[1.75rem] py-[1rem] items-center w-full justify-between `}
          >
            <p className="   leading-[1.4rem] ">
              {tabArray.at(selectedIndex)?.name}
            </p>
            <DownTagSvg className="size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" w-[var(--button-width)] mt-[0.4rem] z-[10000] bg-bgGray5 border-2  outline-none flex flex-col gap-[0.5rem] rounded-xl"
        >
          {tabArray?.map(
            (items, i: number) =>
              items.name != tabArray.at(selectedIndex)?.name && (
                <ListboxOption
                  key={i}
                  value={i}
                  className="data-[focus]:bg-darkPurple data-[focus]:text-white outline-none text-darkPurple text-start text-h9Copy5 leading-[1.225rem] cursor-pointer py-[0.5rem] pl-[1.75rem]"
                >
                  {items.name}
                </ListboxOption>
              )
          )}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

export default LocationTabs;
