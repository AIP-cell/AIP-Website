import Image from "next/image";
import React from "react";
import ASvg from "@public/images/aSample.png";
const JourneySoFar = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-full container tw-mx-auto tw-pt-[10rem]">
      <h2 className="tw-text-gray80 tw-font-playFair tw-text-h2 tw-leading-[3.3rem] ">
        The
        <span className="tw-font-playFairItalic tw-text-textPurple">
          &nbsp;Journey
        </span>
        &nbsp; So Far
      </h2>
      <div className="tw-flex tw-gap-[6.563rem] tw-pl-[6.121rem] tw-pr-[9.563rem] tw-pt-[3.5rem]">
        <Image
          src={ASvg}
          alt=""
          className="tw-w-[19.688rem] tw-h-[23.024rem] "
        />
        <div className="tw-text-h9Copy4 tw-text-midGray tw-leading-[1.4rem] tw-pt-[1.688rem] tw-flex tw-flex-col tw-gap-[1rem]">
          <p>
            Accelerate Indian Philanthropy (AIP) was founded in 2021 with an
            objective to transform the strategic giving landscape in India. AIP
            works with ultra-high net worth individuals and families (in India
            and the diaspora) to create sustainable impact by inspiring and
            enabling them to give more, give sooner, and give better.
          </p>

          <p>
            AIP is incubated at The Convergence Foundation (TCF), a grant-making
            incubator run by philanthropist Ashish Dhawan that builds and scales
            new foundations in key areas of India
          </p>
          <p>
            Recognizing the pressing social challenges in the country and the
            untapped potential of high-net-worth individuals (HNWIs) and
            ultra-high-net-worth individuals (UHNIs)
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneySoFar;
