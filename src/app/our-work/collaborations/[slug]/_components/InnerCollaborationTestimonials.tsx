import TestimonialSlick from "@/components/slick/TestimonialSlick";
import PeachCurve from "@public/svg/products-and-services/project-and-programs/testimonialRightPeachCurve.svg";
import Image from "next/image";
import React from "react";
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
const InnerCollaborationTestimonials = () => {
  return (
    <div className="tw-relative tw-w-full">
        <Image
          src={PeachCurve}
          alt="peach-curve-testimonial"
          className="tw-absolute tw-top-0 tw-right-0"
        />
      <div className="tw-py-[7.563rem] tw-relative container tw-mx-auto">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Testimonials
        </p>
        <TestimonialSlick slickArray={testimonialsArray} />
      </div>
    </div>
  );
};

export default InnerCollaborationTestimonials;
