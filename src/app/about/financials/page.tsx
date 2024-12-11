import React from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import Link from "next/link";
import Image from "next/image";
import FinancialTabs from "./_components/FinancialTabs";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const page = () => {
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
              <p className=" text-gray80">
                Financial Reports & Certificates
              </p>
            </div>
          </div>
          <FinancialTabs />
        </div>
      </div>
    </div>
  );
};

export default page;
