"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
// import DownArrow from "@public/svg/downArrow.svg";
import ArrowDownSvg from "@public/svg/arrowDown.svg";

import Link from "next/link";
import React, { useState } from "react";
import DownTagSvg from "@/components/svg/DownTagSvg";
type Props = {
  optionsArray?: any[];
  ListboxButtonClassName?: string;
  selected: any;
  setSelected: (value: any) => void;
  selectedClassName?: string;
};
const NewsRespSelect = ({
  optionsArray,
  selected,
  setSelected,
  selectedClassName,
  ListboxButtonClassName,
}: Props) => {
  //   const [selected, setSelected] = useState(optionsArray?.at(0));
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={`!tw-bg-[#E9E6F280] !tw-border-none !tw-rounded-full !tw-pl-[1.75rem] !tw-pr-[1.25rem] tw-border-2 tw-border-[#DFE0E5]  tw-flex tw-items-center  tw-w-full   ${ListboxButtonClassName}`}
      >
        <div
          className={` !tw-text-darkPurple !tw-text-h9Copy4 tw-flex tw-gap-[.79rem]  ~tw-pl-[0.75rem]/[1.75rem] tw-py-[0.75rem] tw-items-center tw-w-full tw-justify-between ${selectedClassName}`}
        >
          <p className="   leading-[1.225rem] tw-capitalize">{selected}</p>
          <DownTagSvg className="tw-size-[1.25rem]" />
          {/* <Image src={ArrowDownSvg} alt="arrow down" /> */}
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className=" tw-w-[var(--button-width)] tw-mt-[0.4rem] tw-z-[10000] tw-bg-white tw-border-2 tw-border-[#DFE0E5] tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md   tw-py-[1.313rem]"
      >
        {optionsArray?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 tw-text-black tw-text-center tw-text-h9Copy5 tw-leading-[1.225rem] tw-cursor-pointer"
          >
            {items}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default NewsRespSelect;
