import React from "react";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import ResourcesSm from "../_components/ResourcesSm";
import ResourcesTabs from "../_components/ResourcesTabs";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import CustomSelect from "@/components/custom/CustomSelect";
import ResourceCard from "@/components/cards/ResourceCard";
import AipResourceTabs from "./AipResourceTabs";

const resourcesArray = [
  "AIP Updates",
  "Reports & Publications",
  " Newsletter",
  " Inspirational Voices",
  " In the Media",
  " Gallery",
];
const datas = [
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource1.svg",
    title: "Wealth with Purpose- a report on Indian Philanthropy",
    desc: "This report a collaborative effort between Accelerate India Philanthropy (AIP) and Boston Consulting Group (BCG) delves into the motivations, challenges, strategies and decision-making processes of UHNIs across various stages of philanthropy. We interviewed 100 UHNIs as part of a selective sample, ensuring diverse representation across net worth, geographical location, source of wealth and stage of giving.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Getting Non-profits in India Scale Ready",
    desc: "A primary research report by AIP that presents a nationally representative view of the challenges that 65+ non-profits face in their journey to scale impact and recommends principles for philanthropists in supporting their grantees.",
    category: "Field",
  },
  {
    src: "/svg/resource-page/resource2.svg",
    title: "Enabling Good Vol 11",
    desc: "A monthly roundup from the world of philanthropy. In this edition, we introduce our five new Founders-Radhika and Kartik Bharat Ram, Rati Forbes, Mathew Cyriac, Pankaj Gupta, and Swati Apte and Alok Kshirsagar-whose expertise and shared passion for philanthropy brings remarkable value to our community",
    category: "Field",
  },
];
const domainArray = [
  "All",
  "Art & Culture",
  "Education",
  "Environment",
  "Health & Nutrition",
  "Legal & Judiciary",
  "Livelihood",
  "Disability",
  "Rural Development",
  "Sports",
  "WASH",
  "Women & Child",
];
const filterDatas = {
  domain: [
    "All",
    "Art & Culture",
    "Education",
    "Environment",
    "Health & Nutrition",
    "Legal & Judiciary",
    "Livelihood",
    "Disability",
    "Rural Development",
    "Sports",
    "WASH",
    "Women & Child",
  ],
  typeContent: ["Type of Content", "Type of Content"],
  date: ["Date", "Date"],
};
const typeContentArray = ["Type of Content", "Type of Content"];
const dateArray = ["Date", "Date"];
const AipResourcesPage = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.5rem]">
        <div className="~tw-px-5/tw-flex ~tw-pt-0/[1.25rem] tw-gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="AIP Resources"
            linkTwo="/resource-center"
            textThree="Reports"
            linkThree="/resource-center"
          />
          <div className="tw-max-w-[51.188rem] ~tw-pt-[4.3rem]/[5rem] ~tw-pb-[2.5rem]/[4rem]">
            <p className="tw-font-playFair tw-leading-[3.3rem] ~tw-text-h4/[3rem] tw-text-gray80">
              AIP Resources
            </p>
          </div>
        </div>
        {/* <ResourcesSm
          filterDatas={filterDatas}
          dateArray={dateArray}
          domainArray={domainArray}
          typeContentArray={typeContentArray}
        /> */}
        <AipResourceTabs />
      </div>
    </div>
  );
};

export default AipResourcesPage;
