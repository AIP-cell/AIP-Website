import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export default function CustomGraySelect({
  selected,
  data,
  setSelected,
}: {
  selected: { id: number; title: string };
  data: { id: number; title: string }[];
  setSelected: (value: any) => void;
}) {
  return (
    <div className="tw-mx-auto  tw-w-full ">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "tw-relative tw-block tw-w-full tw-rounded-full tw-bg-[#F0F0F2] tw-py-1.5 tw-pr-8 tw-pl-3 tw-text-left tw-text-h9Copy4 tw-text-darkPurple",
            "focus:tw-outline-none data-[focus]:tw-outline-2 data-[focus]:-tw-outline-offset-2 data-[focus]:tw-outline-white/25"
          )}
        >
          {selected.title}
          <ChevronDownIcon
            className="tw-group tw-pointer-events-none tw-absolute tw-top-2.5 tw-right-2.5 tw-size-4 tw-fill-darkPurple"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          tw-transition
          className={clsx(
            "w-[var(--button-width)] tw-rounded-3xl tw-border tw-border-white/5 tw-bg-white/5 tw-p-1 [--anchor-gap:var(--spacing-1)] focus:tw-outline-none  tw-w-full",
            "tw-transition tw-duration-100 tw-ease-in data-[leave]:data-[closed]:tw-opacity-0"
          )}
        >
          {data.map((item) => (
            <ListboxOption
              key={item.title}
              value={item}
              className="tw-group tw-flex tw-cursor-default tw-items-center tw-gap-2  tw-py-1.5 tw-px-3 tw-select-none tw-bg-gray-200 tw-text-black data-[focus]:tw-bg-gray-400 "
            >
              <CheckIcon className="tw-invisible tw-size-4 tw-fill-darkPurple group-data-[selected]:tw-visible" />
              <div className="tw-text-h9Copy4 tw-text-black">{item.title}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
