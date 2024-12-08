import TestimonialSlick from "@/components/slick/TestimonialSlick";
import Image from "next/image";
import PurpleBottomSvg from "@public/svg/products-and-services/project-and-programs/bottomRightPurpleCurve.svg";

const testimonialsArray: any[] = [
  {
    name: "0Ashish Dhawan",
    work: "The Convergence Foundation",
    desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
  },
  {
    name: "0Pritihi Jain",
    work: "Rohini Nilekani Philanthropies",
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
const TestimonialsProjectProgram = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={PurpleBottomSvg}
        alt="purple-curve"
        className="tw-hidden lg:tw-block tw-absolute tw-top-[-1rem] tw-right-0"
      />
      <div className="tw-py-[7.53rem] tw-relative container tw-mx-auto">
        <h2 className="tw-font-playFair tw-text-gray80 ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem] tw-text-center">
          <span className="tw-text-textPurple tw-font-playFairItalic">
            Gallery
          </span>
          &nbsp;Of Voices
        </h2>
        <p className="~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4 tw-text-center ~tw-pt-[0.75rem]/[1.25rem] tw-text-midGray">
          Some words from the launch.
        </p>
        <TestimonialSlick slickArray={testimonialsArray} />
      </div>
    </div>
  );
};

export default TestimonialsProjectProgram;
