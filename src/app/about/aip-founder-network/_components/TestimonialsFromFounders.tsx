import TestimonialSlick from "@/components/slick/TestimonialSlick";
import React from "react";
const testimonialsArray: any[] = [
  {
    a: {
      name: "0Ashish Dhawan",
      work: "The Convergence Foundation",
      desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ’’",
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
const TestimonialsFromFounders = () => {
  return (
    <div className="tw-pt-[12.5rem] tw-pb-[7.404rem]">
      <h2 className="tw-font-playFair tw-leading-[3.3rem] tw-text-gray80 tw-text-h2 tw-text-center">
        Philanthropist
        <span className="tw-font-playFairItalic tw-text-textPurple">&nbsp;Speak</span>
      </h2>
      <p className="tw-leading-[1.4rem] tw-text-midGray tw-pt-[1.25rem] tw-text-center">
      Some testimonials from our Founders.
      </p>
      <TestimonialSlick slickArray={testimonialsArray} />
    </div>
  );
};

export default TestimonialsFromFounders;
