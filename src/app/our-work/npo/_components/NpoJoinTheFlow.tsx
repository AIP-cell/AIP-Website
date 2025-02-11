import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

const NpoJoinTheFlow = () => {
  return (
    <div className="w-full relative ">
      <Image
        src={JoinCirclesOne}
        alt=""
        className="hidden lg:block absolute top-[0rem] left-[3.938rem] w-[18.625rem] h-[18.438rem]"
      />
      <Image
        src={PeachLeftSemiCircle}
        alt=""
        className="hidden lg:block absolute bottom-[-9.2rem] left-0  w-[18.625rem] h-[18.438rem]"
      />
      {/* <FadeInAnimation delay={0.2} x1="0" x2="-100%" className="hidden w-[15.313rem] h-[15.125rem] lg:block absolute bottom-[-3.9rem] right-0"> */}
      <Image
        src={JoinCirclesRight}
        alt=""
        className="hidden lg:block absolute bottom-[-3.9rem] right-0 w-[15.313rem] h-[15.125rem]"
      />
      {/* </FadeInAnimation> */}
      <div className="relative container mx-auto ">
        <div className="relative flex flex-col items-center justify-center ~pt-0/[8.43rem]">
          {/* <h2 className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]">
            <span className="text-textPurple font-playFairItalic">Join</span>{" "}
            The Flow
          </h2> */}
          <TextStaggerAnimation text="<color>Join</color> The Flow" className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]"/>
          <p className="text-midGray text-center ~px-5/[20.94rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[1.5rem]/[1.25rem]">
            We invite you to join our Core Founders, Founders, and our growing
            network of philanthropists and sector experts to see strategic
            philanthropy impact India’s transformation.
          </p>
          <div className="flex flex-col justify-center md:flex-row ~gap-[0.75rem]/[1.5rem] items-center ~pt-[1.5rem]/[2.5rem]">
            {/* <BgButton
              text="Register With Us"
              className="text-h9Copy5 leading-[1.225rem] py-[0.75rem] px-[1.75rem]"
            />
            <ButtonAnimation>
              <OutlineButton
                text="A Member Already? Login!"
                className="text-h9Copy5 leading-[1.225rem] py-[0.75rem] px-[1.75rem] font-medium "
                buttonClassName="rounded-full h-fit "
              />
            </ButtonAnimation> */}
            <ButtonAnimation className=" text-white hover:text-darkPurple bg-darkPurple hover:bg-white rounded-full  py-[0.75rem] px-[1.75rem]">
              <Link
                href="/contact"
                className=" flex items-center text-h9Copy5 gap-[0.5rem]"
              >
                <p className="">Contact Us</p>
                <MailSvg />
              </Link>
            </ButtonAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpoJoinTheFlow;
