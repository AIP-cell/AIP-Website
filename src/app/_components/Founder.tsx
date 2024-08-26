import React from "react";
import FounderBg from "../../../public/svg/foundersBg.svg";
import ASvg from "../../../public/svg/aSvg.svg";
import PurPleCurveSvg from "../../../public/svg/purpleBgCurve.svg";
import BlueCurveSvg from "../../../public/svg/blueBgCurve.svg";
// import Ex from "../../../public/";
import Image from "next/image";
import ACardWithPlaySign from "@/components/cards/aCards/ACardWithPlaySign";
import PCardWithPlaySign from "@/components/cards/pCards/PCardWithPlaySign";
const Founder = () => {
  return (
    <div className=" container tw-mx-auto tw-relative tw-h-[110rem]">
      <Image src={FounderBg} alt="" className="tw-absolute tw--top-[18rem]" />
      <Image src={PurPleCurveSvg} alt="" className="tw-absolute tw-top-[18rem] tw-right-0" />
      <Image src={BlueCurveSvg} alt="" className="tw-absolute tw-bottom-[5rem] tw-left-0" />
      <div className="tw-px-[7.8rem] tw-pt-[10.3rem]">
        <h3 className="tw-text-h2Heading2 tw-text-white/80  tw-relative tw-font-playFair">
          From our <i className="tw-text-white">Core-Founders</i>
        </h3>
        <div className="tw-relative tw-pt-[3.43rem] ">
         <div className="tw-flex tw-gap-[4.56rem]">
            <ACardWithPlaySign/>
            <PCardWithPlaySign/>
         </div>
         <div className="tw-flex tw-justify-end tw-gap-[4.56rem] tw-pt-[3.5rem]">
            <ACardWithPlaySign/>
            <PCardWithPlaySign/>
         </div>
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
