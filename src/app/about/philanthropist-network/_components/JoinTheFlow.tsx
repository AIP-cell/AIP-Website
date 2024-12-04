import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

const JoinTheFlow = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={JoinCirclesOne}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute tw-top-[0rem] tw-left-[3.938rem] tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      <Image
        src={PeachLeftSemiCircle}
        alt=""
        className="tw-hidden lg:tw-block tw-absolute tw-bottom-[-9.2rem] tw-left-0  tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      {/* <Image
        src={JoinCirclesRight}
        alt=""
        className=" tw-absolute tw-bottom-[-3.9rem] tw-right-0 tw-w-[15.313rem] tw-h-[15.125rem]"
      /> */}
      <div className="tw-relative container tw-mx-auto">
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center ~tw-pt-[7.5rem]/[8.43rem]">
          <h2 className="tw-font-playFair tw-text-gray80 ~tw-text-h4/h2 ~tw-leading-[2.6rem]/[3.3rem]">
            <span className="tw-text-textPurple tw-font-playFairItalic">
              Join
            </span>{" "}
            The Flow
          </h2>
          <p className="tw-text-midGray tw-text-center ~tw-px-[2.813rem]/[20.94rem] ~tw-pt-[1rem]/[1.25rem] ~tw-leading-[1.225rem]/[1.4rem] ~tw-text-h9Copy5/h9Copy4">
            We invite you to join our Core Founders, Founders, and our growing
            network of philanthropists and sector experts to see strategic
            philanthropy impact India’s transformation.
          </p>
          <ButtonAnimation className=" ~tw-mt-[2rem]/[2.5rem] tw-text-white hover:tw-text-darkPurple tw-bg-darkPurple hover:tw-bg-white tw-rounded-full  tw-py-[0.75rem] tw-px-[1.75rem]">
            <Link
              href=""
              className=" tw-flex tw-items-center tw-text-h9Copy5 tw-gap-[0.5rem]"
            >
              <p className="">Contact Us</p>
              <MailSvg />
            </Link>
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default JoinTheFlow;
