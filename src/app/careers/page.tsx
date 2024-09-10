import React from "react";
import Link from "next/link";
import Image from "next/image";

import PositionsGrid from "./_components/PositionsGrid";
import usersBg from "@public/svg/careers/users.svg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CareersHeroSection from "./_components/CareersHeroSection";
import WhyWorkWithAip from "./_components/WhyWorkWithAip";
import OpenRules from "./_components/OpenRules";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import bottomSvg from "@public/svg/careers/bottomPurpleVert.svg";

const testimonialsArray: any[] = [
  {
    a: {
      name: "0Ashish Dhawan",
      work: "The Convergence Foundation",
      desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
    },
    p: {
      name: "0Pritihi Jain",
      work: "Philanthrophy Partner, BLR, South",
      desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
    },
  },
  {
    a: {
      name: "1Ashish Dhawan",
      work: "The Convergence Foundation",
      desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
    },
    p: {
      name: "1Pritihi Jain",
      work: "Philanthrophy Partner, BLR, South",
      desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
    },
  },
];
const CareerPage = () => {
  return (
    <div className="~tw-pt-[8rem]/[5rem]">
      <CareersHeroSection />
      <WhyWorkWithAip />

      <OpenRules />

      <div className="tw-relative container tw-mx-auto">
        <Image
          src={bottomSvg}
          alt=""
          className="tw-absolute tw-left-0 tw-top-[-12rem]"
        />
        <p className="tw-pt-[12.5rem] tw-text-darkBlack tw-text-center tw-tracking-[0.04rem] tw-text-h2 tw-leading-[3.3rem] tw-font-playFair">
          Testimonials
        </p>
        <TestimonialSlick slickArray={testimonialsArray} />
      </div>
    </div>
  );
};

export default CareerPage;
