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
    <div className="relative w-full ~pb-[5rem]/[12.75rem]">
      <Image
        src={BottomBg}
        alt="purple-curve"
        className="hidden lg:block absolute bottom-[-36rem] h-[75rem] w-full"
      />
      <Image
        src={PurpleTopSvg}
        alt="purple-curve"
        className="hidden lg:block absolute top-[8rem] right-0"
      />
      <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] pt-[5rem]">
        <BreadCrump
          textOne="Our Work"
          linkOne="/our-work"
          textTwo="Collaborations"
          linkTwo="/our-work/collaborations"
          textThree="slug"
          linkThree="/our-work/collaborations/slug"
        />
        <div className="relative grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 flex flex-col gap-10  ~pr-0/[6.563rem]">
            <div className="font-playFair">
              <p className="leading-[3.25rem] tracking-[-.04rem] text-h3 text-midGray">
                Systemic Impact Exemplars
              </p>
              <p className=" leading-[1.75rem] tracking-[-.02rem] font-playFairItalic text-h5 text-gray40 font-medium pt-[1rem]">
                Reports
              </p>
              <p className="font-inter leading-[1.4rem]  text-midGray  ~pt-[2rem]/[1.25rem] ~pr-0/[3rem]">
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
              <TabGroup className="flex flex-col justify-center pr-[3rem]">
                <LocationTabs tabArray={tabArray} listClassName="!w-full" />
              </TabGroup>
              <div className="block md:hidden pt-[2rem]">
                <Image
                  src={Systemic}
                  className=" w-full h-[30.89rem] object-cover"
                  alt="image"
                />
                <div className="flex pt-[2rem]">
                  <button className="group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl">
                    <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                      Download Event Report
                    </p>
                    <div className=" pt-[.1rem]">
                      <DownloadFileSvg className="size-[1.25rem]" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="">
                <h2 className="~text-h6M/h4 ~leading-[1.575rem]/[2.6rem] font-playFair ~pt-[2rem]/[1.25rem] text-gray80">
                  Launch Details
                </h2>
                <p className="~pt-[0.75rem]/[1.25rem] ~text-h9Copy4/h7Copy2 ~leading-[1.4rem]/[1.75rem] font-bold text-gray80 ">
                  25th - 30th Jun 2024
                  <span className="font-normal">&nbsp;|&nbsp;</span> 16:00
                  Hrs IST
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="order-2 md:order-none  ~pb-[2.5rem]/0  ~pt-[2.5rem]/0">
                <p className="font-playFair ~pb-[0.75rem]/4  ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                  Organised By
                </p>
                <div className="flex gap-4">
                  <div className=" flex items-center bg-white border border-1 border-gray10 rounded-xl ~w-[9.46rem]/[11.813rem] ~h-[4rem]/20 overflow-hidden">
                    <Image
                      src={Foundation1}
                      className="object-contain "
                      alt="foundation"
                    />
                  </div>
                  <div className="flex items-center border border-1 bg-white border-gray10 rounded-xl ~w-[5.49rem]/[6.863rem] ~h-[4rem]/20 overflow-hidden">
                    <Image
                      src={Impact}
                      className="object-contain   "
                      alt="foundation"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-none ~pt-0/[2.5rem] ~pb-[2.5rem]/0 border-b border-gray10 md:border-none">
                <p className="font-playFair ~pb-[0.75rem]/4 ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                  In Collaboration With
                </p>
                <div className="flex gap-4">
                  <div className="~w-[7.75rem]/[9.688rem] bg-white flex items-center ~h-[4rem]/[5rem] border border-1 border-gray10 rounded-xl overflow-hidden">
                    {/* ~py-[0.7rem]/[0.89rem] px-[0.3rem] */}
                    <Image
                      src={Foundation4}
                      className=" object-contain "
                      alt="foundation"
                    />
                  </div>
                  <div className="flex items-center bg-white border border-1 border-gray10 rounded-xl ~w-[4.12rem]/[5.388rem] ~h-[4rem]/20 overflow-hidden">
                    <Image
                      src={Foundation3}
                      className=" object-cover "
                      alt="foundation"
                    />
                  </div>
                  <div className="flex items-center rounded-xl h-[4rem] w-[4.4rem] overflow-hidden">
                    <Image
                      src={Foundation2}
                      alt="foundation"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="order-3 md:order-none pt-[2.5rem] border-t border-gray10 md:border-none">
                <p className="font-playFair pb-4 ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                  Catch up on Event Updates
                </p>

                <div className="flex gap-4">
                  <div className="bg-bgGray5 text-darkPurple hover:text-white hover:bg-darkPurple w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                    <YoutubeSvg className="size-[2rem]" />
                  </div>

                  <div className="bg-bgGray5 text-darkPurple hover:text-white hover:bg-darkPurple w-[3rem] h-[3rem] rounded-full flex items-center justify-center ">
                    <XSvg className="w-[1.063rem] h-[1.125rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block pt-[5rem]">
            <Image
              src={Systemic}
              className=" w-[25rem] object-cover"
              alt="image"
            />
            <div className="flex pt-[1.382rem]">
              <button className="group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl">
                <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                  Download Event Report
                </p>
                <div className=" pt-[.1rem]">
                  <DownloadFileSvg className="size-[1.25rem]" />
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
