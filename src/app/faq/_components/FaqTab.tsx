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
            className="group w-full bg-bgGray5 data-[selected]:bg-darkPurple items-center data-[selected]:text-white hover:font-playFairItalic  transition-all p-5 rounded-[1.25rem] flex text-left justify-between mb-3 group data-[selected]:outline-none"
          >
            <p className="font-playFair font-medium group-hover:italic text-xl tracking-[.02rem] ">
              {items.name}
            </p>
            <div className="p-[0.375rem] group text-midGray group-data-[selected]:text-white group-hover:text-midGray">
              <ArrowSvg />
            </div>
          </Tab>
        ))}
      </TabList>
    </>
  );
};

export default FaqTab;
