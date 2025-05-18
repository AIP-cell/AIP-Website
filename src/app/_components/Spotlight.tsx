import BgButton from "@/components/buttons/BgButton";
import Image from "next/image";
import ShapelessBrown from "@public/svg/shapelessBrown.svg";
import Link from "next/link";
import { THomePageEvent } from "@/api/type";
import { StorageUrl } from "@/utils/BaseUrl";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";

type Props = {
  eventData: THomePageEvent;
};
const Spotlight = ({ eventData }: Props) => {
  return (
    <div className="grid grid-cols-2  container mx-auto  ~gap-[2rem]/0 ~pt-[5rem]/[12.75rem] ~pl-[1.2rem]/[7.8rem] ~pr-[1.2rem]/[6.56rem]">
      <div className=" md:pr-[6rem] col-span-2 lg:col-span-1">
        <div className="bg-purpleToPink bg-clip-text ">
          <TextStaggerAnimation
            text="IN THE SPOTLIGHT"
            className="text-transparent ~text-h9Copy5/h9Copy4 font-inter font-bold ~leading-[1.2rem]/[1.4rem]"
          />
        </div>
        <div className="">
          <h4 className="~text-h4/h2 text-darkBlack pt-[0.75rem] ~leading-[2.6rem]/[3.3rem] font-playFair">
            {eventData?.title}
          </h4>
        </div>

        <p className="text-h9Copy4 leading-[1.4rem] text-midGray font-inter pt-[0.75rem]">
          {eventData?.description}
        </p>

        {eventData && (
          <div className="pt-[1.25rem]">
            <Link href={`our-work/collaborations/${eventData?.slug}`}>
              <BgButton
                text="Read More"
                className="px-[2rem] py-[0.75rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
              />
            </Link>
          </div>
        )}
      </div>
      <div className="relative col-span-2 lg:col-span-1">
        <FadeInAnimation delay={0.1} y1={20} y2={0}>
          <div className="relative z-[10] shrink-0  ~h-[14rem]/[22.1rem] rounded-2xl overflow-hidden">
            <Image
              src={StorageUrl + eventData?.image}
              alt="upcoming-Image"
              fill
              className="object-cover h-full w-full overflow-y-scroll"
            />
          </div>
          <div className="absolute ~bottom-[-1.8rem]/[-1.5rem]  ~right-[-1.6rem]/[-4.5rem] ~size-[10.3rem]/[18.4rem]">
            <Image src={ShapelessBrown} alt="" fill />
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default Spotlight;
