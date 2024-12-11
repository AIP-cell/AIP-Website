import React from "react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";
import Link from "next/link";
import cn from "@/utils/tailwind";

const CoreFoundersTab = () => {
  return (
    <div className=" w-full hidden md:flex justify-center ~pt-8/[4.75rem] ">
      <div
        // defaultIndex={active}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex bg-[#F0F0F2] p-1 rounded-full w-fit">
          <div className="~px-[1rem]/[2.5rem] py-[0.75rem] bg-darkPurple text-white rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none">
            <Link href="/people-of-aip/core-founders">Core Founders</Link>
          </div>
          <div
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/founders">Founders</Link>
          </div>
          <div
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/our-advisory-board/slug">
              Advisory Board
            </Link>
          </div>
          <div
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/team-AIP">Team AIP</Link>
          </div>
          <div
            className={cn(
              "~px-[1.5rem]/[2.5rem] py-[0.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9Copy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            )}
          >
            <Link href="/people-of-aip/experts">Experts</Link>
          </div>
        </div>
        <OurCoreFoundersContent />

        {/* <TabPanels className="w-full">
          <TabPanel>
            <OurCoreFoundersContent />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>
            <TeamAip />
          </TabPanel>
          <TabPanel>
            <Experts />
          </TabPanel>
        </TabPanels> */}
      </div>
    </div>
  );
};

export default CoreFoundersTab;
