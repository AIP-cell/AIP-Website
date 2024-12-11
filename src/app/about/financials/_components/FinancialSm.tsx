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

const years = [" 2024-25", " 2023-24", " 2022-23", " 2021-22", " 2020-21"];

const FinancialSm = () => {
  const [selected, setSelected] = useState(years.at(0));
  // console.log("selected:::",selected)
  return (
    <div className="md:hidden pt-[2.5rem]">
      <CustomGraySelect
        data={years}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col gap-[3.8rem] px-5 pt-[2.5rem] ~pb-[2rem]/[7.5rem]">
        <p className="text-center font-playFair text-h4a leading-[2.6rem] tracking-[-0.02rem] text-gray80">
          FY 2024-25
        </p>
        <div>
          {datas.map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-darkPurple ~py-[1.75rem]/[2.063rem] w-full px-[1.25rem] border-b-2 border-footerGray "
            >
              <div className="~leading-[1.225rem]/[1.4rem] text-gray80 ~text-h9Copy5/h9Copy4 w-full">
                {item.title}
              </div>
              <div className="size-8">
                <DownloadFileSvg className="size-[2rem]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-end px-5 pb-[5rem]">
        <ButtonAnimation className=" flex gap-2 0 rounded-3xl items-center text-darkPurple hover:text-white bg-white hover:bg-darkPurple py-[0.75rem] px-[1.75rem] border-2 bottom-2 border-darkPurple w-fit">
          <p className="text-h9Copy5 font-medium leading-[1.225rem]  ">
            Download All
          </p>
          <DownloadFileSvg className="size-[1.25rem]" />
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default FinancialSm;
