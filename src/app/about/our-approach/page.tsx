import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bg from "@public/svg/approachPurpleBg.svg";
import FivePModel from "./_components/FivePModel";
import ovalPeach from "@public/svg/ovalPeach.svg";
const page = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <div className="tw-relative tw-overflow-hidden">
        <Image
          src={Bg}
          alt=""
          className="tw-absolute  -tw-top-[5.5rem]  tw-right-0"
        />

        <div className="tw-absolute  tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
          <Link
            href=""
            className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
          >
            {"<"} About Us &nbsp;/&nbsp;
          </Link>
          <Link href="#">The AIP Approach</Link>
        </div>
        <div className="tw-pl-[7.8rem] tw-pr-[34rem] container tw-mx-auto">
          <h4 className="tw-pt-[6.5rem] tw-leading-[1.3rem] tw-font-inter tw-font-semibold tw-text-textPurple">
            The AIP Approach
          </h4>
          <h3 className="tw-pt-[0.75rem] tw-text-gray80 tw-text-h4Heading4 tw-font-playFair tw-leading-[2.6rem]">
            Personal Philanthropy is almost never linear, it goes through its
            twists and turns, from initiation to experimentation, slowly
            gathering conviction and strength, and finally maturing into a
            joyful and fulfilling life experience. Just as rivers carry water,
            philanthropy channels resources like money or time towards causes,
            circulating goodwill.{" "}
            <i className="tw-text-textPurple">AIP channels the flow.</i>
          </h3>
        </div>
        <div className="container tw-mx-auto tw-relative tw-pt-[12.5rem] tw-pb-[5rem] tw-pr-[14.375rem] tw-pl-[27.5rem]">
          <Image
            src={ovalPeach}
            alt=""
            className="tw-absolute tw-top-[4.5rem] tw-size-[17.62rem]  tw-left-[18rem]"
          />
          <h3 className="tw-relative tw-text-gray80 tw-text-h4Heading4 tw-font-playFair tw-leading-[2.6rem]">
            Founded in 2021 with an objective to transform the strategic giving
            landscape in India. AIP works with ultra-high net worth individuals
            and families (in India and the diaspora) to create sustainable
            impact by inspiring and enabling them to
            <i className="tw-text-textPurple">
              give more, give sooner, and give better
            </i>
          </h3>
        </div>
      </div>
      {/* <div className=""> */}

      {/* </div> */}
      <FivePModel />
    </div>
  );
};

export default page;
