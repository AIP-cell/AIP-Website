import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/aboutPage/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/aboutPage/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/aboutPage/philanthropist-network/leftCircles.svg";

const JoinTheFlow = () => {
  return (
    <div className="tw-relative container tw-mx-auto">
      <Image
        src={JoinCirclesOne}
        alt=""
        className=" tw-absolute tw-top-[5.75rem] tw-left-[3.938rem] tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      <Image
        src={PeachLeftSemiCircle}
        alt=""
        className=" tw-absolute tw-bottom-[-8.5rem] tw-left-0  tw-w-[18.625rem] tw-h-[18.438rem]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className=" tw-absolute tw-bottom-[-3.9rem] tw-right-0 tw-w-[15.313rem] tw-h-[15.125rem]"
      />
      <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-[12.5rem]">
        <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem]">
          <i className="tw-text-textPurple">Join</i> The Flow
        </h2>
        <p className="tw-text-midGray tw-text-center tw-px-[20.94rem] tw-pt-[1.25rem]">
          We invite you to join our Core Founders, Founders, and our growing
          network of philanthropists and sector experts to see strategic
          philanthropy impact India’s transformation.
        </p>
        <Link
          href=""
          className=" tw-mt-[2.5rem] tw-bg-darkPurple tw-rounded-full  tw-py-[0.75rem] tw-px-[1.75rem]"
        >
          <div className="tw-text-white tw-flex tw-gap-[0.5rem]">
            <p className="">Contact Us</p>
            <MailSvg />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JoinTheFlow;
