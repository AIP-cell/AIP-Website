import React from "react";
import Download from "@public/svg/download.svg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

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
    <TabGroup className="tw-flex tw-flex-col tw-justify-center tw-items-center">
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
        <TabPanel className="tw-flex tw-flex-col tw-gap-[3rem]">
          <p className="tw-text-center tw-font-playFair tw-text-h2 leading-[2.6rem] tw-tracking-[-0.02rem] tw-text-gray80">
            FY 2024-25
          </p>
          <div>
            {datas.map((item, i) => (
              <div
                key={i}
                className="tw-flex tw-justify-between tw-py-[2.063rem] tw-w-full tw-px-[1.25rem] tw-border-b tw-border-footerGray "
              >
                <p className="tw-leading-[1.4rem] tw-text-gray80">
                  {item.title}
                </p>
                <Image
                  src={Download}
                  className="tw-w-[1.167rem] tw-h-[1.5rem]"
                  alt="download"
                />
              </div>
            ))}
          </div>
          <div className="tw-flex tw-w-full tw-justify-end">
          <button className=" tw-flex tw-gap-2 0 tw-rounded-3xl tw-py-3 tw-px-7 tw-border tw-bottom-2 tw-border-darkPurple tw-w-fit">
            <p className="tw-font-playFair tw-text-h9BodyCopy5 leading-[1.225rem]  tw-text-darkPurple ">
              Download All
            </p>
            <Image
                src={Download}
                className="tw-w-[1.167rem] tw-h-[1.5rem]"
                alt="download"
              />
          </button>
          </div>

        </TabPanel>

        <TabPanel>Content 4</TabPanel>
        <TabPanel>Content 4</TabPanel>
        <TabPanel>Content 4</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default FinancialTabs;
