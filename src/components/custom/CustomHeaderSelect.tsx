"use client";
import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import Link from "next/link";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import DownTagSvg from "../svg/DownTagSvg";
import { usePathname } from "next/navigation";

type Props = {
  items: any;
};
const CustomHeaderSelect = ({ items }: Props) => {
  const [selected, setSelected] = useState(items.label);
  // const [isPathname, setIsPathname] = useState(false);

  const pathname = usePathname();
  let isPathname = "";
  if (pathname.startsWith("/about")) {
    isPathname = "about";
  } else if (pathname.startsWith("/people-of-aip")) {
    isPathname = "people-of-aip";
  } else if (pathname.startsWith("/products-and-services")) {
    isPathname = "products-and-services";
  } else if (pathname.startsWith("/resource-center")) {
    isPathname = "resource-center";
  } else if (pathname.startsWith("/careers")) {
    isPathname = "careers";
  } else if (pathname.startsWith("/contact")) {
    isPathname = "contact";
  }
  const options = items.options;
  return (
    <Listbox
      value={selected?.option}
      onChange={setSelected}
      as="div"
      className="tw-w-full"
    >
      <ButtonAnimation className="tw-w-full">
        <ListboxButton as="div" className="tw-w-full ">
          <div className="tw-flex tw-flex-col tw-gap-[0.25rem]">
            <div className="tw-text-white md:tw-text-gray80 tw-flex tw-justify-between tw-border-b-2 tw-w-full md:tw-w-auto tw-border-[#B861B3] md:tw-border-none tw-gap-[0.5rem] tw-items-center">
              <p className="~tw-py-[1.25rem]/0 ">{selected}</p>
              <DownTagSvg className="~tw-w-[1.25rem]/[0.55rem] ~tw-h-[1.25rem]/[0.3rem]" />
            </div>
            {isPathname == items.id && (
              <div className="tw-h-[0.25rem] tw-w-full tw-rounded-full tw-bg-purple40"></div>
            )}
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
