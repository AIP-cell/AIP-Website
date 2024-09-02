import React from "react";
import Link from "next/link";
import Foundation1 from "@public/svg/projectsPage/foundation1.png";
import Foundation2 from "@public/svg/projectsPage/foundation2.png";
import Foundation3 from "@public/svg/projectsPage/foundation3.png";
import Foundation4 from "@public/svg/projectsPage/foundation4.png";
import Ex from "@public/svg/projectsPage/ex.svg";
import Youtube from "@public/svg/projectsPage/youtube.svg";
import Eye from "@public/svg/projectsPage/Show.svg";
import DownloadWhite from "@public/svg/projectsPage/downloadWhite.svg";
import Download from "@public/svg/download.svg";
import Impact from "@public/svg/projectsPage/Impact.png";
import Systemic from "@public/svg/projectsPage/systemic.png";
import Image from "next/image";
import Agenda from "./_components/Agenda";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import InnerCollaborationsSectionOne from "./_components/InnerCollaborationsSectionOne";
import InnerCollaborationsVideo from "./_components/InnerCollaborationsVideo";
import Gallery from "../../projects-and-programs/[slug]/_components/Gallery";
import Media from "../../projects-and-programs/[slug]/_components/Media";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import InnerCollaborationTestimonials from "./_components/InnerCollaborationTestimonials";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <InnerCollaborationsSectionOne />
      <div className="">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Agenda
        </p>
        <Agenda />
      </div>
      <InnerCollaborationsVideo />
      <div className="container tw-mx-auto">
        <Gallery />
      </div>
      <Media />
      <InnerCollaborationTestimonials />
    </div>
  );
};

export default page;
