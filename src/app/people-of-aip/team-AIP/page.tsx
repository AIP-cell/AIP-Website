import React from "react";
// import PeopleOfAipTab from "../_components/PeopleOfAipTab";
// import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import TeamAip from "./_components/TeamAip";
import { Api } from "@/api/Api";
import { TPeopleOfAip } from "@/api/type";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TPeopleOfAip> => {
  const response = await Api.getPeopleOfAip(slug);
  return response.data;
};
const tabList = [
  { name: "Our Core Founders", link: "/people-of-aip/core-founders" },
  { name: "Founders", link: "/people-of-aip/founders" },
  {
    name: "Our Advisory Board",
    link: "/people-of-aip/our-advisory-board",
  },
  { name: "Team AIP", link: "/people-of-aip/team-AIP" },
  { name: "Experts", link: "/people-of-aip/experts" },
];
const page = async () => {
  const response = await getPeopleOfAipApi("teamAIP");
  const teamAipMembers = response.teamMembers;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Team AIP"
          linkTwo="/people-of-aip/team-AIP"
        />
      </div>
      <PeopleOfAipTabs tabList={tabList} currentTab="Team AIP" />
      <TeamAip teamAipMembers={teamAipMembers} />
      {/* <PeopleOfAipTab tabSelect="team-AIP" />
      <PeopleOfAipSm tabSelect="Team AIP"/> */}
    </div>
  );
};

export default page;
