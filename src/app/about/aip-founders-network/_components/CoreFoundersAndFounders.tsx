"use client";

import React, { useState } from "react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";
import PeopleOfAipTeamMembers from "./PeopleOfAipTeamMembers";
import PeopleOfAipTabs from "./PeopleOfAipTabs";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/api/Api";
import { TCoreFoundersAndFounders, TTeamMembers } from "@/api/type";
import NoData from "@/components/NoData";

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

export const dynamic = "force-dynamic";
const getPeopleOfAip = async (slug:string): Promise<TCoreFoundersAndFounders> => {
  const response = await Api.getPeopleOfAip(slug);

  return response?.data;
};

const CoreFoundersAndFounders = () => {
  const [currentTab, setCurrentTab] = useState<string>("core-founder");



  


  const { data: response } = useQuery({
    queryKey: ["peopleOfAip", currentTab],
    queryFn: () =>
      getPeopleOfAip(currentTab === "founders" ? "founders" : "coreFounder"),
  });

  console.log("res", response);
  if (!response) {
    return;
  }

  const members = Array.isArray(response) ? response : [];


  return (
    <div>
      <PeopleOfAipTabs
        setOpentab={setCurrentTab}
        tabList={tabList}
        currentTab={currentTab}
        
      />


  {/* {currentTab === "core-founder" ? (
        members && members.length != 0 ? (
          <OurCoreFoundersContent coreFounderMembers={members as TTeamMembers[]} />
        ) : (
          <NoData />
        )
      ) : members && members.length != 0 ? (
        <PeopleOfAipTeamMembers teamMembers={members}/>
      ) : (
        <NoData />
      )} */}



      {currentTab === "core-founder" && (
        <OurCoreFoundersContent coreFounderMembers={members} />
      )}
      {currentTab === "founders" && (
        <PeopleOfAipTeamMembers teamMembers={members as TTeamMembers[]} />
      )}
    </div>
  );
};

export default CoreFoundersAndFounders;
