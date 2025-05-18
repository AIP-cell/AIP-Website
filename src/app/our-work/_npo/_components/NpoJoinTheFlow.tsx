import MailSvg from "@/components/svg/MailSvg";
import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import JoinCirclesRight from "@public/svg/about/aip-founder-network/JoinCirclesRight.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
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
        className="hidden lg:block absolute top-[13rem] left-0  w-[18.625rem] h-[18.438rem]"
      />
      <Image
        src={JoinCirclesRight}
        alt=""
        className="hidden lg:block absolute top-[10rem] right-0 w-[15.313rem] h-[15.125rem]"
      />

      <div className="relative container mx-auto ~pb-[5rem]/[10rem]">
        <div className="relative flex flex-col items-center justify-center ~pt-0/[8.43rem]">
          <TextStaggerAnimation
            text="Join The NPO Repository "
            className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]"
          />
          <TextStaggerAnimation
            className="text-midGray text-center ~px-5/[20.94rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[1.5rem]/[1.25rem]"
            text=" We invite you to showcase your work and get the opportunity to join
            our NPO repository."
          />
          <div className="flex flex-col justify-center md:flex-row ~gap-[0.75rem]/[1.5rem] items-center ~pt-[1.5rem]/[2.5rem]">
            <div className=" text-white hover:text-darkPurple bg-darkPurple hover:bg-white transition-all duration-500 rounded-full  py-[0.75rem] px-[1.75rem]">
              <Link
                href="/contact"
                className=" flex items-center text-h9Copy5 gap-[0.5rem]"
              >
                <p className="">Contact Us</p>
                <MailSvg />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpoJoinTheFlow;
