import TestimonialSlick from "@/components/slick/TestimonialSlick";
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
const TestimonialsFromFounders = () => {
  return (
    <div className="tw-pt-[12.5rem]">
      <h2 className="tw-font-playFair tw-leading-[3.3rem] tw-text-gray80 tw-text-h2 tw-text-center">
        Testimonials from 
      </h2>
      <h2 className="tw-italic tw-leading-[3.3rem] tw-font-playFair tw-text-textPurple tw-text-h2 tw-text-center">
       Some of the Founders 
      </h2>

      <TestimonialSlick slickArray={testimonialsArray} />
    </div>
  );
};

export default TestimonialsFromFounders;
