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
    <div className="~tw-mt-[7.5rem]/[12.5rem] tw-relative">
      <Image
        src={RightWave}
        alt=""
        className="tw-hidden lg:tw-block tw-left-0 tw-absolute tw-top-0"
      />
      <div className="tw-relative container tw-mx-auto">
        <h2 className="tw-font-playFair tw-text-gray80 ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-text-center">
          Philanthropist
          <span className="tw-font-playFairItalic tw-text-textPurple">
            &nbsp;Speak
          </span>
        </h2>
        <p className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem] tw-text-midGray ~tw-pt-[0.8rem]/[1.25rem] tw-text-center">
          Some testimonials from our philanthropists.
        </p>
        <TestimonialSlick slickArray={testimonialsArray} />
      </div>
    </div>
  );
};

export default Testimonials;
