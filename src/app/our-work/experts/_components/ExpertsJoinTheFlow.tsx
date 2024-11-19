import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

const ExpertsJoinTheFlow = () => {
  return (
    <div className="tw-w-full tw-relative tw-pt-[10rem]">
      <Image
        src={JoinCirclesOne}
        alt=""
        className=" tw-absolute tw-top-[-13rem] tw-left-[3.938rem] tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      <Image
        src={PeachLeftSemiCircle}
        alt=""
        className=" tw-absolute tw-top-[-2rem] tw-left-0  tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className=" tw-absolute tw-top-[1rem] tw-right-0 tw-w-[15.313rem] tw-h-[15.125rem]"
      />
      <div className="tw-relative container tw-mx-auto">
        <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-[8.43rem]">
          <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
            <span className="tw-text-textPurple tw-font-playFairItalic">
              Join
            </span>{" "}
            The Flow
          </h2>
          <p className="tw-text-midGray tw-text-center ~tw-px-5/[20.94rem] tw-pt-[2.5rem]">
            At AIP, experts are not just contributors—they are partners in the
            journey of transforming philanthropy to build a better future for
            India. We look forward to welcoming you as part of this vibrant
            community of change-makers
          </p>
          <ButtonAnimation className=" tw-mt-[2.5rem] tw-text-darkPurple tw-border-2 tw-border-darkPurple hover:tw-text-white tw-bg-white hover:tw-bg-darkPurple tw-rounded-full  tw-py-[0.75rem] tw-px-[1.75rem]">
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

export default ExpertsJoinTheFlow;
