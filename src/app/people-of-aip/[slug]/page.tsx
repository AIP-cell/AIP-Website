import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import { TTeamMembers } from "@/api/type";
import { Api } from "@/api/Api";
import PeopleOfAipTeamMembers from "./_components/PeopleOfAipTeamMembers";
import OurCoreFoundersContent from "../_components/OurCoreFoundersContent";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TTeamMembers[]> => {
  const response = await Api.getPeopleOfAip(slug);
  return response?.data;
};
const tabList = [
  {
    key: "coreFounder",
    name: "Our Core Founders",
    link: "/people-of-aip/coreFounder",
  },
  { key: "founders", name: "Founders", link: "/people-of-aip/founders" },
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
  if (!response) {
    notFound();
  }
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
      {members && urlSlug === "coreFounder" ? (
        <OurCoreFoundersContent coreFounderMembers={members} />
      ) : (
        members.length!=0 && (
          <PeopleOfAipTeamMembers teamMembers={members} urlSlug={urlSlug} />
        )
      )}
    </div>
  );
};

export default InnerPage;
