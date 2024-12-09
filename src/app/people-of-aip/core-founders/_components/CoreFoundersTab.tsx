import React from "react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";
import Link from "next/link";
import cn from "@/utils/tailwind";

const CoreFoundersTab = () => {
  return (
    <div className=" tw-w-full tw-hidden md:tw-flex tw-justify-center ~tw-pt-8/[4.75rem] ">
      <div
        // defaultIndex={active}
        className="tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center"
      >
        <div className="tw-flex tw-bg-[#F0F0F2] tw-p-1 tw-rounded-full tw-w-fit">
          <div className="~tw-px-[1rem]/[2.5rem] tw-py-[0.75rem] tw-bg-darkPurple tw-text-white tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            <Link href="/people-of-aip/core-founders">Core Founders</Link>
          </div>
          <div
            className={cn(
              "~tw-px-[1.5rem]/[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/founders">Founders</Link>
          </div>
          <div
            className={cn(
              "~tw-px-[1.5rem]/[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/our-advisory-board/slug">
              Advisory Board
            </Link>
          </div>
          <div
            className={cn(
              "~tw-px-[1.5rem]/[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/team-AIP">Team AIP</Link>
          </div>
          <div
            className={cn(
              "~tw-px-[1.5rem]/[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            )}
          >
            <Link href="/people-of-aip/experts">Experts</Link>
          </div>
        </div>
        <OurCoreFoundersContent />

        {/* <TabPanels className="tw-w-full">
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
