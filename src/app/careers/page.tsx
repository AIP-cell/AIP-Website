import React from "react";
import Image from "next/image";
import CareersHeroSection from "./_components/CareersHeroSection";
import WhyWorkWithAip from "./_components/WhyWorkWithAip";
import OpenRules from "./_components/OpenRules";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import bottomSvg from "@public/svg/careers/bottomPurpleVert.svg";

const testimonialsArray: any[] = [
  {
    name: "0Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    name: "0Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },

  {
    name: "1Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    name: "1Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },
];
const CareerPage = () => {
  return (
    <div className="pt-[5rem]">
      <CareersHeroSection />
      <WhyWorkWithAip />

      <OpenRules />

      <div className="w-full relative pb-[5rem]">
        <Image
          src={bottomSvg}
          alt=""
          className="hidden lg:block absolute left-0 top-[-12rem]"
        />
        <div className="relative container mx-auto">
          <p className="~pt-[5rem]/[12.5rem] text-darkBlack text-center tracking-[0.04rem] ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
            Testimonials
          </p>
          <TestimonialSlick slickArray={testimonialsArray} />
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
