import Image from "next/image";
import React from "react";
import ASvg from "@public/images/aSample.png";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
const JourneySoFar = () => {
  return (
    <div className="flex flex-col items-center w-full container mx-auto ~pt-[5rem]/[10rem]">
      <TextStaggerAnimation
        text="The <color>Journey</color> So Far"
        className="text-gray80 font-playFair ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] "
      />
      <div className="flex flex-col md:flex-row ~gap-[2rem]/[6.563rem] ~pl-[1.25rem]/[6.121rem] ~pr-[1.25rem]/[9.563rem] pt-[3.5rem]">
        <Image
          src={ASvg}
          alt=""
          className="~w-[18.438rem]/[19.688rem] ~h-[21.563rem]/[23.024rem] "
        />
        <div className="~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem] pt-[1.688rem] flex flex-col gap-[1rem]">
          <p>
            AIP was formed about three years ago with the objective of helping
            India&apos;s wealth creators with their philanthropic work and enable
            them to Give More, Give Sooner, and Give Better. The insight that
            led to this organization was that philanthropy can indeed make a
            difference to India&apos;s transformation; that philanthropists were keen
            to make this difference and finally that philanthropists themselves
            are in the best position to inspire other philanthropists. In this
            sense AIP was conceived off as a movement of philanthropists and for
            philanthropists.
          </p>

          <p>
            The idea of AIP was conceived by Ashish Dhawan, Rohini Nilekani and
            Amit Chandra along with Vishal Tulsyan who joined them later as a
            “Core Founder”. Today AIP has over 40 other “Founders” as well, who
            support the organization and enable us to do what we do. AIP Has its
            own advisory Board.
            {/* " The idea of AIP was conceived by Ashish
            Dhawan, Rohini Nilekani and Amit Chandra along with Vishal Tulsyan
            who joined them later as a{" "}
            <span className="font-bold">Core Founder</span>. Today AIP has over
            40 other <span className="font-bold">Founders</span> as well, who
            support the organization and enable us to do what we do. AIP Has its
            own advisory Board." */}
          </p>
          <p>
            Our core philosophy and lens has always been to put philanthropists
            first and philanthropists always. We believe philanthropists
            themselves are in the best position to decide where and how to make
            their philanthropic investments. We do not “push” or “sell” any
            sector, organization or method of philanthropic investments.
            {/* Our core philosophy and lens has always been to put philanthropists
            first and philanthropists always. We believe philanthropists
            themselves are in the best position to decide where and how to make
            their philanthropic investments. We do not{" "}
            <span className="font-bold">push</span> or{" "}
            <span className="font-bold">sell</span> any sector, organization or
            method of philanthropic investments. */}
          </p>
          <p>
            AIP has a small but extremely experienced team of 13 people across
            philanthropist facing functions as well as research. As an
            organization, AIP is supported by Its core founders and founders who
            believe in AIP&apos;s mission and fund the organization. We are not
            grant-makers and our members&apos; giving is done directly by them and
            not routed through us. AIP does not charge any fee and our work is
            completely pro-bono.
            {/* AIP has a small but extremely experienced team of 13 people across
            philanthropist facing functions as well as research. As an
            organization, AIP is supported by Its core founders and founders who
            Believe in AIP&apos;s mission and fund the organization. We are not
            intermediaries nor grant-makers and our members&apos; giving is done
            directly by them and not routed through us. AIP does not charge any
            fee and our work is completely pro-bono. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySoFar;
