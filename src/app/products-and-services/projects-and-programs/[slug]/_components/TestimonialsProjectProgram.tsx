import TestimonialSlick from "@/components/slick/TestimonialSlick";
import Image from "next/image";
import PurpleBottomSvg from "@public/svg/products-and-services/project-and-programs/bottomRightPurpleCurve.svg";

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
const TestimonialsProjectProgram = () => {
  return (
    <div className="tw-py-[7.53rem] tw-relative container tw-mx-auto">
      <Image
        src={PurpleBottomSvg}
        alt="purple-curve"
        className="tw-absolute tw-top-[-1rem] tw-right-0"
      />
      <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-text-center">
        Testimonials
      </h2>
      <TestimonialSlick slickArray={testimonialsArray} />
    </div>
  );
};

export default TestimonialsProjectProgram;
