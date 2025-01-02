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
import { ApplyFilterResp } from "@/app/resource-center/_components/ApplyFilterResp";
import { useRouter, useSearchParams } from "next/navigation";
import { generatingSearchParam } from "@/utils/UrlHelper";
type Props = {
  optionsArray: any[];
  type: string;
  selected?: string;
  searchParams: Record<string, any>;
  setSelected?: (value: string) => void;
  category?: string;
  queryParamValues?: any;
  filterKey: string;
};
const CustomFilter = ({
  queryParamValues,
  searchParams,
  type,
  optionsArray,
  selected,
  setSelected,
  category,
  filterKey,
}: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
//  console.log("isOpen:::::",isOpen)
  // const domain = searchParams.get('domain');
  return (
    <>
      {isOpen && (
        <ApplyFilterResp
          type={type}
          optionsArray={optionsArray}
          filterKey={filterKey}
          searchParams={searchParams}
          // setSelected={setSelected}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
      <div onClick={() => setIsOpen(!isOpen)}>
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton className={`border-2 border-[#DFE0E5] rounded-lg`}>
            <div
              className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] pr-[1.25rem] py-[0.75rem] items-center w-full justify-between `}
            >
              <p className="text-h9Copy5 leading-[1.225rem] capitalize">
                {type}
              </p>
              <FilterDownArrowSvg className="size-[1.25rem]" />
            </div>
          </ListboxButton>
          {/* w-[var(--button-width)] */}
          <ListboxOptions
            anchor="bottom"
            className="hidden  w-[10.25rem] !max-h-[14.5rem] no-scrollbar mt-[0.4rem] z-[10000] bg-white border-2 border-[#DFE0E5] md:flex flex-col gap-[0.75rem] rounded-md   px-[0.863rem] py-[0.8rem]"
          >
            {optionsArray?.map((items: any, i: number) => (
              <ListboxOption
                key={i}
                value={items}
                onClick={() => {
                  const query = generatingSearchParam({
                    // category,
                    ...searchParams,
                    [filterKey]: items,
                  });
                  router.push(`?${query.toString()}`, {
                    scroll: false,
                  });
                }}
                className="group flex gap-[0.75rem] text-start items-center  rounded-md border-gray10 data-[focus]:bg-blue-100 no-scrollbar text-black text-h9Copy5 leading-[1.225rem] cursor-pointer"
              >
                <div className="size-[0.833rem] border-2 border-gray80 rounded-sm flex justify-center items-center">
                  <div className="size-[0.45rem] bg-gray80 rounded-md invisible group-data-[selected]:visible"></div>
                </div>
                <p>{items}</p>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </>
  );
};

export default CustomFilter;
