import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
import Link from "next/link";

const TeamArray = [
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
  {
    titleClassName: " underline decoration-[1px] underline-offset-4",
    title2ClassName: " underline decoration-[1px] underline-offset-4",
    title: "Piyush",
    title2: "Doshi",
    desc: "Operating Partner",
  },
];
const AdvisoryBoard = () => {
  return (
    <div className="w-full relative">
      <Image
        src={Bg1}
        alt=""
        className="hidden xl:block absolute top-[19.5rem] right-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="hidden xl:block absolute top-[39rem] right-[14.125rem] size-[12rem]"
      />
      <Image
        src={Bg2}
        alt=""
        className="hidden xl:block absolute bottom-[8rem] left-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="hidden xl:block absolute bottom-[23rem] left-[17rem] size-[12rem]"
      />
      <div className="pt-[3rem] pb-[7rem] container mx-auto">
        <div className="flex flex-col  justify-center ~px-[1.25rem]/[20.9rem]">
          <h2 className=" text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
            Our Advisory
            <span className="text-textPurple font-playFairItalic">
              &nbsp;Board
            </span>
          </h2>
          <p className="~pt-[2rem]/[1.25rem]  text-midGray text-center ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
            It takes a village to raise a child. It takes a team to build an
            organisation that works toward a common aim: to inform, influence
            and inspire philanthropists and stakeholders, fostering a deeper
            understanding of how strategic philanthropy can address pressing
            social challenges.
          </p>
        </div>
        <div className="~pt-[4.83rem]/[7.875rem] flex md:block flex-col items-center ~px-[1.25rem]/[7.8rem] relative">
          <div className=" grid grid-cols-2 lg:grid-cols-4 ~gap-[1.25rem]/[5.6rem] ">
            {/* <Link href='/people-of-aip/our-advisory-board/slug' > */}
            <div className="w-full justify-center flex">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Piyush"
                title2="Doshi"
                desc="Operating Partner"
                linkedin={true}
              />
            </div>
            {/* </Link> */}
            <div className="w-full justify-center flex">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Amitabh"
                title2="Jaipuria"
                desc="CEO"
                linkedin={true}
              />
            </div>
          </div>
          <div className="pt-[4rem] grid grid-cols-2 lg:grid-cols-4 ~gap-[1.25rem]/[5.6rem] ">
            <div className="w-full justify-center flex">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Radhika"
                title2="Jain"
                desc="Philanthropic Partner"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Aditi"
                title2="Ray"
                desc="Philanthropic Partner"
                linkedin={true}
              />
            </div>
          </div>
          <div className="justify-center pt-[4rem] grid grid-cols-2 lg:grid-cols-4 ~gap-[1.25rem]/[5.6rem]  ">
            <div className="w-full justify-center flex col-span-1">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Dr. Preethi"
                title2="Jain"
                desc="Philanthropic Partner"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex col-span-1">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Vishal"
                title2="Dutta"
                desc="Head, Knowledge"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Jhilmil"
                title2="Garg"
                desc="Program Manager"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Isha"
                title2="Mathur"
                desc="Program Manager"
                linkedin={true}
              />
            </div>
          </div>
          <div className="pt-[4rem] grid grid-cols-2 lg:grid-cols-4  ~gap-[1.25rem]/[5.6rem]  ">
            <div></div>
            <div></div>
            <div className="w-full justify-center flex">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Bhavana S"
                title2="Resmi"
                desc="Program Associate"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Aparna"
                title2="Joshi"
                desc="Program Manager"
                linkedin={true}
              />
            </div>
          </div>
          <div className="pt-[4rem] grid grid-cols-2 lg:grid-cols-4   ~gap-[1.25rem]/[5.6rem] ">
            <div></div>
            <div></div>
            <div className="w-full justify-center flex">
              <ATeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Dr. Sabhyata"
                title2="Prakash"
                desc="Communication & Brand Manager"
                linkedin={true}
              />
            </div>
            <div className="w-full justify-center flex">
              <PTeamCard
                titleClassName=" underline decoration-[1px] underline-offset-4"
                title2ClassName=" underline decoration-[1px] underline-offset-4"
                title="Annie"
                title2="Bisht"
                desc="Executive Assistant"
                linkedin={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoard;
