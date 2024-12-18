import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
import Link from "next/link";
import { TTeamMembers } from "@/api/type";

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
type Props = {
  teamAipMembers: TTeamMembers[];
};
const TeamAip = ({teamAipMembers}:Props) => {
  return (
    <div className="w-full relative">
      <Image
        src={Bg1}
        alt=""
        className="hidden xl:block absolute top-[19.5rem] right-0 z-[50]"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="hidden xl:block absolute top-[39rem] right-[14.125rem] size-[12rem] z-[50]"
      />
      <Image
        src={Bg2}
        alt=""
        className="hidden xl:block absolute bottom-[8rem] left-0 z-[50]"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="hidden xl:block absolute bottom-[23rem] left-[17rem] size-[12rem] z-[50]"
      />
      <div className="pt-[3rem] pb-[7rem] container mx-auto">
        <div className="flex flex-col  justify-center ~px-[1.25rem]/[20.9rem]">
          <h2 className=" text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] font-playFair">
            Team
            <span className="text-textPurple font-playFairItalic">
              &nbsp;AIP
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
        {teamAipMembers.map((items, i) => {
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
                    {teamAipMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 1].name}
                        desc={teamAipMembers[i + 1].designation}
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
                    {teamAipMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 1].name}
                        desc={teamAipMembers[i + 1].designation}
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
                    {teamAipMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 1].name}
                        desc={teamAipMembers[i + 1].designation}
                        linkedin={true}
                      />
                    )}
                    {teamAipMembers[i + 2] && (
                      <ATeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 2].name}
                        desc={teamAipMembers[i + 2].designation}
                        linkedin={true}
                      />
                    )}
                    {teamAipMembers[i + 3] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 3].name}
                        desc={teamAipMembers[i + 3].designation}
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
                    {teamAipMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 1].name}
                        desc={teamAipMembers[i + 1].designation}
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
                    {teamAipMembers[i + 1] && (
                      <PTeamCard
                        image={"/images/sample"}
                        title={teamAipMembers[i + 1].name}
                        desc={teamAipMembers[i + 1].designation}
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

export default TeamAip;
