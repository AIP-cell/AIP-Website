import CustomSelect from "@/components/custom/CustomSelect";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import AllTabContent from "./AllTabContent";
const searchTabs = [
  "All",
  "Report",
  "Case Study",
  "Event",
  "Person",
  "Interview",
  "Op-Ed",
];

const sectors = ["sector", "sector", "sector"];
const dateData = ["date", "date", "date"];
const typeData = ["type", "type", "type"];
const SearchTab = () => {
  return (
    <div>
      <TabGroup className="tw-flex tw-flex-col  tw-pt-[2.188rem]">
        <TabList className="tw-flex tw-gap-[0.75rem]">
          {searchTabs.map((tab, i) => (
            <Tab
              key={i}
              className="tw-px-[1.25rem] tw-py-[0.5rem] tw-rounded-full tw-border-2 tw-border-[#A0A3AD] data-[selected]:tw-border-darkPurple data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9Copy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <div className="tw-flex tw-pt-[4rem] tw-gap-[0.75rem]">
          <p className="tw-py-3 tw-text-gray40 ">Filter by:</p>
          <CustomSelect
            optionsArray={sectors}
            ListboxButtonClassName="!tw-w-fit"
          />
          <CustomSelect
            optionsArray={typeData}
            ListboxButtonClassName="!tw-w-fit"
          />
          <CustomSelect
            optionsArray={dateData}
            ListboxButtonClassName="!tw-w-fit"
          />
        </div>
        <TabPanels>
          <TabPanel>
            <AllTabContent />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default SearchTab;
