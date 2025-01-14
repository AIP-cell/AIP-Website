"use client";
import React, { useState } from "react";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import FaqTab from "./FaqTab";
import { FaqItem } from "./FaqItem";
import { TFaqs } from "@/api/type";

const list = [
  { tabNo: 0, key: "general-inquiry", name: "General Inquiry" },
  { tabNo: 1, key: "founder-network", name: "Founder Network" },
  { tabNo: 2, key: "philanthropic-network", name: "Philanthropic Network" },
  { tabNo: 3, key: "npo", name: "NPO" },
];
type Props = { faqData: TFaqs[]; category: string };
const FaqTabGroup = ({ faqData, category }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <TabGroup
      selectedIndex={selected}
      onChange={setSelected}
      className="relative container mx-auto ~px-[1.25rem]/[7.75rem] pt-[5rem] grid md:grid-cols-3 ~gap-[1rem]/[3.75rem] h-screen"
    >
      <BreadCrump textOne="FAQ's" linkOne="/faq" />
      <div>
        <p className="leading-[3.3rem] text-h2 pb-[3rem] font-playFair">FAQS</p>
        {faqData.length != 0 && (
          <div className="">
            <FaqTab
              selected={selected}
              setSelected={setSelected}
              tabList={list}
            />
          </div>
        )}
      </div>
      <TabPanels className="md:col-span-2">
        {list.map(
          (items, index) =>
            category === items.key && (
              <TabPanel key={index}>
                <FaqItem faqData={faqData} />
              </TabPanel>
            )
        )}
      </TabPanels>
    </TabGroup>
  );
};

export default FaqTabGroup;
