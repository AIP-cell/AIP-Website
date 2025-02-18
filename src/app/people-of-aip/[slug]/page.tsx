import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import { TTeamMembers } from "@/api/type";
import { Api } from "@/api/Api";
import PeopleOfAipTeamMembers from "./_components/PeopleOfAipTeamMembers";
import OurCoreFoundersContent from "../_components/OurCoreFoundersContent";
import { notFound } from "next/navigation";
import NoData from "@/components/NoData";

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (slug: string): Promise<TTeamMembers[]> => {
  const response = await Api.getPeopleOfAip(slug);
  return response?.data;
};
const tabList = [
  {
    slug: "core-founder",
    key: "coreFounder",
    name: "Our Core Founders",
    link: "/people-of-aip/core-founder",
  },
  {
    slug: "founders",
    key: "founders",
    name: "Founders",
    link: "/people-of-aip/founders",
  },
  {
    slug: "advisory-board",
    key: "advisoryBoard",
    name: "Our Advisory Board",
    link: "/people-of-aip/advisory-board",
  },
  {
    slug: "team-aip",
    key: "teamAIP",
    name: "Team AIP",
    link: "/people-of-aip/team-aip",
  },
  // { key: "experts", name: "Experts", link: "/people-of-aip/experts" },
];
const InnerPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const urlParams = await params;
  const urlSlug = urlParams.slug;
  const filtered = tabList.find((item) => item.slug === urlSlug);
  const response = await getPeopleOfAipApi(
    filtered?.key ? filtered?.key : "core-founder"
  );
  if (!response) {
    notFound();
  }
  const members = response;
  // const innerName = tabList.find((item)=>item.key)
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne={`/people-of-aip/${urlSlug}`}
          textTwo={filtered?.name}
          linkTwo={`/people-of-aip/${urlSlug}`}
        />
      </div>
      <PeopleOfAipTabs
        tabList={tabList}
        currentTab={urlSlug}
        filteredName={filtered?.name}
      />
      {urlSlug === "core-founder" ? (
        members && members.length != 0 ? (
          <OurCoreFoundersContent coreFounderMembers={members} />
        ) : (
          <NoData />
        )
      ) : members && members.length != 0 ? (
        <PeopleOfAipTeamMembers teamMembers={members} urlSlug={urlSlug} />
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default InnerPage;
