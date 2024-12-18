// import TestimonialRespSlick from "@/components/slick/TestimonialRespSlick";
import { TTestimonials } from "@/api/type";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import PeachCurve from "@public/svg/products-and-services/project-and-programs/testimonialRightPeachCurve.svg";
import Image from "next/image";
import React from "react";
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
type Props = {
  testimonials: TTestimonials[];
};
const InnerCollaborationTestimonials = ({ testimonials }: Props) => {
  return (
    <div className="relative w-full">
      <Image
        src={PeachCurve}
        alt="peach-curve-testimonial"
        className="hidden xl:block absolute top-0 right-0"
      />
      <div className="~py-[5rem]/[7.563rem] relative container mx-auto">
        <h2 className="text-center font-playFair ~pb-[0.5rem]/[1.25rem] ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80">
          <span className="font-playFairItalic text-textPurple">
            Gallery&nbsp;
          </span>
          Of Voices
        </h2>
        <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray text-center ">
          Some words from the launch.
        </p>
        <TestimonialSlick slickArray={testimonials} />
        {/* <TestimonialRespSlick slickArray={testimonialsArray} /> */}
      </div>
    </div>
  );
};

export default InnerCollaborationTestimonials;
