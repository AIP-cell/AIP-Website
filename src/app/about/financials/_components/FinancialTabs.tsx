import React from "react";
import Download from "@public/svg/download.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import FinancialSm from "./FinancialSm";

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

const FinancialTabs = () => {
  return (
    <>
      <FinancialSm />
      <TabGroup className="tw-hidden md:tw-flex tw-flex-col tw-justify-center tw-items-center">
        <TabList className="tw-flex tw-bg-[#F0F0F2]  tw-rounded-full tw-p-[.25rem]">
          <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            2024-25
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            2023-24
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            2022-23
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            2021-22
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            2020-21
          </Tab>
        </TabList>

        <TabPanels className=" tw-w-full tw-pt-[5rem]">
          <TabPanel className="tw-flex tw-flex-col tw-gap-[3rem] tw-px-[14.375rem] tw-pb-[7.5rem]">
            <p className="tw-text-center tw-font-playFair tw-text-h2 leading-[2.6rem] tw-tracking-[-0.02rem] tw-text-gray80">
              FY 2024-25
            </p>
            <div>
              {datas.map((item, i) => (
                <div
                  key={i}
                  className="tw-flex tw-justify-between tw-text-darkPurple tw-py-[2.063rem] tw-w-full tw-px-[1.25rem] tw-border-b-2 tw-border-footerGray "
                >
                  <p className="tw-leading-[1.4rem] tw-text-gray80">
                    {item.title}
                  </p>
                  <DownloadFileSvg className="tw-size-[2rem]" />
                </div>
              ))}
            </div>
            <div className="tw-flex tw-w-full tw-justify-end">
              <ButtonAnimation className=" tw-flex tw-gap-2 0 tw-rounded-3xl tw-items-center tw-text-darkPurple hover:tw-text-white tw-bg-white hover:tw-bg-darkPurple tw-py-[0.75rem] tw-px-[1.75rem] tw-border-2 tw-bottom-2 tw-border-darkPurple tw-w-fit">
                <p className="tw-text-h9Copy5 tw-font-medium leading-[1.225rem]  ">
                  Download All
                </p>
                <DownloadFileSvg className="tw-size-[1.25rem]" />
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
