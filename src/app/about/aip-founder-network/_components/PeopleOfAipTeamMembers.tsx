import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
import { TTeamMembers } from "@/api/type";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

type Props = {
  teamMembers?: TTeamMembers[];
};
const PeopleOfAipTeamMembers = ({ teamMembers }: Props) => {
  return (
    <div className="w-full relative min-h-[90vh]">
      <div className="pt-[3rem] pb-[7rem] ">
        <div className="flex flex-col  justify-center ~px-[1.25rem]/[20.9rem] ~pb-[1.83rem]/[3.875rem] container mx-auto">

        <WordStaggerAnimation
          text="<color>Founders</color>"
          className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic"
        />
         
          <div className="~pt-[2rem]/[1.25rem]  text-midGray text-center ~text-h9Copy5/h9Copy4 !leading-[1.225rem]/[1.4rem] max-[21rem]:px-[0.5rem]">
            <TextStaggerAnimation
              text={
                "Our Founders are eminent philanthropists and experts who support our vision and mission  of catalyzing strategic giving in India. They come from diverse backgrounds and champion various causes, organisations and methods of giving. Each is an inspiration in their own way."
                 
              }
              className="font-inter ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center text-gray80 ~pt-[2rem]/[1.25rem] ~px-[1rem]/0"
            />
          </div>
        </div>
        {teamMembers?.map((items, i) => {
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
                className="~pt-[3.5rem]/[4rem] flex md:block flex-col items-center "
              >
                {position === 0 && (
                  <div className="flex ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto ">
                    <ATeamCard
                      // slug={items?.slug}
                      // link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        // slug={items?.slug}
                        // link={`/people-of-aip/${urlSlug}/${
                        //   teamMembers[i + 1].slug
                        // }`}
                        image={teamMembers[i + 1]?.image}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 2 && (
                  <div className="relative">
                    <>
                      <Image
                        src={Bg1}
                        alt=""
                        className="hidden lg:block absolute bottom-[-4rem] right-0"
                      />
                      <Image
                        src={OvalPeach}
                        alt=""
                        className="hidden lg:block absolute bottom-[15rem] right-[14.125rem] size-[12rem]"
                      />
                    </>
                    <div className=" flex ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto ">
                      <ATeamCard
                        // slug={items?.slug}
                        // link={`/people-of-aip/${urlSlug}/${items.slug}`}
                        image={items?.image}
                        desc={items?.designation}
                        title={items?.name}
                        linkedin={true}
                      />
                      {teamMembers[i + 1] && (
                        <PTeamCard
                          // slug={teamMembers[i + 1]?.slug}
                          image={teamMembers[i + 1]?.image}
                          // link={`/people-of-aip/${urlSlug}/${
                          //   teamMembers[i + 1].slug
                          // }`}
                          title={teamMembers[i + 1]?.name}
                          desc={teamMembers[i + 1]?.designation}
                          linkedin={true}
                        />
                      )}
                    </div>
                  </div>
                )}
                {position === 4 && (
                  <div className="justify-center flex flex-wrap ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto">
                    <ATeamCard
                      // slug={items?.slug}
                      image={items?.image}
                      // link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        // slug={teamMembers[i + 1]?.slug}
                        image={teamMembers[i + 1]?.image}
                        // link={`/people-of-aip/${urlSlug}/${
                        //   teamMembers[i + 1].slug
                        // }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                    {teamMembers[i + 2] && (
                      <ATeamCard
                        // slug={teamMembers[i + 2]?.slug}
                        image={teamMembers[i + 2]?.image}
                        // link={`/people-of-aip/${urlSlug}/${
                        //   teamMembers[i + 2].slug
                        // }`}
                        title={teamMembers[i + 2]?.name}
                        desc={teamMembers[i + 2]?.designation}
                        linkedin={true}
                      />
                    )}
                    {teamMembers[i + 3] && (
                      <PTeamCard
                        // slug={teamMembers[i + 3]?.slug}
                        image={teamMembers[i + 3]?.image}
                        // link={`/people-of-aip/${urlSlug}/${
                        //   teamMembers[i + 3].slug
                        // }`}
                        title={teamMembers[i + 3]?.name}
                        desc={teamMembers[i + 3]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 8 && (
                  <div className=" flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem]  ~px-[1.25rem]/[7.8rem] relative container mx-auto">
                    <ATeamCard
                      // slug={items?.slug}
                      image={items?.image}
                      // link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCard
                        // slug={teamMembers[i + 1]?.slug}
                        image={teamMembers[i + 1]?.image}
                        // link={`/people-of-aip/${urlSlug}/${
                        //   teamMembers[i + 1].slug
                        // }`}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                      />
                    )}
                  </div>
                )}
                {position === 10 && (
                  <div className="relative">
                    <>
                      <Image
                        src={Bg2}
                        alt=""
                        className="hidden lg:block absolute bottom-[5rem] left-0"
                      />
                      <Image
                        src={OvalPeach}
                        alt=""
                        className="hidden lg:block absolute bottom-[15rem] left-[17rem] size-[12rem]"
                      />
                    </>
                    <div className=" flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto">
                      <ATeamCard
                        // slug={items?.slug}
                        image={items?.image}
                        // link={`/people-of-aip/${urlSlug}/${items.slug}`}
                        title={items?.name}
                        desc={items?.designation}
                        linkedin={true}
                      />
                      {teamMembers[i + 1] && (
                        <PTeamCard
                          // slug={items?.slug}
                          image={teamMembers[i + 1]?.image}
                          // link={`/people-of-aip/${urlSlug}/${
                          //   teamMembers[i + 1]?.slug
                          // }`}
                          title={teamMembers[i + 1]?.name}
                          desc={teamMembers[i + 1]?.designation}
                          linkedin={true}
                        />
                      )}
                    </div>
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
