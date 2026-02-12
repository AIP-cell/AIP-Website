import { TPeopleAip } from "@/api/type";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import PeopleOfAipTeamMembers from "./[slug]/_components/PeopleOfAipTeamMembers";
import Directors from "./_components/Directors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "People of AIP | Board of Directors and Team",
  description:
    "Meet the people behind AIP — our Board of Directors and dedicated team. United by shared purpose and diverse expertise, they guide AIP’s mission, uphold its values, and drive meaningful change in the philanthropic ecosystem.",
  alternates: {
    canonical: "/about/people-of-aip",
  },
};

export const dynamic = "force-dynamic";
const getPeopleOfAipApi = async (): Promise<TPeopleAip> => {
  const response = await Api.getPeopleAip();
  return response?.data;
};

const page = async () => {
  const response = await getPeopleOfAipApi();
  if (!response) {
    notFound();
  }
  const members = response;
  return (
    <div className="~pt-[5rem]/[10rem] overflow-hidden">
      {members.boardOfDirectors && members.boardOfDirectors.length !== 0 && (
        <Directors teamMembers={members.boardOfDirectors} />
      )}

      <PeopleOfAipTeamMembers
        teamMembers={members.teamAIP}
        urlSlug="team-aip"
      />
    </div>
  );
};

export default page;
