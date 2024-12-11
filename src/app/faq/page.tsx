"use client";
import React, { useState } from "react";
import BgFaq from "@public/svg/bg-faq.svg";
import List from "./_components/List";
import Image from "next/image";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import FaqTab from "./_components/FaqTab";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import { FaqItem } from "./_components/FaqItem";
const list = [
  "General Inquiry",
  "Founder Network",
  "Philanthropic Network",
  "NPO",
];
const FaqPage = () => {
  const [selected, setSelected] = useState(list[0]);
  return (
    <div className="pt-[5rem]">
      <div className=" relative h-screen ">
        <Image
          src={BgFaq}
          alt=""
          className="hidden lg:block left-0 absolute top-[5rem] "
        />

        <TabGroup className="relative container mx-auto ~px-[1.25rem]/[7.75rem] pt-[5rem] grid md:grid-cols-3 gap-[3.75rem] h-screen">
          <BreadCrump textOne="FAQ's" linkOne="/faq" />

          <div>
            <p className="leading-[3.3rem] text-h2 pb-[3rem] font-playFair">
              FAQS
            </p>
            <div className="hidden md:block">
              <FaqTab />
            </div>
            <div className="block md:hidden">
              <CustomGraySelect
                data={list}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
          <TabPanels className="md:col-span-2">
            <TabPanel>
              <FaqItem />
            </TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
            <TabPanel>Content 4</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default FaqPage;
