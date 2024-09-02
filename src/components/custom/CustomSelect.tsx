"use client";
import { Fragment, useState } from "react";
import DownArrow from "@public/svg/downArrow.svg";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Select,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import cn from "@/utils/tailwind";

type Props = {
  options: any;
};
const CustomSelect = ({ options }: Props) => {
  // console.log("options::", options);
  const [selected, setSelected] = useState(options?.at(0));
  // const [isOpen, setIsOpen] = useState(false);
  // console.log("isOpen:::::",isOpen)
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton>
        <div className="tw-flex tw-gap-[0.5rem] tw-items-center">
          <p>{selected?.option}</p>
          <Image src={DownArrow} alt="down-arrow" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className=" tw-fixed tw-top-0  tw-ml-[5.6rem] tw-mt-[1rem] tw-z-[10000] tw-bg-purpleToBlue tw-flex tw-flex-col tw-gap-[1.625rem] tw-rounded-md tw-pl-[1.75rem] tw-w-[16.625rem] tw-py-[1.313rem]"
      >
        {options?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items}
            className="data-[focus]:bg-blue-100 tw-text-white tw-cursor-pointer"
          >
            <Link href={items?.link}>{items.option}</Link>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
    //   <div className="tw-relative">
    //     <button
    //       className="tw-flex tw-gap-[0.5rem] tw-items-center"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       {selected.option}
    //     </button>
    //     {isOpen && (
    //       <button
    //         className="tw-fixed tw-top-0 tw-inset-0 tw-h-full tw-w-full tw-bg-black tw-opacity-0 tw-cursor-default"
    //         onClick={() => setIsOpen(false)}
    //       />
    //     )}
    //   </div>
    //   {isOpen && (
    //     <div className="tw-absolute tw-top-[5rem] tw-z-[20000] tw-bg-purpleToBlue tw-flex tw-text-start tw-flex-col tw-gap-[1.625rem] tw-rounded-md tw-pl-[1.75rem] tw-w-[16.625rem] tw-py-[1.313rem]">
    //       {options?.map((items: any, i: number) => (
    //         <button
    //           onClick={()=>{
    //             setIsOpen(false)
    //           }}
    //           className="tw-text-start  tw-w-full tw-rounded-lg tw-text-white tw-block tw-px-4 tw-py-2 tw-cursor-pointer"
    //         >
    //           {items.option}
    //         </button>
    //       ))}
    //     </div>
    //   )}
  );
};

export default CustomSelect;
