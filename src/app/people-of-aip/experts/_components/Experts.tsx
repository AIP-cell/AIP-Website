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
const Experts = () => {
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
          <h2 className=" text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic">
            Experts
          </h2>
          <p className="~pt-[2rem]/[1.25rem]  text-midGray text-center ~text-h9Copy5/h9Copy4 !leading-[1.225rem]/[1.4rem] max-[21rem]:px-[0.5rem]">
            Experts in the philanthropic sector are dedicated professionals who
            possess a deep understanding of social impact, community needs, and
            strategic giving. They leverage their expertise in areas like
            fundraising, program development, and resource allocation to drive
            meaningful change in underserved communities.
          </p>
        </div>
        <div className="~pt-[4.83rem]/[7.875rem] flex md:block flex-col items-center ~px-[1.25rem]/[7.8rem] relative">
          <div className="flex ~gap-[1.25rem]/[5.6rem] ">
            {/* <Link href="/people-of-aip/experts/slug"> */}
              <ATeamCard
                title="Piyush"
                title2="Doshi"
                desc="Operating Partner"
                linkedin={true}
              />
            {/* </Link> */}
            <PTeamCard
              title="Amitabh"
              title2="Jaipuria"
              desc="CEO"
              linkedin={true}
            />
          </div>
          <div className="pt-[4rem] flex ~gap-[1.25rem]/[5.6rem] ">
            <ATeamCard
              title="Radhika"
              title2="Jain"
              desc="Philanthropic Partner"
              linkedin={true}
            />
            <PTeamCard
              title="Aditi"
              title2="Ray"
              desc="Philanthropic Partner"
              linkedin={true}
            />
          </div>
          <div className="justify-center pt-[4rem] flex flex-wrap ~gap-[1.25rem]/[5.6rem]  ">
            <ATeamCard
              title="Dr. Preethi"
              title2="Jain"
              desc="Philanthropic Partner"
              linkedin={true}
            />
            <PTeamCard
              title="Vishal"
              title2="Dutta"
              desc="Head, Knowledge"
              linkedin={true}
            />
            <ATeamCard
              title="Jhilmil"
              title2="Garg"
              desc="Program Manager"
              linkedin={true}
            />
            <PTeamCard
              title="Isha"
              title2="Mathur"
              desc="Program Manager"
              linkedin={true}
            />
          </div>
          <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem]  ">
            <ATeamCard
              title="Bhavana S"
              title2="Resmi"
              desc="Program Associate"
              linkedin={true}
            />
            <PTeamCard
              title="Aparna"
              title2="Joshi"
              desc="Program Manager"
              linkedin={true}
            />
          </div>
          <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem] ">
            <ATeamCard
              title="Dr. Sabhyata"
              title2="Prakash"
              desc="Communication & Brand Manager"
              linkedin={true}
            />
            <PTeamCard
              title="Annie"
              title2="Bisht"
              desc="Executive Assistant"
              linkedin={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
