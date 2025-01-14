import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
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
  teamMembers: TTeamMembers[];
  urlSlug: string;
};
const PeopleOfAipTeamMembers = ({ teamMembers, urlSlug }: Props) => {
  return (
    <div className="w-full relative">
      {teamMembers.length != 0 && (
        <>
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
        </>
      )}
      <div className="pt-[3rem] pb-[7rem] container mx-auto">
        <div className="flex flex-col  justify-center ~px-[1.25rem]/[20.9rem]">
          {urlSlug === "experts" && (
            <h2 className=" text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic">
              Experts
            </h2>
          )}
          {urlSlug === "founders" && (
            <h2 className=" text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic">
              Founders
            </h2>
          )}
          {urlSlug === "teamAIP" && (
            <h2 className=" text-center ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair">
              Team{" "}
              <span className="text-textPurple font-playFairItalic">AIP</span>
            </h2>
          )}
          {urlSlug === "advisoryBoard" && (
            <h2 className=" text-center ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair">
              Advisory{" "}
              <span className="text-textPurple font-playFairItalic">Board</span>
            </h2>
          )}
          <p className="~pt-[2rem]/[1.25rem]  text-midGray text-center ~text-h9Copy5/h9Copy4 !leading-[1.225rem]/[1.4rem] max-[21rem]:px-[0.5rem]">
            {urlSlug === "experts" &&
              "Experts in the philanthropic sector are dedicated professionals who possess a deep understanding of social impact, community needs, and strategic giving. They leverage their expertise in areas like fundraising, program development, and resource allocation to drive meaningful change in underserved communities."}
            {urlSlug === "founders" &&
              "Experts in the philanthropic sector are dedicated professionals who possess a deep understanding of social impact, community needs, and strategic giving. They leverage their expertise in areas like fundraising, program development, and resource allocation to drive meaningful change in underserved communities."}
            {urlSlug === "teamAIP" &&
              "It takes a village to raise a child. It takes a team to build an organisation that works toward a common aim: to inform, influence and inspire philanthropists and stakeholders, fostering a deeper understanding of how strategic philanthropy can address pressing social challenges."}
            {urlSlug === "advisoryBoard" &&
              "It takes a village to raise a child. It takes a team to build an organisation that works toward a common aim: to inform, influence and inspire philanthropists and stakeholders, fostering a deeper understanding of how strategic philanthropy can address pressing social challenges."}
          </p>
        </div>
        {teamMembers.map((items, i) => {
          const position = i % 12;
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
                      slug={items?.slug}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        slug={items?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        image={teamMembers[i + 1]?.image}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 2 && (
                  <div className="pt-[4rem] flex ~gap-[1.25rem]/[5.6rem] ">
                    <ATeamCard
                      slug={items?.slug}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        slug={teamMembers[i + 1]?.slug}
                        image={teamMembers[i + 1]?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 4 && (
                  <div className="justify-center pt-[4rem] flex flex-wrap ~gap-[1.25rem]/[5.6rem]">
                    <ATeamCard
                      slug={items?.slug}
                      image={items?.image}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        slug={teamMembers[i + 1]?.slug}
                        image={teamMembers[i + 1]?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                    {teamMembers[i + 2] && (
                      <ATeamCard
                        slug={teamMembers[i + 2]?.slug}
                        image={teamMembers[i + 2]?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 2].slug
                        }`}
                        title={teamMembers[i + 2]?.name}
                        desc={teamMembers[i + 2]?.designation}
                        linkedin={true}
                      />
                    )}
                    {teamMembers[i + 3] && (
                      <PTeamCard
                        slug={teamMembers[i + 3]?.slug}
                        image={teamMembers[i + 3]?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 3].slug
                        }`}
                        title={teamMembers[i + 3]?.name}
                        desc={teamMembers[i + 3]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 8 && (
                  <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem]  ">
                    <ATeamCard
                      slug={items?.slug}
                      image={items?.image}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        slug={teamMembers[i + 1]?.slug}
                        image={teamMembers[i + 1]?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 10 && (
                  <div className="pt-[4rem] flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem] ">
                    <ATeamCard
                      slug={items?.slug}
                      image={items?.image}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        slug={items?.slug}
                        image={items?.image}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1]?.slug
                        }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
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

export default PeopleOfAipTeamMembers;
