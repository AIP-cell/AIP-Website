"use client";
import React, { useState } from "react";
import { TabGroup } from "@headlessui/react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import FaqTab from "./FaqTab";
import { FaqItem } from "./FaqItem";
import { TFaqs } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";

const list = [
  { tabNo: 0, key: "general-inquiry", name: "General Inquiry" },
  { tabNo: 1, key: "founder-network", name: "Founder Network" },
  { tabNo: 2, key: "philanthropic-network", name: "Philanthropic Network" },
  { tabNo: 3, key: "npo", name: "NPO" },
  { tabNo: 4, key: "world-of-philanthropy", name: "World of Philanthropy" },
];
type Props = { faqData: TFaqs[]; category: string };
const FaqTabGroup = ({ faqData, category }: Props) => {
  const SelectedData = list.find((data) => data.name == category);
  const [selected, setSelected] = useState(
    (category ? SelectedData?.tabNo : 0) || 0
  );
  return (
    <TabGroup
      selectedIndex={selected}
      onChange={setSelected}
      className="relative container mx-auto ~px-[1.25rem]/[7.75rem] ~pt-[5rem]/[10rem] grid md:grid-cols-3 ~gap-[3.375rem]/[3.75rem]"
    >
      <BreadCrump textOne="FAQ's" linkOne="/faq" />
      <div className="col-span-1">
        <p className="leading-[3.3rem] text-h2 pb-[3rem] font-playFair">FAQS</p>
        <div className="">
          <FaqTab
            selected={selected}
            setSelected={setSelected}
            tabList={list}
          />
        </div>
      </div>
      <div className="md:col-span-2">
        {faqData.length != 0 ? (
          list.map(
            (items, index) =>
              category === items.name && (
                <CardAnimation delay={0.2} key={index}>
                  <div key={index}>
                    <FaqItem faqData={faqData} />
                  </div>
                </CardAnimation>
              )
          )
        ) : (
          <p className=" flex justify-center pt-[4rem] h-full text-darkPurple">
            No Faq Available
          </p>
        )}
      </div>
    </TabGroup>
  );
};

export default FaqTabGroup;
