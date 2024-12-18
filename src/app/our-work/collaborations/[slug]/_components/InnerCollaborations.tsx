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
import { TOneCollaboration } from "@/api/type";
import TabListAndRespSelect from "@/app/resource-center/_components/TabListAndRespSelect";
import Cities from "./Cities";
import Agenda from "./Agenda";
import InnerCollaborationsVideo from "./InnerCollaborationsVideo";
import InnerCollaborationTestimonials from "./InnerCollaborationTestimonials";

const tabArray = ["New Delhi", "Mumbai", "Bangalore"];
type Props = {
  collaboration: TOneCollaboration;
  slug:string
};
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
const InnerCollaborations = ({ collaboration,slug }: Props) => {
  return (
    <>
      <div className="relative w-full ~pb-[5rem]/[12.75rem]">
       
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
        </div>
        <Cities collaboration={collaboration} slug={slug}/>
      </div>
    </>
  );
};

export default InnerCollaborations;
