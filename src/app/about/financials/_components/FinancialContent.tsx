"use client";
import React from "react";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import { TReports } from "@/api/type";
import Link from "next/link";
import { StorageUrl } from "@/utils/BaseUrl";
import FinancialTabAndResp from "./FinancialTabAndResp";
import CardAnimation from "@/components/animations/CardAnimation";

type Props = {
  filterDataByYear: TReports | undefined;
  currentYear?: string;
  response: TReports[];
};
const FinancialContent = ({
  filterDataByYear,
  currentYear,
  response,
}: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <FinancialTabAndResp
          financialArray={response}
          currentYear={currentYear}
          listClassName=""
          textClassName="!px-[1.394rem]"
        />
        <div className=" w-full ~pt-[2.5rem]/[5rem]">
          <div className="flex flex-col gap-[3rem] ~px-[1.25rem]/[14.375rem] ~pb-[3.875rem]/[7.5rem]">
            <p className="text-center font-playFair ~text-h4a/h2 ~leading-[2.113rem]/[2.6rem] tracking-[-0.02rem] text-gray80">
              FY {currentYear}
            </p>
            <div>
              {filterDataByYear?.financialReports.map((data, index) => (
                <CardAnimation key={index} index={index} delay={0.1}>
                  <div
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
                  </div>
                </CardAnimation>
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
        </div>
      </div>
    </>
  );
};

export default FinancialContent;
