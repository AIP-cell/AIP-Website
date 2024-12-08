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
import FilterDownArrowSvg from "../svg/FilterDownArrowSvg";
type Props = {
  optionsArray?: any[];
  type: string;
};
const CustomFilter = ({ type, optionsArray }: Props) => {
  const [selected, setSelected] = useState(optionsArray!.at(0));
  // console.log("selected::", selected);
  return (
    // <div>
    //   <div className="tw-border-2 tw-border-[#DFE0E5] tw-rounded-lg ">
    //     <div className="tw-flex tw-gap-[.79rem] tw-text-gray80 tw-text-h9Copy5 ~tw-pl-[0.75rem]/[1.75rem]  tw-pr-[1.25rem] tw-py-[0.75rem] tw-items-center tw-w-full tw-justify-between">
    //       <p className=" tw-text-h9Copy5 tw-leading-[1.225rem] tw-capitalize">
    //         {type}
    //       </p>
    //       <FilterDownArrowSvg className="tw-size-[1.25rem]" />
    //     </div>
    //   </div>
    // </div>
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={`tw-border-2 tw-border-[#DFE0E5] tw-rounded-lg`}
      >
        <div
          className={`tw-flex tw-gap-[.79rem] tw-text-gray80 tw-text-h9Copy5 ~tw-pl-[0.75rem]/[1.75rem] tw-pr-[1.25rem] tw-py-[0.75rem] tw-items-center tw-w-full tw-justify-between `}
        >
          <p className="   tw-text-h9Copy5 tw-leading-[1.225rem] tw-capitalize">
            {type}
          </p>

          <FilterDownArrowSvg className="tw-size-[1.25rem]" />
        </div>
      </ListboxButton>
      {/* tw-w-[var(--button-width)] */}
      <ListboxOptions
        anchor="bottom"
        className=" tw-w-[10.25rem] !tw-max-h-[14.5rem] no-scrollbar tw-mt-[0.4rem] tw-z-[10000] tw-bg-white tw-border-2 tw-border-[#DFE0E5] tw-flex tw-flex-col tw-gap-[0.75rem] tw-rounded-md   tw-px-[0.863rem] tw-py-[0.8rem]"
      >
        {optionsArray?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="tw-group tw-flex tw-gap-[0.75rem] tw-text-start tw-items-center  tw-rounded-md tw-border-gray10 data-[focus]:bg-blue-100 no-scrollbar tw-text-black tw-text-h9Copy5 tw-leading-[1.225rem] tw-cursor-pointer"
          >
            <div className="tw-size-[0.833rem] tw-border-2 tw-border-gray80 tw-rounded-sm tw-flex tw-justify-center tw-items-center">
              <div className="tw-size-[0.45rem] tw-bg-gray80 tw-rounded-md tw-invisible group-data-[selected]:tw-visible"></div>
            </div>
            <p>{items}</p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomFilter;
