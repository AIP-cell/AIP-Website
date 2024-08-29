import React from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import Link from "next/link";
import Image from "next/image";
import FinancialTabs from "./_components/FinancialTabs";

const page = () => {
  return (
    <div className=" tw-relative tw-overflow-hidden">
      <Image
        src={BgFaq}
        alt=""
        className="tw-left-0 tw-absolute tw-top-[5rem] "
      />
      <div className="tw-relative container tw-mx-auto  tw-px-[7.8rem] tw-pt-[5rem]">
        <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
          >
            {"<"} About Us / &nbsp;
          </Link>
          <Link href="#">Financials</Link>
        </div>
        <div className="tw-pt-[2.5rem] tw-pb-[5rem] tw-text-h2Heading2 tw-leading-[3.3rem] tw-font-playFair">
          <p className=" tw-text-gray80">
            Financial report of the{" "}
            <span className=" tw-text-textPurple tw-italic tw-tracking-[-4%]">
              past financial years.
            </span>{" "}
          </p>
        </div>

        <FinancialTabs />
      </div>
    </div>
  );
};

export default page;
