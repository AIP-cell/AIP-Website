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
  selected: string;
  listArray: { name: string; link: string }[];
  //   setSelected: any;
}) {
  const router = useRouter();
  return (
    <div className=" flex lg:hidden  justify-center ~pt-[4.3rem]/[4.75rem] ">
      <div className=" mx-auto w-full px-[1.25rem]">
        <Listbox value={selected}>
          <ListboxButton
            className={clsx(
              "relative  flex items-center justify-between w-full rounded-full bg-[#F0F0F2] py-[1rem] pr-[1.25rem] pl-[1.75rem] text-left text-h9Copy4 text-darkPurple",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          >
            {selected}
            <DownTagSvg className="~w-[1.25rem]/[0.6rem] ~h-[1.25rem]/[0.4rem]" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            className={clsx(
              // w-[var(--button-width)]
              " rounded-3xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none  w-full",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
            )}
          >
            {listArray.map(
              (item) =>
                selected != item.name && (
                  <ListboxOption
                    key={item.name}
                    value={item.name}
                    className="group flex cursor-default items-center gap-2  py-1.5 px-3 select-none bg-gray-200 text-black data-[focus]:bg-gray-400 "
                  >
                    <div
                      onClick={() => {
                        router.push(`${item.link}`);
                      }}
                      className="text-h9Copy4 text-black"
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
