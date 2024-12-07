"use client";
import ResourceCard from "@/components/cards/ResourceCard";
import CustomFilter from "@/components/custom/CustomFilter";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useState } from "react";
import ResourcesTabs from "../../_components/ResourcesTabs";
import FeaturesCuratedResource from "./FeaturesCuratedResource";
import ExpertsCuratedResource from "./ExpertsCuratedResource";

const resourcesArray = [
  "Featured",
  "Experts",
  "Philanthropists",
  " NPO",
  " Partners",
  " World of Philanthropy",
];

const CuratedResourcesTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="tw-flex tw-flex-col tw-justify-center "
      >
        <ResourcesTabs
          resourcesArray={resourcesArray}
          selectedIndex={selectedIndex}
          //   setSelected={setSelected}
          setSelectedIndex={setSelectedIndex}
          textClassName="  "
          listClassName="!tw-w-full"
        />
        <TabPanels className="">
          <TabPanel>
            <FeaturesCuratedResource />
          </TabPanel>
          <TabPanel>
            <ExpertsCuratedResource />
          </TabPanel>
          <TabPanel>Content 3</TabPanel>
          <TabPanel>Content 4</TabPanel>
          <TabPanel>Content 5</TabPanel>
          <TabPanel>Content 6</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default CuratedResourcesTabs;
