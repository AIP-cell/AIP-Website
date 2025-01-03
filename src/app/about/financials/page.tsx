import React from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import Link from "next/link";
import Image from "next/image";
import FinancialTabs from "./_components/FinancialTabs";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { Api } from "@/api/Api";
import { TFinancialReportPageData, TReports } from "@/api/type";

const getFinancialReportApi = async (): Promise<TReports[]> => {
  const response = await Api.getFinancialReport();
  return response.data;
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ selected: string }>;
}) => {
  const urlSearchParams = await searchParams;
  const response = await getFinancialReportApi();
  const reports = response;
  const currentYear = urlSearchParams.selected
    ? urlSearchParams.selected
    : "2024";
  const filterDataByYear = reports.find((year) => year.year === currentYear);
  return (
    <div className="pt-[5rem]">
      <div className="w-full relative">
        <Image
          src={BgFaq}
          alt=""
          className="hidden lg:block left-0 absolute top-[2rem] z-[-1]"
        />
        <div className=" relative container mx-auto">
          <div className="relative container mx-auto  ~px-5/[7.8rem] ~pt-[4.31rem]/[5rem]">
            <BreadCrump
              textOne="About Us"
              linkOne="/about"
              textTwo="Financial Reports"
              linkTwo="/about/financials"
            />
            <div className="~pb-0/[5rem]  ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
              <p className=" text-gray80">Financial Reports & Certificates</p>
            </div>
          </div>
          <FinancialTabs
            filterDataByYear={filterDataByYear}
            urlSearchParams={urlSearchParams.selected}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
