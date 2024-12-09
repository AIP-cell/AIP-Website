"use client";
import DownTagSvg from "@/components/svg/DownTagSvg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PeopleOfAipRespTab({
  selected,
  listArray,
}: //   setSelected,
{
  selected: any;
  listArray: { name: string; link: string }[];
  //   setSelected: any;
}) {
  const router = useRouter();
  return (
    <div className=" tw-flex lg:tw-hidden  tw-justify-center ~tw-pt-[4.3rem]/[4.75rem] ">
      <div className=" tw-mx-auto tw-w-full tw-px-[1.25rem]">
        <Listbox value={selected}>
          <ListboxButton
            className={clsx(
              "tw-relative  tw-flex tw-items-center tw-justify-between tw-w-full tw-rounded-full tw-bg-[#F0F0F2] tw-py-[1rem] tw-pr-[1.25rem] tw-pl-[1.75rem] tw-text-left tw-text-h9Copy4 tw-text-darkPurple",
              "focus:tw-outline-none data-[focus]:tw-outline-2 data-[focus]:-tw-outline-offset-2 data-[focus]:tw-outline-white/25"
            )}
          >
            {selected}
            <DownTagSvg className="~tw-w-[1.25rem]/[0.6rem] ~tw-h-[1.25rem]/[0.4rem]" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className={clsx(
              "w-[var(--button-width)] tw-rounded-3xl tw-border tw-border-white/5 tw-bg-white/5 tw-p-1 [--anchor-gap:var(--spacing-1)] focus:tw-outline-none  tw-w-full",
              "tw-transition tw-duration-100 tw-ease-in data-[leave]:data-[closed]:tw-opacity-0"
            )}
          >
            {listArray.map(
              (item) =>
                selected != item.name && (
                  <ListboxOption
                    key={item.name}
                    value={item.name}
                    className="tw-group tw-flex tw-cursor-default tw-items-center tw-gap-2  tw-py-1.5 tw-px-3 tw-select-none tw-bg-gray-200 tw-text-black data-[focus]:tw-bg-gray-400 "
                  >
                    <div
                      onClick={() => {
                        router.push(`${item.link}`);
                      }}
                      className="tw-text-h9Copy4 tw-text-black"
                    >
                      {item.name}
                    </div>
                  </ListboxOption>
                )
            )}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  );
}
