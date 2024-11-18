import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import List from "./List";
import FaqTabList from "./FaqTabList";

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
  }
];
const FaqTab = () => {
  return (
    <>
      <TabList className="">
        {TablistData.map((items, i) => (
          <Tab
            key={i}
            className="tw-w-full tw-bg-bgGray5 data-[selected]:tw-bg-darkPurple  data-[selected]:tw-text-white hover:tw-font-playFairItalic  tw-transition-all tw-p-5 tw-rounded-[1.25rem] tw-flex tw-justify-between tw-mb-3 tw-group data-[selected]:tw-outline-none"
          >
            <FaqTabList name={items.name} />
          </Tab>
        ))}
      </TabList>
    </>
  );
};

export default FaqTab;
