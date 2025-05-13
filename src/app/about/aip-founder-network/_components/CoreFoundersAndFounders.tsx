"use client";

import React, { useState } from "react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";
import PeopleOfAipTeamMembers from "./PeopleOfAipTeamMembers";
import PeopleOfAipTabs from "./PeopleOfAipTabs";


const tabList = [
  {
    slug: "core-founder",
    key: "coreFounder",
    name: "Our Core Founders",
  },
  {
    slug: "founders",
    key: "founders",
    name: "Founders",
  },

];


const data = [
  {
    _id: "string",
    name: "string",
    designation: "string",
    description: "string",
    quote: "string",
    organisation: "string",
    slug: "string",
    linkOrVideo: "string",
    image: "string",
    linkedin: "string",
    videoLink: "string",
  },
];
const data1 = [
  {
    _id: "string",
    name: "string",
    designation: "string",
    description: "string",
    quote: "string",
    organisation: "string",
    slug: "string",
    linkOrVideo: "string",
    image: "string",
    linkedin: "string",
    videoLink: "string",
  },
];

const CoreFoundersAndFounders = () => {
 const [currentTab, setCurrentTab] = useState<string>("core-founder");
  return (
    <div>
        <PeopleOfAipTabs

        setOpentab={setCurrentTab} // Set active tab
        tabList={tabList}
        currentTab={currentTab} // Pass the active tab
         />
    {currentTab === "core-founder" && <OurCoreFoundersContent coreFounderMembers={data} />}
      {currentTab === "founders" && <PeopleOfAipTeamMembers teamMembers={data1} />}
    </div>
  );
};

export default CoreFoundersAndFounders;
