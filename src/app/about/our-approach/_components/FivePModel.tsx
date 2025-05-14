import React from "react";
import Bg from "@public/svg/about/our-approach/fivePModelBg.svg";
import ImgTitleDescVer from "@/components/cards/ImgTitleDescVer";
import TopImage from "@public/images/fivePTopSection.png";
import BottomImage from "@public/images/fivePBottomSection.png";

import Image from "next/image";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
const threeP = [
  {
    src: "/svg/about/our-approach/perspectiveModel.svg",
    title: "Perspective",
    desc: "Build perspective through:  curated knowledge; connects between philanthropists, experts and NPOs; and field visits to guide impactful giving",
  },
  {
    src: "/svg/about/our-approach/purposeModel.svg",
    title: "Purpose",
    desc: "Help philanthropists and foundations clarify their  vision and  mission and build intergenerational alignment  through meaningful conversations and workshops ",
  },
  {
    src: "/svg/about/our-approach/processModel.svg",
    title: "Process",
    desc: "Provide guidance and support to set up and streamline the giving process through- setting up giving vehicles, building organisations, helping recruit leadership, and designing core philanthropic processes ",
  },
  {
    src: "/svg/about/our-approach/portfolioModel.svg",
    title: "Portfolio",
    desc: "Build a philanthropic portfolio that aligns with purpose and intent. Drawing up giving plans with a recommended set of impactful NPOs fit for purpose. Helping budget annual philanthropic giving",
  },
  {
    src: "/svg/about/our-approach/performanceModel.svg",
    title: "Performance",
    desc: "Equip philanthropists with frameworks and tools for impact assessments and facilitate partnerships with monitoring and evaluation (M&E) service providers, ensuring their giving is measurable and impactful",
  },
];

const FivePModel = () => {
  return (
  <>
      <div className="relative  w-full">
        <Image src={TopImage} alt="" className="w-full " />
        <div className="w-full bg-fivePBackground ~/md:~h-[110rem]/[71rem] lg:~h-[140rem]/[37rem] relative">
          <div className="absolute ~top-0/[-13rem] w-full">
            <div className="relative container mx-auto">
              <div className="relative flex flex-col items-center container mx-auto">
                <WordStaggerAnimation
                  text="<color>Partnering</color> The Flow"
                  className="~text-h4/h3 text-center text-gray80 ~leading-[2.6rem]/[3.1rem] font-playFair"
                />
                <p className="text-midGray ~pt-[0.75rem]/[1.25rem] ~px-[2.8rem]/[21rem] ~text-h9Copy5/h9Copy4 text-center ~leading-[1.225rem]/[1.4rem]">
                  At AIP, we help philanthropists move from Inspiration to Impact
                  through our proprietary 5P Framework. This structured approach
                  guides strategic giving, ensuring that every act of philanthropy
                  is thoughtful, effective, and transformative.
                </p>
                <div className="~pt-[5.68rem]/[5rem] flex flex-wrap justify-center ~gap-x-5/[3.8rem] ~gap-y-5/[3rem] max-[20rem]:px-[0.5rem] ~px-[2.7rem]/[6.43rem] max-md:bg-[#fcf5e3]">
                  {threeP.map((item, i) => (
                    <CardAnimation index={i} delay={0.2} key={i}>
                      <ImgTitleDescVer
                        totalWidth="!w-[18.7rem] md:!~w-[15rem]/[19.8rem]"
                        imageWidth="!w-[11.875rem]"
                        key={i}
                        src={item.src}
                        title={item.title}
                        titleClassName=" !text-gray80"
                        descClassName="leading-[1.4rem]"
                        desc={item.desc}
                      />
                    </CardAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={BottomImage} alt="" className="w-full " />
      </div>
        <div>
          <WordStaggerAnimation text="Since AIP is financially supported by its core founders and founders, 
  we are able to provide pro-bono support to philanthropists. This 
  ensures our engagement remains neutral, unbiased, and devoid of 
  conflicts. You don't need to be a founder to engage with us" className="~px-4/[14rem] font-light text-center ~text-h4a/h4 py-20 ~leading-[2.6rem]/[2.8rem] font-playFair tracking-[-1px]"/>
         
        </div>
  </>
  );
};

export default FivePModel;
