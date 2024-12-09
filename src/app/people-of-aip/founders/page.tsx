import React from "react";
// import PeopleOfAipTab from "../_components/PeopleOfAipTab";
import BreadCrump from "@/components/bread-crump/BreadCrump";
// import PeopleOfAipSm from "../_components/PeopleOfAipSm";
import PeopleOfAipTabs from "../_components/PeopleOfAipTabs";
const page = () => {
  return (
    <div className="tw-pt-[5rem] tw-overflow-hidden">
      <div className="tw-relative container tw-mx-auto">
        <BreadCrump
          textOne="People of AIP"
          linkOne="/people-of-aip"
          textTwo="Founders"
          linkTwo="/people-of-aip/Founders"
        />
      </div>
      <PeopleOfAipTabs currentTab="Founders" />
      {/* <FoundersTab currentTab="Founders" /> */}
      <div className="tw-w-full container tw-mx-auto">
        <div className="">Content 2</div>
      </div>
    </div>
  );
};

export default page;
