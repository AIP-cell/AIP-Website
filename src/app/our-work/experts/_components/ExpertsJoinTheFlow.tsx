import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

const ExpertsJoinTheFlow = () => {
  return (
    <div className="w-full relative ~pt-[7.5rem]/[10rem]">
      <Image
        src={JoinCirclesOne}
        alt=""
        className="hidden lg:block absolute top-[-13rem] left-[3.938rem] w-[18.625rem] h-[18.438rem]"
      />
      <Image
        src={PeachLeftSemiCircle}
        alt=""
        className="hidden lg:block absolute top-[-2rem] left-0  w-[18.625rem] h-[18.438rem]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className="hidden lg:block absolute top-[1rem] right-0 w-[15.313rem] h-[15.125rem]"
      />
      <div className="relative container mx-auto">
        <div className="relative flex flex-col items-center justify-center ">
          <TextStaggerAnimation
            text="<color>Join</color> The Flow"
            className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]"
          />
          <p className="text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] text-center ~px-5/[20.94rem] ~pt-[1rem]/[2.5rem]">
            At AIP, experts are not just contributors—they are partners in the
            journey of transforming philanthropy to build a better future for
            India. We look forward to welcoming you as part of this vibrant
            community of change-makers
          </p>
          <ButtonAnimation className=" ~mt-[2rem]/[2.5rem] text-darkPurple border-2 border-darkPurple hover:text-white bg-white hover:bg-darkPurple rounded-full  py-[0.75rem] px-[1.75rem]">
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
  );
};

export default ExpertsJoinTheFlow;
