"use client";
import cn from "@/utils/tailwind";
import React from "react";
import ResourcesSm from "./ResourcesSm";
import { useRouter } from "@bprogress/next/app";

type Props = {
  currentTab?: string;
  tabClassName?: string;
  mainClassName?: string;
  tabListClassName?: string;
  resources?: string;
  tabList: { slug: string; name: string; link: string }[];
};
const ResourcesTabAndSelect = ({
  currentTab,
  resources,
  tabList,
  tabListClassName,
  tabClassName,
  mainClassName,
}: Props) => {
  const router = useRouter();
  return (
    <>
      <div
        className={cn(
          "z-[200] w-full hidden lg:flex justify-center items-center ~pt-0/[4.75rem] ",
          mainClassName
        )}
      >
        <div className="flex w-full justify-center">
          <div
            className={cn(
              "z-[200] flex bg-[#F0F0F2] p-1 rounded-full w-fit",
              tabListClassName
            )}
          >
            {tabList.map((items, i) => (
              <div
                key={i}
                onClick={() =>
                  router.push(`/resource-center/${resources}/${items.slug}`, {
                    scroll: false,
                  })
                }
                className={cn(
                  "~px-[1.5rem]/[2.5rem] py-[0.75rem] text-center cursor-pointer flex justify-center items-center text-h9Copy5 leading-[1.22rem] font-inter ",
                  tabClassName,
                  {
                    "!bg-darkPurple !text-white !outline-none !rounded-full":
                      items.name === currentTab,
                  }
                )}
              >
                {items.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ResourcesSm selected={currentTab} listArray={tabList} />
    </>
  );
};

export default ResourcesTabAndSelect;
