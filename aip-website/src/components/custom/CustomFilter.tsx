"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import React, { useState } from "react";
import FilterDownArrowSvg from "../svg/FilterDownArrowSvg";
import { ApplyFilterResp } from "@/app/resource-center/_components/ApplyFilterResp";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "@bprogress/next/app";
import CrossSvg from "../svg/CrossSvg";
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  optionsArray: any[];
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: Record<string, any>;
  filterKey: string;
};
const CustomFilter = ({
  searchParams,
  type,
  optionsArray,
  filterKey,
}: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    type === "domain"
      ? searchParams.domain || ""
      : type === "c_type"
      ? searchParams.c_type || ""
      : type === "o_type"
      ? searchParams.o_type || ""
      : type === "p_id"
      ? searchParams.p_id || ""
      : ""
  );
  return (
    <>
      <div className="md:hidden block">
        <ApplyFilterResp
          type={type}
          optionsArray={optionsArray}
          filterKey={filterKey}
          searchParams={searchParams}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div className="hidden md:block">
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton className={`border-2 border-[#DFE0E5] rounded-lg`}>
            <div
              className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] pr-[1.25rem] py-[0.75rem] items-center w-full justify-between `}
            >
              <p className="text-h9Copy5 leading-[1.225rem] capitalize">
                {type === "p_id"
                  ? "Partner Type"
                  : !selected
                  ? type === "domain"
                    ? "Domain"
                    : type === "c_type"
                    ? "Type Of Content"
                    : type === "o_type"
                    ? "Organization Type"
                    : type
                  : selected}
              </p>

              <div className="flex gap-[0.5rem] items-center">
                {selected && (
                  <CrossSvg
                    role="button"
                    className="size-[0.8rem] cursor-pointer"
                    onClick={() => {
                      setSelected("");
                      const query = generatingSearchParam({
                        ...searchParams,
                        [filterKey]: "",
                      });
                      router.push(`?${query.toString()}`, {
                        scroll: false,
                      });
                    }}
                  />
                )}
                <FilterDownArrowSvg className="size-[1.25rem]" />
              </div>
            </div>
          </ListboxButton>
          <ListboxOptions
            data-lenis-prevent
            anchor="bottom"
            className="hidden  w-[10.25rem] !max-h-[14.5rem] no-scrollbar mt-[0.4rem] z-[10000] bg-white border-2 border-[#DFE0E5] md:flex flex-col gap-[0.75rem] rounded-md   px-[0.863rem] py-[0.8rem]"
          >
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {optionsArray?.map((items: any, i: number) => {
              return (
                <ListboxOption
                  key={i}
                  value={items._id ? items._id : items}
                  onClick={() => {
                    const query = generatingSearchParam({
                      ...searchParams,
                      [filterKey]: items._id ? items._id : items,
                    });
                    router.push(`?${query.toString()}`, {
                      scroll: false,
                    });
                  }}
                  className="group flex gap-[0.75rem] text-start items-start   rounded-md border-gray10  no-scrollbar text-black text-h9Copy5 leading-[1.225rem] cursor-pointer"
                >
                  <div className="size-[0.833rem] shrink-0 border-2 border-gray80 rounded-sm flex justify-center items-center mt-1">
                    <div className="size-[0.45rem] bg-gray80 rounded-md invisible group-data-[selected]:visible"></div>
                  </div>
                  <p>{items.name ? items.name : items}</p>
                </ListboxOption>
              );
            })}
          </ListboxOptions>
        </Listbox>
      </div>
    </>
  );
};

export default CustomFilter;
