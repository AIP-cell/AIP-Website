import BreadCrump from "@/components/bread-crump/BreadCrump";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
import AdvisoryBoard from "./_componets/AdvisoryBoard";

const OurAdvisoryBoardPage = () => {
  return (
    <div className="tw-pt-[5rem] tw-overflow-hidden">
      <div className="tw-relative container tw-mx-auto">
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
