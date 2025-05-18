"use client";

import React, { useState } from "react";
import OurCoreFoundersContent from "./OurCoreFoundersContent";
import PeopleOfAipTeamMembers from "./PeopleOfAipTeamMembers";
import PeopleOfAipTabs from "./PeopleOfAipTabs";
import { useQuery } from "@tanstack/react-query";
import { Api } from "@/api/Api";
import { TCoreFoundersAndFounders, TTeamMembers } from "@/api/type";

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

export const dynamic = "force-dynamic";
const getPeopleOfAip = async (
  slug: string
): Promise<TCoreFoundersAndFounders> => {
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

  if (!response) {
    return;
  }

  const members = Array.isArray(response) ? response : [];

  return (
    <div>
      <PeopleOfAipTabs
        setOpenTab={setCurrentTab}
        tabList={tabList}
        currentTab={currentTab}
      />

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
