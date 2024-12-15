// import TestimonialRespSlick from "@/components/slick/TestimonialRespSlick";
import { TTestimonials } from "@/api/type";
import TestimonialSlick from "@/components/slick/TestimonialSlick";
import React from "react";
const testimonialsArray: any[] = [
  {
    name: "a1Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ’’",
  },
  {
    name: "p1Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },
  {
    name: "a2Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    name: "p2Pritihi Jain",
    work: "Philanthrophy Partner, BLR, South",
    desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
  },
];
type Props = {
  testimonials: TTestimonials[];
};
const TestimonialsFromFounders = ({ testimonials }: Props) => {
  return (
    <div className="~pt-[8.125rem]/[12.5rem] pb-[7.404rem]">
      <h2 className="font-playFair ~leading-[2.6rem]/[3.3rem] text-gray80 ~text-h4/h2 text-center">
        Philanthropist
        <span className="font-playFairItalic text-textPurple">&nbsp;Speak</span>
      </h2>
      <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-midGray ~pt-[0.8rem]/[1.25rem] text-center">
        Some testimonials from our Founders.
      </p>
      <TestimonialSlick slickArray={testimonials} />
      {/* <TestimonialRespSlick slickArray={testimonialsArray} /> */}
    </div>
  );
};

export default TestimonialsFromFounders;
