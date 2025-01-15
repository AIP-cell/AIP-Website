"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import DownTagSvg from "../svg/DownTagSvg";
import { useRouter } from "next-nprogress-bar";
// import { useRouter } from "next/navigation";

export default function CustomGraySelect({
  selected,
  data,
  setSelected,
  mainClassName,
}: {
  selected: any;
  data: { tabNo: number; key: string; name: string }[];
  mainClassName?: string;
  setSelected: (value: any) => void;
}) {
  const router = useRouter();
  return (
    <div className={`mx-auto w-full px-[1.25rem] ${mainClassName}`}>
      <Listbox value={data.at(selected)} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative  flex items-center justify-between w-full rounded-full bg-[#F0F0F2] py-[1rem] pr-[1.25rem] pl-[1.75rem] text-left text-h9Copy4 text-darkPurple",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {data.at(selected)?.name}
          <DownTagSvg className="~w-[1.25rem]/[0.6rem] ~h-[1.25rem]/[0.4rem]" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className={clsx(
            "w-[var(--button-width)] rounded-3xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {data.map((item, i) => (
            <ListboxOption
              key={i}
              value={item.name}
              className="group flex cursor-default items-center gap-2  py-1.5 px-3 select-none bg-gray-200 text-black data-[focus]:bg-gray-400"
            >
              <div
               onClick={() => router.push(`?category=${item.name}`, { scroll: false })}
                className="text-h9Copy4 text-black"
              >
                {item.name}
              </div>
              
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
