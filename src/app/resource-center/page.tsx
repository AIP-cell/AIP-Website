import React from "react";
import Link from "next/link";
import ResourcesTabs from "./_components/ResourcesTabs";
import BreadCrump from "@/components/bread-crump/BreadCrump";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <div className="container tw-mx-auto tw-relative tw-pt-[5rem]">
        <div className="tw-px-[7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="/resource-center"
            textTwo="AIP Resources"
            linkTwo="/resource-center"
            textThree="Reports"
            linkThree="/resource-center"
          />
          <div className="tw-max-w-[51.188rem] tw-pb-[4rem]">
            <p className="tw-font-playFair tw-leading-[3.3rem] tw-text-[3rem] tw-pb-[1.25rem] tw-text-gray80">
              AIP Resources
            </p>
            <p className="tw-leading-[1.4rem] tw-font-inter tw-text-midGray">
              A short description on the what the page is about. Giving has lagged
              behind despite a growing pool of first-generation wealth creators who
              have the ability to give forward. Giving has lagged behind despite a
              growing pool of first-generation wealth creators who have the ability
              to give forward.
            </p>
          </div>
        </div>
        <ResourcesTabs />
      </div>
    </div>
  );
};

export default page;
