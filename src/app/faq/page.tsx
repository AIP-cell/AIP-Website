import React from "react";
import FaqItem from "./_components/FaqItem";
import BgFaq from "@public/svg/bg-faq.svg";
import List from "./_components/List";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" tw-relative  tw-overflow-hidden">
      <Image src={BgFaq} alt="" className="tw-left-0 tw-absolute tw-top-[5rem] " />
      <div className="tw-relative container tw-mx-auto tw-px-[7.75rem] tw-pt-[5rem] tw-grid md:tw-grid-cols-3 tw-gap-[3.75rem] tw-h-screen">
        <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9Copy5 tw-leading-[19.6px]"
          >
            {"<"} FAQ&apos;s
          </Link>
        </div>
        <div>
          <p className="tw-leading-[3.3rem] tw-text-h2 tw-pb-[3rem] tw-font-playFair">
            FAQS
          </p>
          <List name="General Inquiry" />
          <List name="Founder Network" />
          <List name="Philanthropic Network" />
          <List name="NPO" />
        </div>
        <div className="md:tw-col-span-2">
          <FaqItem />
        </div>
      </div>
    </div>
  );
};

export default page;
