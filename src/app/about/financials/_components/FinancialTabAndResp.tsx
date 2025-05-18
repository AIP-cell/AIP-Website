"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import DownTagSvg from "@/components/svg/DownTagSvg";
import { TReports } from "@/api/type";
import cn from "@/utils/tailwind";
import { useRouter } from "@bprogress/next/app";

type Props = {
  financialArray: TReports[];
  listClassName?: string;
  listboxButtonClassName?: string;
  currentYear?: string;
};
const FinancialTabAndResp = ({
  financialArray,
  currentYear,
  listClassName,
  listboxButtonClassName,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`hidden lg:flex bg-[#F0F0F2] rounded-full w-fit p-[.25rem] ${listClassName}`}
      >
        {financialArray.map((items, i: number) => (
          <div key={i}>
            <div
              onClick={() => {
                router.push(`/about/financials?year=${items.year}`, {
                  scroll: false,
                });
              }}
              className={cn(
                "~px-4/[2.4rem] md:flex justify-center cursor-pointer w-full items-center py-[.75rem] text-h9Copy5 leading-[1.22rem] font-inter  ",
                {
                  "bg-darkPurple text-white rounded-full outline-none":
                    items?.year === currentYear,
                }
              )}
            >
              {items?.year}
            </div>
          </div>
        ))}
      </div>

      <Listbox
        value={currentYear}
        as="div"
        className="block lg:hidden w-full px-[1.25rem]"
      >
        <ListboxButton
          as="div"
          className={`  bg-bgGray5 rounded-full flex items-center  w-full  pr-[1.25rem] ${listboxButtonClassName}`}
        >
          <div
            className={`flex gap-[.79rem] text-darkPurple text-h9Copy5 pl-[1.75rem] py-[1rem] items-center w-full justify-between `}
          >
            <p className=" leading-[1.4rem] ">{currentYear}</p>
            <DownTagSvg className="size-[1.25rem]" />
          </div>
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className=" w-[var(--button-width)] mt-[0.4rem] z-[10000] bg-bgGray5 border-2  flex flex-col rounded-xl outline-none"
        >
          {financialArray?.map(
            (items, i: number) =>
              items?.year != currentYear && (
                <ListboxOption
                  onClick={() => {
                    router.push(`/about/financials?year=${items.year}`, {
                      scroll: false,
                    });
                  }}
                  key={i}
                  value={items.year}
                  className="data-[focus]:bg-darkPurple data-[focus]:text-white py-[0.5rem] text-darkPurple text-center text-h9Copy5 leading-[1.225rem] cursor-pointer"
                >
                  {items?.year}
                </ListboxOption>
              )
          )}
        </ListboxOptions>
      </Listbox>
    </>
  );
};

export default FinancialTabAndResp;
