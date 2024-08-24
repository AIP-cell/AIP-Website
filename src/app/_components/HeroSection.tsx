import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="tw-overflow-hidden container tw-mx-auto tw-relative tw-h-screen ">
      <Image src="/svg/heroBg.svg" alt="" className="" fill />

      <div className="tw-absolute tw-top-[4rem] tw-left-[1.25rem]">
        <div className="tw-relative tw-size-[11.875rem] ">
          <Image src="/svg/ovalPeach.svg" alt="" fill className="" />
        </div>
      </div>
      <div className="tw-flex tw-items-center  tw-justify-center tw-pt-[5.56rem] tw-relative">
        <div className="">
          <h2 className="tw-text-h1Heading1 tw-font-playFair tw-leading-[3.7rem] tw-w-[38.125rem] ">
            AIP is a peer network that <i className="tw-text-textPurple">channels the flow</i> to
            accelerate strategic giving in India - a movement{" "}
            <i className="tw-text-textPurple">by and for philanthropists</i>
          </h2>
        </div>
        <div className="tw-relative tw-w-[29.6rem] tw-h-[27.8rem] ">
          <Image src="/svg/vecto30.svg" alt="" fill className="tw-z-20"/>
          <div className="tw-absolute tw-inset-0 tw-z-10">
            <div className="tw-relative tw-w-[27.846rem] tw-h-[29.17rem]">
              <Image
                src="/svg/ellipsePeach.svg"
                alt=""
                fill
                className="tw-z-[-2] tw-rotate-[-109.42deg]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Image
        src="/svg/vecto30.svg"
        alt="speaker"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center top",
          clipPath:
            "polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)",
          WebkitClipPath:
            "polygon(91% 97%, 91% 91%, 97% 91%, 97% 0%, 0% 0%, 0% 91%, 84% 91%, 91% 97%)",
        }}
        className={``}
      /> */}
    </div>
  );
};

export default HeroSection;
