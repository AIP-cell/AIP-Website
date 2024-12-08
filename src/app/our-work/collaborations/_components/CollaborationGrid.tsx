import React from "react";
import bcgSvg from "@public/svg/projects-page/bcg.svg";
import Image from "next/image";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

const datas = [
  {
    title: "Systemic Impact Exemplars ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
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
      {datas.map((item, i) => (
        <div
          key={i}
          className="tw-relative tw-flex tw-flex-col tw-justify-between ~tw-pt-[2.5rem]/8 tw-w-full  ~tw-pb-[1.25rem]/9 tw-border-b tw-border-gray10"
        >
          <div className="tw-w-full  tw-flex tw-flex-col md:tw-flex-row ~tw-gap-[1.25rem]/[2rem]">
            <div className="tw-flex md:tw-flex-col ~tw-gap-[1rem]/0 tw-leading-[1.4rem] tw-w-full tw-items-center md:tw-items-start md:tw-w-[14%]">
              <p className="tw-font-bold tw-text-midGray tw-leading-[1.4rem]">
                11 Jul 2024
              </p>
              <p className="~tw-pt-0/3 ~tw-pb-0/[2.125rem] tw-text-midGray tw-leading-[1.4rem]">
                Report
              </p>
            </div>
            <div className="tw-w-full md:tw-w-[80%]">
              <Link href={`/our-work/collaborations/${item.title}`}>
                <p className="tw-font-playFair ~tw-text-h4a/h4 tw-text-gray80 ~tw-leading-[2.113rem]/[2.6rem] tw-underline tw-underline-offset-4 tw-decoration-[1px]">
                  {item.title}
                </p>
              </Link>
              <p className="~tw-pt-[1.25rem]/4 tw-line-clamp-4 tw-text-ellipsis  tw-leading-[1.4rem] tw-font-inter tw-text-midGray ">
                {item.desc}
              </p>
            </div>
            <div className="tw-w-full md:tw-w-[35%] tw-flex tw-flex-col md:tw-items-end tw-leading-[1.4rem] ~tw-pt-0/4">
              <p className="tw-text-gray50 ~tw-pb-[0.5rem]/3">
                In Collaboration with:
              </p>
              <div className="tw-flex  md:tw-justify-end tw-gap-[0.75rem] tw-flex-wrap">
                <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="tw-size-[2.625rem]"
                  />
                </div>
                <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="tw-size-[2.625rem]"
                  />
                </div>
                <div className="tw-py-[0.563rem]  tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="tw-size-[2.625rem]"
                  />
                </div>
                <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="tw-size-[2.625rem]"
                  />
                </div>
                <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                  <Image
                    src={bcgSvg}
                    alt="bcg"
                    className="tw-size-[2.625rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollaborationGrid;
