"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import FinancialSm from "./FinancialSm";
import TabListAndRespSelect from "@/app/resource-center/_components/TabListAndRespSelect";
import { TReports } from "@/api/type";
import Link from "next/link";
import { StorageUrl } from "@/utils/BaseUrl";

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
  urlSearchParams: string;
};
const FinancialTabs = ({ filterDataByYear, urlSearchParams }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <>
      {/* <FinancialSm /> */}
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col justify-center items-center"
      >
        <TabListAndRespSelect
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          tabArray={yearsArray}
          listClassName=""
          textClassName="!px-[1.394rem]"
        />
        <div className=" w-full ~pt-[2.5rem]/[5rem]">
          <div className="flex flex-col gap-[3rem] ~px-[1.25rem]/[14.375rem] ~pb-[3.875rem]/[7.5rem]">
            <p className="text-center font-playFair ~text-h4a/h2 ~leading-[2.113rem]/[2.6rem] tracking-[-0.02rem] text-gray80">
              FY {urlSearchParams ? urlSearchParams : "2024-25"}
            </p>
            <div>
              {filterDataByYear?.financialReports.map((data, index) => (
                <TabPanel
                  key={index}
                  className="flex justify-between text-textPurple py-[2.063rem] w-full px-[1.25rem] border-b-2 border-footerGray "
                >
                  <p className="leading-[1.4rem] text-gray80">{data.name}</p>
                  <Link
                    href={StorageUrl + data.report}
                    target="_blank"
                    download
                  >
                    <ButtonAnimation className="">
                      <DownloadFileSvg className="size-[2rem]" />
                    </ButtonAnimation>
                  </Link>
                </TabPanel>
              ))}
            </div>
            <div className="flex w-full justify-end">
              <Link href="">
                <ButtonAnimation className=" flex gap-2 0 rounded-3xl items-center text-darkPurple hover:text-white bg-white hover:bg-darkPurple py-[0.75rem] px-[1.75rem] border-2 bottom-2 border-darkPurple w-fit">
                  <p className="text-h9Copy5 font-medium leading-[1.225rem]  ">
                    Download All
                  </p>
                  <DownloadFileSvg className="size-[1.25rem]" />
                </ButtonAnimation>
              </Link>
            </div>
          </div>
          {/* <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 4</TabPanel> */}
        </div>
      </TabGroup>
    </>
  );
};

export default FinancialTabs;
