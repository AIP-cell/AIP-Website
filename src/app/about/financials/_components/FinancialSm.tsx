"use client";
import React, { useState } from "react";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";

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

const years = [
  { id: 1, title: " 2024-25" },
  { id: 2, title: " 2023-24" },
  { id: 3, title: " 2022-23" },
  { id: 4, title: " 2021-22" },
  { id: 5, title: " 2020-21" },
];

const FinancialSm = () => {
  const [selected, setSelected] = useState(years.at(0));
  // console.log("selected:::",selected)
  return (
    <div className="md:tw-hidden tw-pt-[2.5rem]">
      <CustomGraySelect
        data={years}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="tw-flex tw-flex-col tw-gap-[3.8rem] tw-px-5 tw-pt-[2.5rem] ~tw-pb-[2rem]/[7.5rem]">
        <p className="tw-text-center tw-font-playFair tw-text-h4a leading-[2.6rem] tw-tracking-[-0.02rem] tw-text-gray80">
          FY 2024-25
        </p>
        <div>
          {datas.map((item, i) => (
            <div
              key={i}
              className="tw-flex tw-justify-between tw-text-darkPurple ~tw-py-[1.75rem]/[2.063rem] tw-w-full tw-px-[1.25rem] tw-border-b-2 tw-border-footerGray "
            >
              <div className="~tw-leading-[1.225rem]/[1.4rem] tw-text-gray80 ~tw-text-h9Copy5/h9Copy4 tw-w-full">
                {item.title}
              </div>
              <div className="tw-size-8">
                <DownloadFileSvg className="tw-size-[2rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tw-flex tw-w-full tw-justify-end tw-px-5 tw-pb-[5rem]">
        <ButtonAnimation className=" tw-flex tw-gap-2 0 tw-rounded-3xl tw-items-center tw-text-darkPurple hover:tw-text-white tw-bg-white hover:tw-bg-darkPurple tw-py-[0.75rem] tw-px-[1.75rem] tw-border-2 tw-bottom-2 tw-border-darkPurple tw-w-fit">
          <p className="tw-text-h9Copy5 tw-font-medium leading-[1.225rem]  ">
            Download All
          </p>
          <DownloadFileSvg className="tw-size-[1.25rem]" />
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default FinancialSm;
