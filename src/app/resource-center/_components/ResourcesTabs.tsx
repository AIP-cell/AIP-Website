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
  resourcesArray: any;
  textClassName?: string;
  listClassName?: string;
  selectedIndex: number;
  // setSelected: (value: string) => void;
  setSelectedIndex: (value: number) => void;
};
const ResourcesTabs = ({
  resourcesArray,
  textClassName,
  listClassName,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  return (
    <>
      <TabList
        className={`tw-hidden md:tw-flex tw-bg-[#F0F0F2] tw-rounded-full tw-w-fit tw-p-[.25rem] ${listClassName}`}
      >
        {resourcesArray.map((resources: any, i: number) => (
          <div key={i}>
            <Tab
              className={` ~tw-px-4/[2.4rem] md:tw-flex tw-justify-center tw-w-full tw-items-center tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none ${textClassName}`}
            >
              {resources}
            </Tab>
          </div>
        ))}
      </TabList>

      <Listbox
        value={resourcesArray.at(selectedIndex)}
        onChange={setSelectedIndex}
        as="div"
        className="tw-block md:tw-hidden"
      >
        <ListboxButton
          as="div"
          className={`tw-border-2 tw-border-[#DFE0E5] tw-rounded-md tw-flex tw-items-center  tw-w-full  tw-pr-[1.25rem] `}
        >
          <div
            className={`tw-flex tw-gap-[.79rem] tw-text-gray80 tw-text-h9Copy5 ~tw-pl-[0.75rem]/[1.75rem] tw-py-[0.75rem] tw-items-center tw-w-full tw-justify-between `}
          >
            <p className="   leading-[1.225rem] tw-capitalize">
              {resourcesArray.at(selectedIndex)}
            </p>
            <DownTagSvg className="tw-size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" tw-w-[var(--button-width)] tw-mt-[0.4rem] tw-z-[10000] tw-bg-white tw-border-2 tw-border-[#DFE0E5] tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md   tw-py-[1.313rem]"
        >
          {resourcesArray?.map((items: any, i: number) => (
            <ListboxOption
              key={i}
              value={i}
              className="data-[focus]:bg-blue-100 tw-text-black tw-text-center tw-text-h9Copy5 tw-leading-[1.225rem] tw-cursor-pointer"
            >
              {items}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

export default ResourcesTabs;
