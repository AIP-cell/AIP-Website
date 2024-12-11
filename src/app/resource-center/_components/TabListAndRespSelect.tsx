"use client";

import React, { useState } from "react";
import ArrowDownSvg from "@public/svg/arrowDown.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ResourceCard from "../../../components/cards/ResourceCard";
import Image from "next/image";
import CustomSelect from "@/components/custom/CustomSelect";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DownTagSvg from "@/components/svg/DownTagSvg";

const fieldsArray = ["Fields/Sector", "Fields/Sector"];
const dateArray = ["Date", "Date"];

type Props = {
  tabArray: any;
  textClassName?: string;
  listClassName?: string;
  listboxButtonClassName?: string;
  selectedIndex: number;
  // setSelected: (value: string) => void;
  setSelectedIndex: (value: number) => void;
};
const TabListAndRespSelect = ({
  tabArray: tabArray,
  textClassName,
  listClassName,
  listboxButtonClassName,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  return (
    <>
      <TabList
        className={`hidden xl:flex bg-[#F0F0F2] rounded-full w-fit p-[.25rem] ${listClassName}`}
      >
        {tabArray.map((items: any, i: number) => (
          <div key={i}>
            <Tab
              className={` ~px-4/[2.4rem] md:flex justify-center w-full items-center py-[.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none ${textClassName}`}
            >
              {items}
            </Tab>
          </div>
        ))}
      </TabList>

      <Listbox
        value={tabArray.at(selectedIndex)}
        onChange={setSelectedIndex}
        as="div"
        className="block xl:hidden w-full"
      >
        <ListboxButton
          as="div"
          className={`  bg-bgGray5 rounded-full flex items-center  w-full  pr-[1.25rem] ${listboxButtonClassName}`}
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
    </>
  );
};

export default TabListAndRespSelect;
