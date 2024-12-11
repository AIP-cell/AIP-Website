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
        className={`!bg-[#E9E6F280] !border-none !rounded-full !pl-[1.75rem] !pr-[1.25rem] border-2 border-[#DFE0E5]  flex items-center  w-full   ${ListboxButtonClassName}`}
      >
        <div
          className={` !text-darkPurple !text-h9Copy4 flex gap-[.79rem]  ~pl-[0.75rem]/[1.75rem] py-[0.75rem] items-center w-full justify-between ${selectedClassName}`}
        >
          <p className="   leading-[1.225rem] capitalize">{selected}</p>
          <DownTagSvg className="size-[1.25rem]" />
          {/* <Image src={ArrowDownSvg} alt="arrow down" /> */}
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className=" w-[var(--button-width)] mt-[0.4rem] z-[10000] bg-white border-2 border-[#DFE0E5] flex flex-col gap-[1.625rem] rounded-md   py-[1.313rem]"
      >
        {optionsArray?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 text-black text-center text-h9Copy5 leading-[1.225rem] cursor-pointer"
          >
            {items}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default NewsRespSelect;
