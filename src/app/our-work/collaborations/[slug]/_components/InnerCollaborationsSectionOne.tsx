import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
import EyeSvg from "@/components/svg/EyeSvg";
import XSvg from "@/components/svg/XSvg";
import YoutubeSvg from "@/components/svg/YoutubeSvg";
import Image from "next/image";
import Foundation1 from "@public/svg/projects-page/foundation1.png";
import Foundation2 from "@public/svg/projects-page/foundation2.png";
import Foundation3 from "@public/svg/projects-page/foundation3.png";
import Foundation4 from "@public/svg/projects-page/foundation4.png";
import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import BottomBg from "@public/svg/products-and-services/project-and-programs/bottomBgHeroSection.svg";

import Systemic from "@public/svg/projects-page/systemic.png";

import Impact from "@public/svg/projects-page/impact.png";

import Link from "next/link";
import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import LocationTabs from "./LocationTab";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";

const tabArray = ["New Delhi", "Mumbai", "Bangalore"];
const InnerCollaborationsSectionOne = () => {
  return (
    <div className="tw-relative tw-w-full ~tw-pb-[5rem]/[12.75rem]">
      <Image
        src={BottomBg}
        alt="purple-curve"
        className="tw-hidden lg:tw-block tw-absolute tw-bottom-[-36rem] tw-h-[75rem] tw-w-full"
      />
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="tw-hidden lg:tw-block tw-absolute tw-top-[8rem] tw-right-0"
      />
      <div className="container tw-mx-auto tw-relative ~tw-px-[1.25rem]/[7.8rem] tw-pt-[5rem]">
        <BreadCrump
          textOne="Our Work"
          linkOne="/our-work"
          textTwo="Collaborations"
          linkTwo="/our-work/collaborations"
          textThree="slug"
          linkThree="/our-work/collaborations/slug"
        />
        <div className="tw-relative tw-grid lg:tw-grid-cols-3 tw-gap-5">
          <div className="lg:tw-col-span-2 tw-flex tw-flex-col tw-gap-10  ~tw-pr-0/[6.563rem]">
            <div className="tw-font-playFair">
              <p className="tw-leading-[3.25rem] tw-tracking-[-.04rem] tw-text-h3 tw-text-midGray">
                Systemic Impact Exemplars
              </p>
              <p className=" tw-leading-[1.75rem] tw-tracking-[-.02rem] tw-font-playFairItalic tw-text-h5 tw-text-gray40 tw-font-medium tw-pt-[1rem]">
                Reports
              </p>
              <p className="tw-font-inter tw-leading-[1.4rem]  tw-text-midGray  ~tw-pt-[2rem]/[1.25rem] ~tw-pr-0/[3rem]">
                This report was conceptualised to identify and learn from
                organisations that have achieved large-scale impact by adopting
                the systems change approach. It profiles 20 of India’s leading
                SSOs, and aims to inspire and inform other social purpose
                organisations by building evidence on what works in the Indian
                context. The report serves as a comprehensive knowledge
                resource, intended to shape thinking on systems change.
              </p>
            </div>
            <div className="">
              <TabGroup className="tw-flex tw-flex-col tw-justify-center tw-pr-[3rem]">
                <LocationTabs tabArray={tabArray} listClassName="!tw-w-full" />
              </TabGroup>
              <div className="tw-block md:tw-hidden tw-pt-[2rem]">
                <Image
                  src={Systemic}
                  className=" tw-w-full tw-h-[30.89rem] tw-object-cover"
                  alt="image"
                />
                <div className="tw-flex tw-pt-[2rem]">
                  <button className="tw-group tw-bg-darkPurple tw-border-2 tw-border-darkPurple hover:tw-bg-white  tw-transition-all  hover:tw-text-darkPurple tw-text-white hover:tw-border-2 hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
                    <p className=" tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                      Download Event Report
                    </p>
                    <div className=" tw-pt-[.1rem]">
                      <DownloadFileSvg className="tw-size-[1.25rem]" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="">
                <h2 className="~tw-text-h6M/h4 ~tw-leading-[1.575rem]/[2.6rem] tw-font-playFair ~tw-pt-[2rem]/[1.25rem] tw-text-gray80">
                  Launch Details
                </h2>
                <p className="~tw-pt-[0.75rem]/[1.25rem] ~tw-text-h9Copy4/h7Copy2 ~tw-leading-[1.4rem]/[1.75rem] tw-font-bold tw-text-gray80 ">
                  25th - 30th Jun 2024
                  <span className="tw-font-normal">&nbsp;|&nbsp;</span> 16:00
                  Hrs IST
                </p>
              </div>
            </div>
            <div className="tw-flex tw-flex-col ">
              <div className="tw-order-2 md:tw-order-none  ~tw-pb-[2.5rem]/0  ~tw-pt-[2.5rem]/0">
                <p className="tw-font-playFair ~tw-pb-[0.75rem]/4  ~tw-leading-[1.575rem]/[1.75rem] tw-font-medium tw-tracking-[-.02rem] ~tw-text-h6M/h5 tw-text-gray80">
                  Organised By
                </p>
                <div className="tw-flex tw-gap-4">
                  <div className=" tw-flex tw-items-center tw-bg-white tw-border tw-border-1 tw-border-gray10 tw-rounded-xl ~tw-w-[9.46rem]/[11.813rem] ~tw-h-[4rem]/20 tw-overflow-hidden">
                    <Image
                      src={Foundation1}
                      className="tw-object-contain "
                      alt="foundation"
                    />
                  </div>
                  <div className="tw-flex tw-items-center tw-border tw-border-1 tw-bg-white tw-border-gray10 tw-rounded-xl ~tw-w-[5.49rem]/[6.863rem] ~tw-h-[4rem]/20 tw-overflow-hidden">
                    <Image
                      src={Impact}
                      className="tw-object-contain   "
                      alt="foundation"
                    />
                  </div>
                </div>
              </div>
              <div className="tw-order-1 md:tw-order-none ~tw-pt-0/[2.5rem] ~tw-pb-[2.5rem]/0 tw-border-b tw-border-gray10 md:tw-border-none">
                <p className="tw-font-playFair ~tw-pb-[0.75rem]/4 ~tw-leading-[1.575rem]/[1.75rem] tw-font-medium tw-tracking-[-.02rem] ~tw-text-h6M/h5 tw-text-gray80">
                  In Collaboration With
                </p>
                <div className="tw-flex tw-gap-4">
                  <div className="~tw-w-[7.75rem]/[9.688rem] tw-bg-white tw-flex tw-items-center ~tw-h-[4rem]/[5rem] tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-overflow-hidden">
                    {/* ~tw-py-[0.7rem]/[0.89rem] tw-px-[0.3rem] */}
                    <Image
                      src={Foundation4}
                      className=" tw-object-contain "
                      alt="foundation"
                    />
                  </div>
                  <div className="tw-flex tw-items-center tw-bg-white tw-border tw-border-1 tw-border-gray10 tw-rounded-xl ~tw-w-[4.12rem]/[5.388rem] ~tw-h-[4rem]/20 tw-overflow-hidden">
                    <Image
                      src={Foundation3}
                      className=" tw-object-cover "
                      alt="foundation"
                    />
                  </div>
                  <div className="tw-flex tw-items-center tw-rounded-xl tw-h-[4rem] tw-w-[4.4rem] tw-overflow-hidden">
                    <Image
                      src={Foundation2}
                      alt="foundation"
                      className="tw-object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="tw-order-3 md:tw-order-none tw-pt-[2.5rem] tw-border-t tw-border-gray10 md:tw-border-none">
                <p className="tw-font-playFair tw-pb-4 ~tw-leading-[1.575rem]/[1.75rem] tw-font-medium tw-tracking-[-.02rem] ~tw-text-h6M/h5 tw-text-gray80">
                  Catch up on Event Updates
                </p>

                <div className="tw-flex tw-gap-4">
                  <div className="tw-bg-bgGray5 tw-text-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-w-[3rem] tw-h-[3rem] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <YoutubeSvg className="tw-size-[2rem]" />
                  </div>

                  <div className="tw-bg-bgGray5 tw-text-darkPurple hover:tw-text-white hover:tw-bg-darkPurple tw-w-[3rem] tw-h-[3rem] tw-rounded-full tw-flex tw-items-center tw-justify-center ">
                    <XSvg className="tw-w-[1.063rem] tw-h-[1.125rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-hidden md:tw-block tw-pt-[5rem]">
            <Image
              src={Systemic}
              className=" tw-w-[25rem] tw-object-cover"
              alt="image"
            />
            <div className="tw-flex tw-pt-[1.382rem]">
              <button className="tw-group tw-bg-darkPurple tw-border-2 tw-border-darkPurple hover:tw-bg-white  tw-transition-all  hover:tw-text-darkPurple tw-text-white hover:tw-border-2 hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-items-center tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
                <p className=" tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                  Download Event Report
                </p>
                <div className=" tw-pt-[.1rem]">
                  <DownloadFileSvg className="tw-size-[1.25rem]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCollaborationsSectionOne;
