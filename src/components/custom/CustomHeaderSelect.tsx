"use client";
import { Fragment, useState } from "react";
import DownArrow from "@public/svg/downArrow.svg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonAnimation } from "../animations/ButtonAnimation";

type Props = {
  options: any;
};
const CustomHeaderSelect = ({ options }: Props) => {
  const [selected, setSelected] = useState(options?.at(0));

  return (
    <Listbox value={selected?.option} onChange={setSelected} as="div" className="tw-w-full">
      <ButtonAnimation className="tw-w-full">
        <ListboxButton as="div" className="tw-w-full ">
          <div className="tw-flex tw-justify-between tw-border-b-2 tw-w-full md:tw-w-auto tw-border-[#B861B3] md:tw-border-none tw-gap-[0.5rem] tw-items-center">
            <p className="~tw-py-[1.25rem]/0 ">{selected?.option}</p>
            <Image src={DownArrow} alt="down-arrow" />
          </div>
        </ListboxButton>
      </ButtonAnimation>
      <ListboxOptions
        // transition
        anchor="bottom"
        className="tw-ml-[5.6rem] tw-mt-[1rem] tw-z-[10000] tw-bg-purpleToBlue tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md tw-pl-[1.75rem] tw-w-[16.625rem] tw-py-[1.313rem]"
      >
        {options?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 tw-text-white tw-cursor-pointer"
          >
            <ButtonAnimation>
              <Link href={items?.link}>{items.option}</Link>
            </ButtonAnimation>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomHeaderSelect;
