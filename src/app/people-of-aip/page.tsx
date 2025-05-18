import { TPeopleAip } from "@/api/type";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import PeopleOfAipTeamMembers from "./[slug]/_components/PeopleOfAipTeamMembers";
import Directors from "./_components/Directors";

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
    <div className="pt-[5rem] overflow-hidden">
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
