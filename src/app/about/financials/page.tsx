import React from "react";
import Link from "next/link";
import FinancialTabs from "./_components/FinancialTabs";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative  tw-pl-[7.8rem] tw-pt-[5rem]">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"} About Us / &nbsp;
        </Link>
        <Link href="#">Financials</Link>
      </div>
      <div className="tw-pt-[2.5rem] tw-pb-[5rem] tw-text-h2Heading2 tw-leading-[3.3rem] tw-font-inter tw-tracking-[-0.04em]">
        <p className=" tw-text-gray80">
          Financial report of the{" "}
          <span className=" tw-text-textPurple tw-italic">
            past financial years.
          </span>{" "}
        </p>
      </div>

      <FinancialTabs />
    </div>
  );
};

export default page;
