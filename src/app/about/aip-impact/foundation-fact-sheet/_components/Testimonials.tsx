import React from "react";
import TestimonialSlick from "../../../../../components/slick/TestimonialSlick";
import RightWave from "@public/svg/about/aip-impact/testimonialLeftPeachWave.svg";
import Image from "next/image";
const testimonialsArray: any[] = [
  {
    image: "/images/sample.png",
    name: "0Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    image: "/images/sample.png",
    name: "0Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },

  {
    image: "/images/sample.png",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    image: "/images/sample.png",
    name: "1Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },
];
const Testimonials = () => {
  return (
    <div className="~mt-[7.5rem]/[12.5rem] relative">
      <Image
        src={RightWave}
        alt=""
        className="hidden lg:block left-0 absolute top-0"
      />
      <div className="relative container mx-auto">
        <h2 className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center">
          Philanthropist
          <span className="font-playFairItalic text-textPurple">
            &nbsp;Speak
          </span>
        </h2>
        <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray ~pt-[0.8rem]/[1.25rem] text-center">
          Some testimonials from our philanthropists.
        </p>
        <TestimonialSlick slickArray={testimonialsArray} />
      </div>
    </div>
  );
};

export default Testimonials;
