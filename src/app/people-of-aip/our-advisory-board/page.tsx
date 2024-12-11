import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import AdvisoryBoard from "./_componets/AdvisoryBoard";

const OurAdvisoryBoardPage = () => {
  return (
    <div className="pt-[5rem] overflow-hidden">
      <div className="relative container mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Advisory Board"
          linkTwo="/people-of-aip/our-advisory-board"
        />
      </div>
      <PeopleOfAipTabs currentTab="Our Advisory Board" />
      <AdvisoryBoard />
      {/* <PeopleOfAipTab tabSelect="team-AIP" />
  <PeopleOfAipSm tabSelect="Team AIP"/> */}
    </div>
  );
};

export default OurAdvisoryBoardPage;
