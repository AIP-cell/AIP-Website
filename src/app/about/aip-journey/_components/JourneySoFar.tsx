import Image from "next/image";
import React from "react";
import ASvg from "@public/images/aSample.png";
const JourneySoFar = () => {
  return (
    <div className="flex flex-col items-center w-full container mx-auto ~pt-[5rem]/[10rem]">
      <h2 className="text-gray80 font-playFair ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] ">
        The
        <span className="font-playFairItalic text-textPurple">
          &nbsp;Journey
        </span>
        &nbsp; So Far
      </h2>
      <div className="flex flex-col md:flex-row ~gap-[2rem]/[6.563rem] ~pl-[1.25rem]/[6.121rem] ~pr-[1.25rem]/[9.563rem] pt-[3.5rem]">
        <Image
          src={ASvg}
          alt=""
          className="~w-[18.438rem]/[19.688rem] ~h-[21.563rem]/[23.024rem] "
        />
        <div className="~text-h9Copy5/h9Copy4 text-midGray ~leading-[1.225rem]/[1.4rem] pt-[1.688rem] flex flex-col gap-[1rem]">
          <p>
            <span className="font-bold">
              Accelerate Indian Philanthropy (AIP)
            </span>{" "}
            was founded in 2021 with an objective to transform the strategic
            giving landscape in India. AIP works with ultra-high net worth
            individuals and families (in India and the diaspora) to create
            sustainable impact by inspiring and enabling them to{" "}
            <span className="font-bold">
              give more, give sooner, and give better.
            </span>
          </p>

          <p>
            Founded by leading philanthropists Ashish Dhawan, Rohini Nilekani,
            and Amit Chandra, with Vishal Tulsyan subsequently joining them as a
            core founder, AIP has rapidly grown into a movement. Today, an
            additional 36 prominent individuals have joined our network as
            Founders, amplifying our impact and reach.
          </p>
          <p>
            With a team of 13 full-time experts, AIP leverages its deep
            knowledge of UHNI philanthropy to engage with a diverse community of
            philanthropists in creating meaningful change. We’ve curated a rich
            collection of case studies and insights from diverse philanthropic
            journeys, covering a wide range of sectors and “theories of change.”
            Additionally, we have a growing database of close to{" "}
            <span className="font-bold">1,500 credible NGOs</span>, enabling
            us to guide philanthropic efforts towards building effective and
            impactful giving portfolios
          </p>
          <p>
            Over the past three years, AIP has stayed true to its unique
            <span className="font-bold">pro-bono model</span>, while
            maintaining a neutral, non-judgmental, and “philanthropist-first”
            approach, focusing solely on maximizing the impact and scale of
            giving.
          </p>
          <p>
            AIP is driven by the belief that India’s wealth creators are eager
            to make a difference. We see immense potential for personal
            philanthropy to grow exponentially from current levels, and we are
            committed to making that vision a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySoFar;
