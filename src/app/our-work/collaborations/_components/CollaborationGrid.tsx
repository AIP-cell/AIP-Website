import React from "react";
import bcgSvg from "@public/svg/projects-page/bcg.svg";
import Image from "next/image";
import Link from "next/link";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

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
      {datas.map((item, i) => (
        <div
          key={i}
          className="tw-relative tw-flex tw-justify-between tw-py-8 tw-w-full  tw-pb-9 tw-border-b tw-border-gray10"
        >
          <div className="tw-w-[76%] tw-flex tw-gap-[2rem]">
            <div className="tw-leading-[1.4rem] tw-w-[14%]">
              <p className="tw-font-bold tw-text-midGray">11 Jul 2024</p>
              <p className="tw-pt-3 tw-pb-[2.125rem] tw-text-midGray">Report</p>
            </div>
            <div className="tw-w-[85%]">
              <Link href={`/our-work/collaborations/${item.title}`}>
                <p className="tw-font-playFair tw-text-h4 tw-text-gray80 tw-leading-[2.6rem] tw-underline tw-underline-offset-4 tw-decoration-[1px]">
                  {item.title}
                </p>
              </Link>
              <p className="tw-py-4 tw-line-clamp-4 tw-text-ellipsis tw-leading-[1.4rem] tw-font-inter tw-text-midGray tw-pb-4">
                {item.desc}
              </p>
            </div>
            {/* <ButtonAnimation className="tw-pt-[1rem]">
              <Link
                href="/products-and-services/collaborations/slug"
                className="tw-bg-white tw-w-fit tw-rounded-3xl tw-py-3 tw-px-7 hover:tw-bg-darkPurple hover:tw-text-white tw-transition-all tw-border-2 tw-border-darkPurple tw-font-inter tw-text-h9Copy5 leading-[1.225rem]  tw-text-darkPurple tw-font-medium"
              >
                View More
              </Link>
            </ButtonAnimation> */}
          </div>
          <div className="tw-w-[24%] tw-flex tw-flex-col tw-items-end tw-leading-[1.4rem]">
            <p className="tw-text-gray50 tw-pb-3">In Collaboration with:</p>
            <div className="tw-flex tw-justify-end tw-gap-[0.75rem] tw-flex-wrap">
              <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                <Image src={bcgSvg} alt="bcg" className="tw-size-[2.625rem]" />
              </div>
              <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                <Image src={bcgSvg} alt="bcg" className="tw-size-[2.625rem]" />
              </div>
              <div className="tw-py-[0.563rem]  tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                <Image src={bcgSvg} alt="bcg" className="tw-size-[2.625rem]" />
              </div>
              <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                <Image src={bcgSvg} alt="bcg" className="tw-size-[2.625rem]" />
              </div>
              <div className="tw-py-[0.563rem] tw-shrink-0 tw-px-[.68rem] tw-w-fit tw-bg-bgCollab tw-rounded-[1.25rem] ">
                <Image src={bcgSvg} alt="bcg" className="tw-size-[2.625rem]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollaborationGrid;
