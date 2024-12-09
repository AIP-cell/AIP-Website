import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import List from "./List";
import FaqTabList from "./FaqTabList";
import ArrowSvg from "@/components/svg/ArrowSvg";

const TablistData = [
  {
    name: "General Inquiry",
  },
  {
    name: "Founder Network",
  },
  {
    name: "Philanthropic Network",
  },
  {
    name: "NPO",
  },
  {
    name: "World of Philanthropy",
  },
];
const FaqTab = () => {
  return (
    <>
      <TabList className="">
        {TablistData.map((items, i) => (
          <Tab
            key={i}
            className="tw-group tw-w-full tw-bg-bgGray5 data-[selected]:tw-bg-darkPurple tw-items-center data-[selected]:tw-text-white hover:tw-font-playFairItalic  tw-transition-all tw-p-5 tw-rounded-[1.25rem] tw-flex tw-text-left tw-justify-between tw-mb-3 tw-group data-[selected]:tw-outline-none"
          >
            <p className="tw-font-playFair tw-font-medium group-hover:tw-italic tw-text-xl tw-tracking-[.02rem] ">
              {items.name}
            </p>
            <div className="tw-p-[0.375rem] group tw-text-midGray group-data-[selected]:tw-text-white group-hover:tw-text-midGray">
              <ArrowSvg />
            </div>
          </Tab>
        ))}
      </TabList>
    </>
  );
};

export default FaqTab;
