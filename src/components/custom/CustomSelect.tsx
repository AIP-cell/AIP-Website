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
type Props = {
  optionsArray?: any[];
};
const CustomSelect = ({ optionsArray }: Props) => {
  const [selected, setSelected] = useState(optionsArray?.at(0));
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton className="tw-border-2 tw-border-[#DFE0E5] tw-rounded-md tw-flex tw-items-center  tw-py-[0.75rem] tw-pl-[1.75rem] tw-pr-[1.25rem]">
        <div className="tw-flex tw-gap-[.79rem] tw-items-center">
          <p className="tw-text-gray80 tw-font-inter tw-text-h9Copy5 leading-[1.225rem] tw-capitalize">
            {selected}
          </p>
          <Image src={ArrowDownSvg} alt="arrow down" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className=" tw-mt-[0.4rem] tw-z-[10000] tw-bg-[#DFE0E5] tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md  tw-w-[8rem] tw-py-[1.313rem]"
      >
        {optionsArray?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 tw-text-black tw-text-center tw-cursor-pointer"
          >
            {items}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomSelect;
