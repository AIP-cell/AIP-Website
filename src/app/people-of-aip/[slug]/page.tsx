import React from "react";
import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import { TPeopleOfAip, TTeamMembers } from "@/api/type";
import { Api } from "@/api/Api";
import PeopleOfAipTeamMembers from "./_components/PeopleOfAipTeamMembers";
import OurCoreFoundersContent from "../_components/OurCoreFoundersContent";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TTeamMembers[]> => {
  const response = await Api.getPeopleOfAip(slug);
  return response.data;
};
const tabList = [
  {
    key: "coreFounder",
    name: "Our Core Founders",
    link: "/people-of-aip/coreFounder",
  },
  { key: "founder", name: "Founders", link: "/people-of-aip/founder" },
  {
    key: "advisoryBoard",
    name: "Our Advisory Board",
    link: "/people-of-aip/advisoryBoard",
  },
  { key: "teamAIP", name: "Team AIP", link: "/people-of-aip/teamAIP" },
  { key: "experts", name: "Experts", link: "/people-of-aip/experts" },
];
const InnerPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const urlParams = await params;
  const urlSlug = urlParams.slug;
  const response = await getPeopleOfAipApi(urlSlug);
  const members = response;
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Experts"
          linkTwo="/people-of-aip/experts"
        />
      </div>
      <PeopleOfAipTabs tabList={tabList} currentTab={urlSlug} />
      {urlSlug === "coreFounder" ? (
        <OurCoreFoundersContent coreFounderMembers={members} />
      ) : (
        <PeopleOfAipTeamMembers teamMembers={members} urlSlug={urlSlug} />
      )}
    </div>
  );
};

export default InnerPage;
