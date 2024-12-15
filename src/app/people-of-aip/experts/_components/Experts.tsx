import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
import Link from "next/link";
import { TTeamMembers } from "@/api/type";

// const TeamArray = [
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "0",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "1",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "2",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "3",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "4",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "5",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "6",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "7",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "8",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "9",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "10",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "11",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "0",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "1",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "2",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "3",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "4",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "5",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "6",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "7",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "8",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "9",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "10",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
//   {
//     titleClassName: " underline decoration-[1px] underline-offset-4",
//     title2ClassName: " underline decoration-[1px] underline-offset-4",
//     title: "11",
//     title2: "Doshi",
//     desc: "Operating Partner",
//   },
// ];
type Props = {
  expertMembers: TTeamMembers[];
};
const Experts = ({ expertMembers }: Props) => {
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
        {expertMembers.map((items, i) => {
          const position = i % 12;
          const isCenteredRow = position >= 8 && position <= 11;
          if (
            position === 0 ||
            position === 2 ||
            position === 4 ||
            position === 6 ||
            position === 8 ||
            position === 10
          )
            return (
              <div
                key={i}
                className="~pt-[4.83rem]/[7.875rem] flex md:block flex-col items-center ~px-[1.25rem]/[7.8rem] relative"
              >
                {position === 0 && (
                  <div className="flex ~gap-[1.25rem]/[5.6rem] ">
                    <ATeamCard
                      image={"/images/sample"}
                      title={items.name}
                      desc={items.designation}
                      linkedin={true}
                    />
                    {expertMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 1].name}
                        desc={expertMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 2 && (
                  <div className="pt-[4rem] flex ~gap-[1.25rem]/[5.6rem] ">
                    <ATeamCard
                      image={"/images/sample"}
                      title={items.name}
                      desc={items.designation}
                      linkedin={true}
                    />
                    {expertMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 1].name}
                        desc={expertMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 4 && (
                  <div className="justify-center pt-[4rem] flex flex-wrap ~gap-[1.25rem]/[5.6rem]">
                    <ATeamCard
                      image={"/images/sample"}
                      title={items.name}
                      desc={items.designation}
                      linkedin={true}
                    />
                    {expertMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 1].name}
                        desc={expertMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                    {expertMembers[i + 2] && (
                      <ATeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 2].name}
                        desc={expertMembers[i + 2].designation}
                        linkedin={true}
                      />
                    )}
                    {expertMembers[i + 3] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 3].name}
                        desc={expertMembers[i + 3].designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 8 && (
                  <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem]  ">
                    <ATeamCard
                      image={"/images/sample"}
                      title={items.name}
                      desc={items.designation}
                      linkedin={true}
                    />
                    {expertMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 1].name}
                        desc={expertMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 10 && (
                  <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem] ">
                    <ATeamCard
                      image={"/images/sample"}
                      title={items.name}
                      desc={items.designation}
                      linkedin={true}
                    />
                    {expertMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={expertMembers[i + 1].name}
                        desc={expertMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Experts;
