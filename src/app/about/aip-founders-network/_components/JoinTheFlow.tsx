import Image from "next/image";
import Link from "next/link";
import JoinCirclesOne from "@public/svg/about/circlesPeach.svg";
import PeachLeftSemiCircle from "@public/svg/about/philanthropist-network/leftCircles.svg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

const JoinTheFlow = () => {
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

      <div className="relative container mx-auto">
        <div className="relative flex flex-col items-center justify-center ~pt-[7.5rem]/[8.43rem]">
          <TextStaggerAnimation
            text="<color>Join</color> The Flow"
            className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem]"
          />
          <TextStaggerAnimation
            className="text-midGray text-center ~px-[2.813rem]/[20.94rem] ~pt-[1rem]/[1.25rem] ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4"
            text="We invite you to join our Core Founders, Founders, and our growing
            network of philanthropists and sector experts to see strategic
            philanthropy impact India’s transformation."
          />

          <ButtonAnimation className=" ~mt-[2rem]/[2.5rem] text-white hover:text-darkPurple bg-darkPurple hover:bg-white transition-all duration-500 rounded-full  py-[0.75rem] px-[1.75rem]">
            <Link
              href="/contact"
              className=" flex items-center text-h9Copy5 gap-[0.5rem]"
            >
              <p className="">Join the Flow</p>
            </Link>
          </ButtonAnimation>
        </div>
      </div>
    </div>
  );
};

export default JoinTheFlow;
