import React from "react";
import bcgSvg from "@public/svg/projectsPage/bcg.svg";
import Image from "next/image";
import Link from "next/link";

const datas = [
  {
    title: "Systemic Impact Exemplars ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
  {
    title: "Lorem ipsum dolor sit ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
  },
];

const CollaborationGrid = () => {
  return (
    <div>
      {" "}
      {datas.map((item, i) => (
        <div
          key={i}
          className="tw-flex tw-justify-between tw-py-8  tw-pb-9 tw-border-b tw-border-gray10"
        >
          <div className="">
            <p className="tw-font-playFair tw-text-h4 tw-text-gray80 tw-leading-[2.6rem]">
              {item.title}
            </p>
            <p className="tw-py-4 tw-leading-[1.4rem] tw-font-inter tw-text-midGray tw-pb-4">
              {item.desc}
            </p>
            <Link
              href="#"
              className="tw-bg-white tw-w-fit tw-rounded-3xl tw-py-3 tw-px-7 hover:tw-bg-darkPurple hover:tw-text-white tw-transition-all tw-border tw-border-1 tw-border-darkPurple tw-font-inter tw-text-h9BodyCopy5 leading-[1.225rem]  tw-text-darkPurple tw-font-medium"
            >
              View More
            </Link>
          </div>
          <div className="tw-flex tw-flex-col tw-items-end tw-leading-[1.4rem] tw-font-inter tw-w-full">
            <p className="tw-font-bold tw-text-midGray">11 Jul 2024</p>
            <p className="tw-pt-3 tw-pb-[2.125rem] tw-text-midGray">Report</p>
            <p className="tw-text-gray50 tw-pb-3">In Collaboration with:</p>
            <div className="tw-py-3 tw-px-[.875rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
              <Image src={bcgSvg} alt="bcg" className="tw-w-14 tw-h-14" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollaborationGrid;
