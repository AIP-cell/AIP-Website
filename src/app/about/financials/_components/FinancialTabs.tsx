"use client";
import React, { useState } from "react";
import Download from "@public/svg/download.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import FinancialSm from "./FinancialSm";
import TabListAndRespSelect from "@/app/resource-center/_components/TabListAndRespSelect";
import { TFinancialReports, TReports } from "@/api/type";

const datas = [
  {
    title: "MGT-7 EXTRACT of ANNUAL RETURN, COMPANIES ACT 2013",
  },
  {
    title: "NOTICE OF FIRST ANNUAL GENERAL BODY MEETING FY 2023-24",
  },
  {
    title: "FINANCIAL STATEMENTS FY 2023-24",
  },
  {
    title: "ANNUAL REPORT 2023-2024 ",
  },
];
const yearsArray = [
  { tab: "2024-25" },
  { tab: "2023-24" },
  { tab: "2022-23" },
  { tab: "2021-22" },
  { tab: "2020-21" },
  { tab: "2019-20" },
  { tab: "2019-20" },
  { tab: "2018-19" },
  { tab: "2017-18" },
  { tab: "2016-17" },
  { tab: "2015-16" },
];
type Props = {
  filterDataByYear: TReports | undefined;
};
const FinancialTabs = ({filterDataByYear}:Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <FinancialSm />
      <TabGroup className="hidden md:flex flex-col justify-center items-center">
        {/* <TabList className="flex bg-[#F0F0F2]  rounded-full p-[.25rem]">
          {yearsArray.map((year, i) => (
            <Tab
              key={i}
              className="px-[1.394rem] py-[.75rem] data-[selected]:bg-darkPurple data-[selected]:text-white data-[selected]:rounded-full text-h9BodyCopy5 leading-[1.22rem] font-inter data-[selected]:outline-none"
            >
              {year}
            </Tab>
          ))}
        </TabList> */}
        <TabListAndRespSelect
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          tabArray={yearsArray}
          listClassName=""
          textClassName="!px-[1.394rem]"
        />
        <TabPanels className=" w-full pt-[5rem]">
          <TabPanel className="flex flex-col gap-[3rem] px-[14.375rem] pb-[7.5rem]">
            <p className="text-center font-playFair text-h2 leading-[2.6rem] tracking-[-0.02rem] text-gray80">
              FY 2024-25
            </p>
            <div>
              {datas.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between text-textPurple py-[2.063rem] w-full px-[1.25rem] border-b-2 border-footerGray "
                >
                  <p className="leading-[1.4rem] text-gray80">{item.title}</p>
                  <DownloadFileSvg className="size-[2rem]" />
                </div>
              ))}
            </div>
            <div className="flex w-full justify-end">
              <ButtonAnimation className=" flex gap-2 0 rounded-3xl items-center text-darkPurple hover:text-white bg-white hover:bg-darkPurple py-[0.75rem] px-[1.75rem] border-2 bottom-2 border-darkPurple w-fit">
                <p className="text-h9Copy5 font-medium leading-[1.225rem]  ">
                  Download All
                </p>
                <DownloadFileSvg className="size-[1.25rem]" />
              </ButtonAnimation>
            </div>
          </TabPanel>

          <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 4</TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default FinancialTabs;
