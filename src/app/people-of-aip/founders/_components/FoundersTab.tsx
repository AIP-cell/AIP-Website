import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";

const FoundersTab = () => {
  return (
    <div className="tw-flex tw-justify-center tw-pt-[4.75rem] ">
      <TabGroup className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <TabList className="tw-flex tw-bg-[#F0F0F2] tw-p-1 tw-rounded-full tw-w-fit">
          <Tab className="tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            Our Core Founders
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            Founders
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            Our Advisory Board
          </Tab>
          <Tab className="tw-px-[2.5rem] tw-py-[0.75rem] data-[selected]:tw-bg-darkPurple data-[selected]:tw-text-white data-[selected]:tw-rounded-full tw-text-h9BodyCopy5 tw-leading-[1.22rem] tw-font-inter data-[selected]:tw-outline-none">
            Team AIP
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <OurCoreFoundersContent />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default FoundersTab;
