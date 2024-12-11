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
import DownTagSvg from "../svg/DownTagSvg";
type Props = {
  optionsArray?: any;
  ListboxButtonClassName?: string;
  selectedClassName?: string;
};
const CustomSelect = ({
  optionsArray,
  selectedClassName,
  ListboxButtonClassName,
}: Props) => {
  const [selected, setSelected] = useState(optionsArray?.at(0));
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={`border-2 border-[#DFE0E5] rounded-md flex items-center  w-full  pr-[1.25rem] ${ListboxButtonClassName}`}
      >
        <div
          className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] py-[0.75rem] items-center w-full justify-between ${selectedClassName}`}
        >
          <p className="   leading-[1.225rem] capitalize">
            {selected}
          </p>
          <DownTagSvg className="size-[1.25rem]"/>
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

export default CustomSelect;
