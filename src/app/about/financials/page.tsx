import React from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import Image from "next/image";
import FinancialContent from "./_components/FinancialContent";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { Api } from "@/api/Api";
import { TReports } from "@/api/type";
import { notFound } from "next/navigation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";

const getFinancialReportApi = async (): Promise<TReports[]> => {
  const response = await Api.getFinancialReport();
  return response.data;
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ year: string }>;
}) => {
  const urlSearchParams = await searchParams;
  const response = await getFinancialReportApi();
  if (!response) {
    notFound();
  }
  const currentYear = urlSearchParams.year
    ? urlSearchParams.year
    : response.at(0)?.year;
  const filterDataByYear = response.find((year) => year.year === currentYear);
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
              linkOne="#"
              textTwo="Financial Reports"
              linkTwo="/about/financials"
            />
            <div className="~pb-[2.5rem]/[5rem]  ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
              {/* <p className=" text-gray80">Financial Reports & Certificates</p> */}
              <WordStaggerAnimation
                text="Financial Reports & Certificates"
                className="text-gray80"
              />
            </div>
          </div>
          {response && (
            <FinancialContent
              filterDataByYear={filterDataByYear}
              currentYear={currentYear}
              response={response}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
