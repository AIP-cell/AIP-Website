"use client";

import { Tab, TabList } from "@headlessui/react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DownTagSvg from "@/components/svg/DownTagSvg";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "@bprogress/next/app";

type Props = {
  tabArray: { tab: string; tabNo: number; key: string }[];
  textClassName?: string;
  listClassName?: string;
  listboxButtonClassName?: string;
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
};
const TabListAndRespSelect = ({
  tabArray,
  textClassName,
  listClassName,
  listboxButtonClassName,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const router = useRouter();

  return (
    <>
      <TabList
        className={`hidden lg:flex bg-[#F0F0F2] rounded-full w-fit p-[.25rem] ${listClassName}`}
      >
        {tabArray.map((items, i: number) => (
          <div key={i}>
            <Tab
              onClick={() => {
                const query = generatingSearchParam({
                  selected: items.tab,
                });
                router.push(`?${query.toString()}`, {
                  scroll: false,
                });
              }}
              className={` ~px-4/[2.4rem] md:flex justify-center w-full items-center py-[.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none ${textClassName}`}
            >
              {items.tab}
            </Tab>
          </div>
        ))}
      </TabList>

      <Listbox
        value={selectedIndex}
        onChange={setSelectedIndex}
        as="div"
        className="block lg:hidden w-full"
      >
        <ListboxButton
          as="div"
          className={`  bg-bgGray5 rounded-full flex items-center  w-full  pr-[1.25rem] ${listboxButtonClassName}`}
        >
          <div
            className={`flex gap-[.79rem] text-darkPurple text-h9Copy5 pl-[1.75rem] py-[1rem] items-center w-full justify-between `}
          >
            <p className="   leading-[1.4rem] ">
              {tabArray?.at(selectedIndex)?.tab}
            </p>
            <DownTagSvg className="size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" w-[var(--button-width)] mt-[0.4rem] z-[10000] bg-bgGray5 border-2  flex flex-col gap-[0.625rem] rounded-xl  outline-none"
        >
          {tabArray?.map(
            (items, i: number) =>
              items?.tab != tabArray?.at(selectedIndex)?.tab && (
                <ListboxOption
                  onClick={() => {
                    const query = generatingSearchParam({
                      selected: items?.tab,
                    });
                    router.push(`?${query.toString()}`, {
                      scroll: false,
                    });
                  }}
                  key={i}
                  value={i}
                  className="data-[focus]:bg-darkPurple py-[0.5rem] data-[focus]:text-white text-darkPurple text-center text-h9Copy5 leading-[1.225rem] cursor-pointer"
                >
                  {items?.tab}
                </ListboxOption>
              )
          )}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

export default TabListAndRespSelect;
