import React from "react";
import FounderBg from "../../../public/svg/foundersBg.svg";
import ASvg from "../../../public/svg/aSvg.svg";
import PurPleCurveSvg from "../../../public/svg/purpleBgCurve.svg";
import BlueCurveSvg from "../../../public/svg/blueBgCurve.svg";
// import Ex from "../../../public/";
import Image from "next/image";
const Founder = () => {
  return (
    <div className=" container mx-auto relative h-[110rem]">
      <Image src={FounderBg} alt="" className="absolute -top-[18rem]" />
      <Image src={PurPleCurveSvg} alt="" className="absolute top-[18rem] right-0" />
      <Image src={BlueCurveSvg} alt="" className="absolute bottom-[5rem] left-0" />
      <div className="px-[7.8rem]">
        <h3 className="text-h2Heading2 text-white/80 pt-[10.3rem] relative font-playFair">
          From our <i className="text-white">Core-Founders</i>
        </h3>
        <div className="relative">
          <Image src={ASvg} alt="" />
          {/* <div className="relative w-[18.4rem] h-[21.5rem] ">
            <Image
              src="/images/upcoming.png"
              alt="upcom"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                clipPath:
                  "polygon(295% 148%, 148% 0%, 0% 148%, 148% 295%, 237% 295%, 251% 301%, 295% 345%, 295% 148%)",
                WebkitClipPath:
                  "polygon(295% 148%, 148% 0%, 0% 148%, 148% 295%, 237% 295%, 251% 301%, 295% 345%, 295% 148%)",
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Founder;
