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
import { usePathname, useRouter } from "next/navigation";
import cn from "@/utils/tailwind";

type Props = {
  items: any;
};
const CustomHeaderSelect = ({ items }: Props) => {
  const [selected, setSelected] = useState(items.label);
  const [isOpen, setIsOpen] = useState(true);
  // const [isPathname, setIsPathname] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  let isPathname = "";
  if (pathname.startsWith("/about")) {
    isPathname = "about";
  } else if (pathname.startsWith("/people-of-aip")) {
    isPathname = "people-of-aip";
  } else if (pathname.startsWith("/our-work")) {
    isPathname = "our-work";
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
      value={selected}
      onChange={setSelected}
      as="div"
      className="tw-w-full"
    >
      <ButtonAnimation
        // onClick={() => {
        //   setIsOpen(true);
        // }}
        className="tw-w-full"
      >
        <ListboxButton as="div" className={cn("tw-w-full ")}>
          <div className="tw-flex tw-flex-col ">
            <div className="tw-text-white tw-mb-[0.25rem] md:tw-text-gray80 tw-flex tw-justify-between tw-border-b-2 tw-w-full md:tw-w-auto tw-border-[#B861B3] md:tw-border-none tw-gap-[0.5rem] tw-items-center">
              <p
                className={cn(
                  "~tw-py-[1.25rem]/0 tw-text-h9Copy5 tw-leading-[1.225rem]",
                  { "tw-font-bold": isPathname == items.id }
                )}
              >
                {items.label}
              </p>
              <DownTagSvg className="~tw-w-[1.25rem]/[0.6rem] ~tw-h-[1.25rem]/[0.4rem]" />
            </div>
            {isPathname == items.id && (
              <div className="tw-hidden md:tw-block tw-h-[0.25rem]  tw-w-full tw-rounded-full tw-bg-purple40"></div>
            )}
          </div>
        </ListboxButton>
      </ButtonAnimation>
      {isOpen && (
        <ListboxOptions
          transition
          anchor="bottom"
          className={cn(
            "tw-ml-[5.6rem] no-scrollbar tw-mt-[1rem] tw-z-[10000] tw-bg-purpleToBlue tw-flex tw-flex-col tw-rounded-2xl tw-w-[16.625rem] tw-p-[0.5rem]"
          )}
        >
          {options?.map((items: any, i: number) => (
            <ListboxOption
              key={i}
              value={items.option}
              className="data-[focus]:bg-blue-100 tw-text-white tw-cursor-pointer"
            >
              <ButtonAnimation
                className={cn(
                  "tw-w-full tw-rounded-2xl hover:tw-bg-[#2B092A4D] tw-flex",
                  { "!tw-bg-[#2B092A4D]": pathname === items.link }
                )}
              >
                <div
                  onClick={() => {
                    router.push(`${items.link}`);
                  }}
                  // onClick={() => {
                  //   setIsOpen(!isOpen);
                  // }}
                  // href={items?.link}
                  className={cn(
                    "hover:tw-font-playFairItalic tw-text-left tw-pl-[1.25rem] tw-transition-all tw-duration-150 tw-py-[0.8rem] tw-w-full",
                    { "!tw-font-playFairItalic": pathname === items.link }
                  )}
                >
                  {items.option}
                </div>
              </ButtonAnimation>
            </ListboxOption>
          ))}
        </ListboxOptions>
      )}
    </Listbox>
  );
};

export default CustomHeaderSelect;
