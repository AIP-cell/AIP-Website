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
  // isOpen: boolean;
  // setIsOpen: (value: boolean) => void;
};
const CustomHeaderSelect = ({ items }: Props) => {
  // console.log("isOpen::::::", isOpen);
  // const [selected, setSelected] = useState(items.label);

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
    <Listbox as="div" className="w-full">
      <ListboxButton as="div" className={cn("w-full ")}>
        <ButtonAnimation className="w-full">
          <div className="flex flex-col ">
            <div className="text-white mb-[0.25rem] md:text-gray80 flex justify-between border-b-2 w-full md:w-auto border-[#B861B3] md:border-none gap-[0.5rem] items-center">
              <p
                className={cn(
                  "~py-[1.25rem]/0 text-h9Copy5 leading-[1.225rem]",
                  { "font-bold": isPathname == items.id }
                )}
              >
                {items.label}
              </p>
              <DownTagSvg className="~w-[1.25rem]/[0.6rem] ~h-[1.25rem]/[0.4rem]" />
            </div>
            {isPathname == items.id && (
              <div className="hidden md:block h-[0.25rem]  w-full rounded-full bg-purple40"></div>
            )}
          </div>
        </ButtonAnimation>
      </ListboxButton>

      <ListboxOptions
        transition
        anchor="bottom"
        className={cn(
          "ml-[5.6rem] no-scrollbar mt-[1rem] z-[10000] bg-purpleToBlue flex flex-col rounded-2xl w-[16.625rem] p-[0.5rem]"
        )}
      >
        {options?.map((items: any, i: number) => (
          <ListboxOption
            key={i}
            value={items.option}
            className="text-white cursor-pointer"
          >
            <ButtonAnimation
              onClick={() => {
                router.push(`${items.link}`);
              }}
              className={cn("w-full rounded-2xl hover:bg-[#2B092A4D] flex", {
                "!bg-[#2B092A4D]": pathname === items.link,
              })}
            >
              <div
                className={cn(
                  "hover:font-playFairItalic text-left pl-[1.25rem] transition-all duration-150 py-[0.8rem] w-full",
                  { "!font-playFairItalic": pathname === items.link }
                )}
              >
                {items.option}
              </div>
            </ButtonAnimation>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CustomHeaderSelect;
