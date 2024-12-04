import React from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import Link from "next/link";
import Image from "next/image";
import FinancialTabs from "./_components/FinancialTabs";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="tw-w-full tw-relative">
        <Image
          src={BgFaq}
          alt=""
          className="tw-hidden lg:tw-block tw-left-0 tw-absolute tw-top-[2rem] tw-z-[-1]"
        />
        <div className=" tw-relative container tw-mx-auto">
          <div className="tw-relative container tw-mx-auto  ~tw-px-5/[7.8rem] ~tw-pt-[4.31rem]/[5rem]">
            <BreadCrump
              textOne="About Us"
              linkOne="/about"
              textTwo="Financial Reports"
              linkTwo="/about/financials"
            />
            <div className="~tw-pb-0/[5rem]  ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-font-playFair">
              <p className=" tw-text-gray80">
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
