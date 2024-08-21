import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="overflow-hidden container mx-auto relative h-screen ">
      <Image src="/svg/heroBg.svg" alt="" className="" fill />

      <div className="absolute top-[4rem] left-[1.25rem]">
        <div className="relative size-[11.875rem] ">
          <Image src="/svg/ovalPeach.svg" alt="" fill className="" />
        </div>
      </div>
      <div className="flex items-center  justify-center pt-[5.56rem] relative">
        <div className="">
          <h2 className="text-h1Heading1 font-playFair leading-[3.7rem] w-[38.125rem] ">
            AIP is a peer network that <i className="text-textPurple">channels the flow</i> to
            accelerate strategic giving in India - a movement{" "}
            <i className="text-textPurple">by and for philanthropists</i>
          </h2>
        </div>
        <div className="relative w-[29.6rem] h-[27.8rem] ">
          <Image src="/svg/vecto30.svg" alt="" fill className="z-20"/>
          <div className="absolute inset-0 z-10">
            <div className="relative w-[27.846rem] h-[29.17rem]">
              <Image
                src="/svg/ellipsePeach.svg"
                alt=""
                fill
                className="z-[-2] rotate-[-109.42deg]"
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
