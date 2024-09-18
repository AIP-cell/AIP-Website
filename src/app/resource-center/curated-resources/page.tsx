import React from "react";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import ResourcesSm from "../_components/ResourcesSm";
import ResourcesTabs from "../_components/ResourcesTabs";

const CuratedResourcesPage = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="container tw-mx-auto tw-relative ~tw-px-5/[7.8rem]">
        <div className="~tw-px-5/tw-flex ~tw-pt-0/[1.25rem] tw-gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="AIP Resources"
            linkTwo="/resource-center"
            textThree="Reports"
            linkThree="/resource-center"
          />
          <div className="tw-max-w-[51.188rem] ~tw-pt-[4.3rem]/[5rem] ~tw-pb-[2.5rem]/[4rem]">
            <p className="tw-font-playFair tw-leading-[3.3rem] ~tw-text-h4/[3rem] tw-text-gray80">
              Curated Resources
            </p>
          </div>
        </div>
        <ResourcesSm />
        <ResourcesTabs />
      </div>
    </div>
  );
};

export default CuratedResourcesPage;
