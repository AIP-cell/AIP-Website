import TestimonialSlick from "@/components/slick/TestimonialSlick";
import Image from "next/image";
import PurpleBottomSvg from "@public/svg/products-and-services/project-and-programs/bottomRightPurpleCurve.svg";
import { TTestimonials } from "@/api/type";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

type Props = {
  testimonials: TTestimonials[];
};
const TestimonialsProjectProgram = ({ testimonials }: Props) => {
  return (
    <div className="w-full relative">
      <Image
        src={PurpleBottomSvg}
        alt="purple-curve"
        className="hidden lg:block absolute top-[-1rem] right-0"
      />
      <div className="py-[7.53rem] relative container mx-auto">
        <TextStaggerAnimation
          text="<color>Gallery</color> Of Voices"
          className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center"
        />
        <TextStaggerAnimation
          text="Some words from the launch."
          className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center ~pt-[0.75rem]/[1.25rem] text-midGray"
        />
        <TestimonialSlick slickArray={testimonials} />
      </div>
    </div>
  );
};

export default TestimonialsProjectProgram;
