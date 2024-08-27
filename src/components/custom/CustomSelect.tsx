"use client";
import { useState } from "react";
import DownArrow from "@public/svg/downArrow.svg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";

type Props = {
  options: any;
};
const CustomSelect = ({ options }: Props) => {
  // console.log("options::", options);
  const [selected, setSelected] = useState(options?.at(0));
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton>
        <div className="tw-flex tw-gap-[0.5rem] tw-items-center">
          <p>{selected?.option}</p>
          <Image src={DownArrow} alt="down-arrow" />
        </div>
      </ListboxButton>
      <ListboxOptions anchor="bottom" className="tw-ml-[5.6rem] tw-mt-[1rem] tw-z-[2000] tw-bg-purpleToBlue tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md tw-pl-[1.75rem] tw-w-[16.625rem] tw-py-[1.313rem]">
        {options?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 tw-text-white tw-cursor-pointer"
          >
            {items.option}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomSelect;
