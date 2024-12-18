import TestimonialSlick from "@/components/slick/TestimonialSlick";
import Image from "next/image";
import PurpleBottomSvg from "@public/svg/products-and-services/project-and-programs/bottomRightPurpleCurve.svg";
import { TTestimonials } from "@/api/type";

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
type Props={
  testimonials:TTestimonials[]
}
const TestimonialsProjectProgram = ({testimonials}:Props) => {
  return (
    <div className="w-full relative">
      <Image
        src={PurpleBottomSvg}
        alt="purple-curve"
        className="hidden lg:block absolute top-[-1rem] right-0"
      />
      <div className="py-[7.53rem] relative container mx-auto">
        <h2 className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center">
          <span className="text-textPurple font-playFairItalic">
            Gallery
          </span>
          &nbsp;Of Voices
        </h2>
        <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center ~pt-[0.75rem]/[1.25rem] text-midGray">
          Some words from the launch.
        </p>
        <TestimonialSlick slickArray={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialsProjectProgram;
