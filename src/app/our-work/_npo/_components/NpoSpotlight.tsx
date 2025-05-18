import { TCaseStudies } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import CaseStudy from "@/components/cards/CaseStudy";
import CurveBg from "@public/svg/about/aip-impact/caseStudyPeachCurve.svg";
import CurvePeach from "@public/svg/peach-bg-curve-founders.svg";
import Image from "next/image";

type Props = {
  casestudies?: TCaseStudies[];
};

const NpoSpotlight = ({ casestudies }: Props) => {
  return (
    <div className="relative w-full">
      <Image
        src={CurveBg}
        alt=""
        className="hidden xl:flex absolute items-center top-[7rem] h-full left-0"
      />
      <Image
        src={CurvePeach}
        alt=""
        className="hidden xl:block absolute  bottom-[-2rem]  right-0"
      />

      <div className=" relative container mx-auto ~pb-[5rem]/[10rem]">
        <TextStaggerAnimation
          text="NPO <color>Spotlight</color>"
          className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-darkBrown font-playFair"
        />
        <div className="~pt-[2.5rem]/[6.56rem] flex flex-col ~gap-[3.5rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
          {casestudies?.map((item, i: number) => (
            <CardAnimation delay={0.1} key={i}>
              <CaseStudy
                key={i}
                index={i}
                slug={item?.slug}
                foundationName={item?.organisation}
                foundationNameClassName="!pt-[1.25rem]"
                initiativeName={item?.initiativeName}
                title={item?.title}
                desc={item?.description}
                image={item?.image}
                isLinkOrPdf={item?.isLinkOrPdf}
                file={item?.file}
                fileLink={item?.fileLink}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NpoSpotlight;
