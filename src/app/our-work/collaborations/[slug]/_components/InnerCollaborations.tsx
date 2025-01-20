// import DownloadFileSvg from "@/components/svg/DowloadFileSvg";
// import EyeSvg from "@/components/svg/EyeSvg";
// import XSvg from "@/components/svg/XSvg";
// import YoutubeSvg from "@/components/svg/YoutubeSvg";
import Image from "next/image";

import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";

import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { TOneCollaboration } from "@/api/type";
import Cities from "./Cities";

const tabArray = ["New Delhi", "Mumbai", "Bangalore"];
type Props = {
  collaboration: TOneCollaboration;
  slug: string;
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
const InnerCollaborations = ({ collaboration, slug }: Props) => {
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
            linkOne="#"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
            textThree={collaboration?.title}
            linkThree={`/our-work/collaborations/${slug}`}
          />
        </div>
        {collaboration && <Cities collaboration={collaboration} slug={slug} />}
      </div>
    </>
  );
};

export default InnerCollaborations;
