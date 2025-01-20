"use client";
import React, { useState } from "react";
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
import BreadCrump from "@/components/bread-crump/BreadCrump";
import LocationTabs from "./LocationTab";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import { TOneCollaboration } from "@/api/type";
import TabListAndRespSelect from "@/app/resource-center/_components/TabListAndRespSelect";
import Agenda from "./Agenda";
import InnerCollaborationsVideo from "./InnerCollaborationsVideo";
import InnerCollaborationTestimonials from "./InnerCollaborationTestimonials";
import dayjs from "dayjs";
import useClient from "@/hooks/useClient";
import { StorageUrl } from "@/utils/BaseUrl";
import Gallery from "@/app/our-work/projects-and-programs/[slug]/_components/Gallery";
import Media from "@/app/our-work/projects-and-programs/[slug]/_components/Media";

const agendaArray = [
  {
    title: "Registration + Tea and Coffee",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
  },
  {
    title: "Welcome Address by Vikram Bhalla ",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "Managing Director & Senior Partner, BCG",
  },
  {
    title: "Unveiling of the report",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "“Wealth with Purpose: A Report on Private Indian Philanthropy” by AIP Core Founders, NCR Advisory Council Members and BCG Leaders.",
  },
  {
    title: "Presentation on the report",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "By Abhishek Gopalka, Managing Director and Partner, BCG and Amitabh Jaipuria, CEO, AIP",
  },
  {
    title: "Conversation",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "“Navigating Philanthropy in India” featuring:",
  },
  {
    title: "Closing remarks",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "By Ashish Dhawan, Founder-CEO,The Convergence Foundation; Core Founder, AIP",
  },
];

type Props = {
  collaboration: TOneCollaboration;
  slug: string;
};
const Cities = ({ collaboration, slug }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const client = useClient();
  if (!client) {
    return;
  }
  const cities = collaboration?.cities;
  const fromDate = dayjs(cities.at(selectedIndex)?.fromDate).format("D");
  const toDate = dayjs(cities.at(selectedIndex)?.toDate).format("D MMMM YYYY");
  const timeFormate = dayjs(cities.at(selectedIndex)?.time).format("HH IST");

  return (
    <div className="">
      <div className="relative grid lg:grid-cols-3 gap-5 container mx-auto ~px-[1.25rem]/[7.8rem] z-50">
        <div className="lg:col-span-2 flex flex-col gap-10  ~pr-0/[6.563rem]">
          <div className="font-playFair">
            <p className="leading-[3.25rem] tracking-[-.04rem] text-h3 text-midGray">
              {collaboration?.title}
            </p>
            <p className=" leading-[1.75rem] tracking-[-.02rem] font-playFairItalic text-h5 text-gray40 font-medium pt-[1rem]">
              {collaboration?.category}
            </p>
            <p className="font-inter leading-[1.4rem]  text-midGray  ~pt-[2rem]/[1.25rem] ~pr-0/[3rem]">
              {collaboration?.description}
            </p>
          </div>

          <div className="">
            <TabGroup
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
              className="flex flex-col justify-center pr-[3rem]"
            >
              <LocationTabs
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                tabArray={cities}
                listClassName="!w-full"
              />
            </TabGroup>
            <div className="block md:hidden pt-[2rem]">
              <Image
                src={Systemic}
                className=" w-full h-[30.89rem] object-cover"
                alt="Systemic-image"
              />
             {cities?.at(selectedIndex)?.report  && <div className="flex pt-[2rem]">
                <Link
                  href={cities?.at(selectedIndex)?.report ?? ""}
                  download
                  target="_blank"
                  className="group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl"
                >
                  <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                    Download Event Report
                  </p>
                  <div className=" pt-[.1rem]">
                    <DownloadFileSvg className="size-[1.25rem]" />
                  </div>
                </Link>
              </div>}
            </div>
            <div className="">
              <h2 className="~text-h6M/h4 ~leading-[1.575rem]/[2.6rem] font-playFair ~pt-[2rem]/[1.25rem] text-gray80">
                Launch Details
              </h2>
              <p className="~pt-[0.75rem]/[1.25rem] ~text-h9Copy4/h7Copy2 ~leading-[1.4rem]/[1.75rem] font-bold text-gray80 ">
                {fromDate}th - {toDate}
                <span className="font-normal">&nbsp;|&nbsp;</span>
                {timeFormate}
                {/* 16:00 Hrs IST */}
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="order-2 md:order-none  ~pb-[2.5rem]/0  ~pt-[2.5rem]/0">
              <p className="font-playFair ~pb-[0.75rem]/4  ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                Organised By
              </p>
              <div className="flex flex-wrap gap-4">
                {cities
                  ?.at(selectedIndex)
                  ?.organisationDetails?.map((items, i) => (
                    <div
                      key={i}
                      className=" flex items-center bg-white border border-1 border-gray10 rounded-xl ~w-[9.46rem]/[11.813rem] ~h-[4rem]/20 overflow-hidden"
                    >
                      <div className="relative ~w-[9.46rem]/[11.813rem] ~h-[4rem]/20">
                        <Image
                          src={StorageUrl + items?.image}
                          className="object-contain "
                          fill
                          alt="foundation"
                        />
                      </div>
                    </div>
                  ))}
                {/* <div className="flex items-center border border-1 bg-white border-gray10 rounded-xl ~w-[5.49rem]/[6.863rem] ~h-[4rem]/20 overflow-hidden">
                  <Image
                    src={Impact}
                    className="object-contain   "
                    alt="foundation"
                  />
                </div> */}
              </div>
            </div>
            <div className="order-1 md:order-none ~pt-0/[2.5rem] ~pb-[2.5rem]/0 border-b border-gray10 md:border-none">
              <p className="font-playFair ~pb-[0.75rem]/4 ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                In Collaboration With
              </p>
              <div className="flex gap-4">
                {cities?.at(selectedIndex)?.collaborations?.map((items, i) => (
                  <div
                    key={i}
                    className="~w-[7.75rem]/[9.688rem] bg-white flex items-center ~h-[4rem]/[5rem] border border-1 border-gray10 rounded-xl overflow-hidden"
                  >
                    {/* ~py-[0.7rem]/[0.89rem] px-[0.3rem] */}
                    <div className="relative ~w-[7.75rem]/[9.688rem] ~h-[4rem]/[5rem]">
                      <Image
                        src={StorageUrl + items?.image}
                        className=" object-contain "
                        fill
                        alt="foundation"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {(cities?.at(selectedIndex)?.youtube ||
              cities?.at(selectedIndex)?.twitter) && (
              <div className="order-3 md:order-none pt-[2.5rem] border-t border-gray10 md:border-none">
                <p className="font-playFair pb-4 ~leading-[1.575rem]/[1.75rem] font-medium tracking-[-.02rem] ~text-h6M/h5 text-gray80">
                  Catch up on Event Updates
                </p>

                <div className="flex gap-4">
                  {cities?.at(selectedIndex)?.youtube && (
                    <Link
                      href={cities?.at(selectedIndex)?.youtube ?? ""}
                      target="_blank"
                      className="bg-bgGray5 text-darkPurple hover:text-white hover:bg-darkPurple w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
                    >
                      <YoutubeSvg className="size-[2rem]" />
                    </Link>
                  )}
                  {cities?.at(selectedIndex)?.twitter && (
                    <Link
                      href={cities?.at(selectedIndex)?.twitter ?? ""}
                      target="_blank"
                      className="bg-bgGray5 text-darkPurple hover:text-white hover:bg-darkPurple w-[3rem] h-[3rem] rounded-full flex items-center justify-center "
                    >
                      <XSvg className="w-[1.063rem] h-[1.125rem]" />
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block pt-[5rem]">
          <Image
            src={Systemic}
            className=" w-[25rem] object-cover"
            alt="image"
          />
          <div className="flex pt-[1.382rem]">
            <Link
              href={StorageUrl + cities?.at(selectedIndex)?.report}
              download
              target="_blank"
              className="group bg-darkPurple border-2 border-darkPurple hover:bg-white  transition-all  hover:text-darkPurple text-white hover:border-2 hover:border-darkPurple px-7 py-3 flex items-center gap-[0.75rem] w-fit rounded-3xl"
            >
              <p className=" font-inter  text-h9Copy5 leading-[1.225rem]">
                Download Event Report
              </p>
              <div className=" pt-[.1rem]">
                <DownloadFileSvg className="size-[1.25rem]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={BottomBg}
          alt="peach-long-curve"
          className="hidden lg:block absolute lg:~top-[-31rem]/[-23rem] h-[75rem] w-full z-10"
        />
        {cities.length != 0 && (
          <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] ~pt-[5rem]/[12.75rem]">
            <Agenda agendaArray={cities?.at(selectedIndex)?.agenda} />
            {cities?.at(selectedIndex)?.linkOrVideo && (
              <InnerCollaborationsVideo
                linkOrVideo={cities?.at(selectedIndex)?.linkOrVideo}
                video={cities?.at(selectedIndex)?.Video}
                videoLink={cities?.at(selectedIndex)?.videoLink}
              />
            )}
          </div>
        )}
        {cities.length != 0 && (
          <>
            {cities?.at(selectedIndex)?.gallery.galleryImages.length != 0 && (
              <div className="container mx-auto ~pt-[3rem]/0">
                <Gallery
                  galleryImages={
                    cities?.at(selectedIndex)?.gallery.galleryImages
                  }
                  galleryLink={`/our-work/collaborations/${slug}/event-gallery?city=${
                    cities?.at(selectedIndex)?.name
                  }`}
                />
              </div>
            )}
            {cities?.at(selectedIndex)!.media.length != 0 && (
              <Media media={cities?.at(selectedIndex)!.media} />
            )}
            {cities?.at(selectedIndex)!.testimonials.length != 0 && (
              <InnerCollaborationTestimonials
                testimonials={cities?.at(selectedIndex)!.testimonials}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cities;
