"use client"
import React, { useState } from "react";
import FaqItem from "./_components/FaqItem";
import BgFaq from "@public/svg/bg-faq.svg";
import List from "./_components/List";
import Image from "next/image";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
const list = [
  { id: 1, title: "General Inquiry" },
  { id: 2, title: "Founder Network" },
  { id: 3, title: "Philanthropic Network" },
  { id: 4, title: "NPO" },
];
const FaqPage = () => {
  const [selected, setSelected] = useState(list[0]);
  return (
    <div className="tw-pt-[5rem]">
      <div className=" tw-relative tw-h-screen ">
        <Image
          src={BgFaq}
          alt=""
          className="tw-left-0 tw-absolute tw-top-[5rem] "
        />
        <div className="tw-relative container tw-mx-auto ~tw-px-[1.25rem]/[7.75rem] tw-pt-[5rem] tw-grid md:tw-grid-cols-3 tw-gap-[3.75rem] tw-h-screen">
          <BreadCrump textOne="FAQ's" linkOne="/faq" />
          <div>
            <p className="tw-leading-[3.3rem] tw-text-h2 tw-pb-[3rem] tw-font-playFair">
              FAQS
            </p>
            <div className="tw-hidden md:tw-block">
              <List name="General Inquiry" className="tw-bg-textPurple tw-text-white"/>
              <List name="Founder Network" />
              <List name="Philanthropic Network" />
              <List name="NPO" />
            </div>
            <div className="tw-block md:tw-hidden">
              <CustomGraySelect
                data={list}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
          <div className="md:tw-col-span-2">
            <FaqItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
