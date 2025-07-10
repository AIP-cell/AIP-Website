import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import ATeamCardWithPlayButton from "@/components/cards/aCards/ACardWithSmallPlayButton";
import PTeamCardWithPlayButton from "@/components/cards/pCards/PTeamCardWithPlayButton";

type Props = {
  teamMembers?: Array<{
    _id: string;
    name?: string;
    designation?: string;
    quote?: string;
    linkedln?: string;
    linkOrVideo?: string;
    slug?: string;
    image?: string;
    video?: string;
    videoLink?: string;
  }>;
  urlSlug: string;
};
const PeopleOfAipTeamMembers = ({ teamMembers, urlSlug }: Props) => {
  return (
    <div className="w-full relative min-h-[90vh] pt-[5rem]">
      <div className="pt-[3rem] pb-[7rem] ">
        <div className="flex flex-col  justify-center ~px-[1.25rem]/[20.9rem] ~pb-[1.83rem]/[3.875rem] container mx-auto">
          {urlSlug === "experts" && (
            <WordStaggerAnimation
              text="<color>Experts</color>"
              className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic"
            />
          )}
          {urlSlug === "founders" && (
            <WordStaggerAnimation
              text="<color>Founders</color>"
              className="text-center ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-textPurple font-playFairItalic"
            />
          )}
          {urlSlug === "team-aip" && (
            <WordStaggerAnimation
              text="Team <color>AIP</color>"
              className="text-center ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair"
            />
          )}
          {urlSlug === "advisory-board" && (
            <WordStaggerAnimation
              text="Advisory <color>Board</color>"
              className=" text-center ~text-h4/h2 text-gray80 ~leading-[2.6rem]/[3.3rem] font-playFair"
            />
          )}
          <div className="~pt-[2rem]/[1.25rem]  text-midGray text-center ~text-h9Copy5/h9Copy4 !leading-[1.225rem]/[1.4rem] max-[21rem]:px-[0.5rem]">
            <TextStaggerAnimation
              text={
                urlSlug === "experts"
                  ? "Experts in the philanthropic sector are dedicated professionals who possess a deep understanding of social impact, community needs, and strategic giving. They leverage their expertise in areas like fundraising, program development, and resource allocation to drive meaningful change in underserved communities."
                  : urlSlug === "founders"
                  ? "Our Founders are eminent philanthropists and experts who support our vision and mission  of catalyzing strategic giving in India. They come from diverse backgrounds and champion various causes, organisations and methods of giving. Each is an inspiration in their own way."
                  : urlSlug === "team-aip"
                  ? "AIP has a small but very experienced team of 13 people to support both philanthropists and the philanthropic ecosystem. The team is a blend of professionals from various corporate and social sector backgrounds who bring together diverse perspectives and expertise."
                  : urlSlug === "advisory-board"
                  ? " Our Advisory Board has leading experts and distinguished philanthropists who help us set our strategic direction, guide us in our approach, act as sounding boards and help us stay true to our values, vision and mission."
                  : ""
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
                    <ATeamCardWithPlayButton
                      titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                      slug={items?.slug}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                      linkedinLink={items?.linkedln}
                      linkOrVideo={items?.linkOrVideo}
                      video={items?.video}
                      videoLink={items?.videoLink}
                      showVideoButton={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        slug={teamMembers[i + 1]?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        image={teamMembers[i + 1]?.image}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                        linkedinLink={teamMembers[i + 1]?.linkedln}
                        linkOrVideo={teamMembers[i + 1]?.linkOrVideo}
                        video={teamMembers[i + 1]?.video}
                        videoLink={teamMembers[i + 1]?.videoLink}
                        showVideoButton={true}
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
                      <ATeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        slug={items?.slug}
                        image={items?.image}
                        desc={items?.designation}
                        title={items?.name}
                        linkedin={true}
                        link={`/people-of-aip/${urlSlug}/${items.slug}`}
                        linkedinLink={items?.linkedln}
                        linkOrVideo={items?.linkOrVideo}
                        video={items?.video}
                        videoLink={items?.videoLink}
                        showVideoButton={true}
                      />
                      {teamMembers[i + 1] && (
                        <PTeamCardWithPlayButton
                          titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                          slug={teamMembers[i + 1]?.slug}
                          image={teamMembers[i + 1]?.image}
                          link={`/people-of-aip/${urlSlug}/${
                            teamMembers[i + 1].slug
                          }`}
                          title={teamMembers[i + 1]?.name}
                          desc={teamMembers[i + 1]?.designation}
                          linkedin={true}
                          linkedinLink={teamMembers[i + 1]?.linkedln}
                          linkOrVideo={teamMembers[i + 1]?.linkOrVideo}
                          video={teamMembers[i + 1]?.video}
                          videoLink={teamMembers[i + 1]?.videoLink}
                          showVideoButton={true}
                        />
                      )}
                    </div>
                  </div>
                )}
                {position === 4 && (
                  <div className="justify-center flex flex-wrap ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto">
                    <ATeamCardWithPlayButton
                      titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                      slug={items?.slug}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                      linkedinLink={items?.linkedln}
                      linkOrVideo={items?.linkOrVideo}
                      video={items?.video}
                      videoLink={items?.videoLink}
                      showVideoButton={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        image={teamMembers[i + 1]?.image}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                        linkedinLink={teamMembers[i + 1]?.linkedln}
                        slug={teamMembers[i + 1]?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        linkOrVideo={teamMembers[i + 1]?.linkOrVideo}
                        video={teamMembers[i + 1]?.video}
                        videoLink={teamMembers[i + 1]?.videoLink}
                        showVideoButton={true}
                      />
                    )}
                    {teamMembers[i + 2] && (
                      <ATeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        image={teamMembers[i + 2]?.image}
                        title={teamMembers[i + 2]?.name}
                        desc={teamMembers[i + 2]?.designation}
                        linkedin={true}
                        linkedinLink={teamMembers[i + 2]?.linkedln}
                        slug={teamMembers[i + 2]?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 2].slug
                        }`}
                        linkOrVideo={teamMembers[i + 2]?.linkOrVideo}
                        video={teamMembers[i + 2]?.video}
                        videoLink={teamMembers[i + 2]?.videoLink}
                        showVideoButton={true}
                      />
                    )}
                    {teamMembers[i + 3] && (
                      <PTeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        image={teamMembers[i + 3]?.image}
                        title={teamMembers[i + 3]?.name}
                        desc={teamMembers[i + 3]?.designation}
                        linkedin={true}
                        linkedinLink={teamMembers[i + 3]?.linkedln}
                        slug={teamMembers[i + 3]?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 3].slug
                        }`}
                        linkOrVideo={teamMembers[i + 3]?.linkOrVideo}
                        video={teamMembers[i + 3]?.video}
                        videoLink={teamMembers[i + 3]?.videoLink}
                        showVideoButton={true}
                      />
                    )}
                  </div>
                )}
                {position === 8 && (
                  <div className=" flex justify-start md:justify-end ~gap-[1.25rem]/[5.6rem]  ~px-[1.25rem]/[7.8rem] relative container mx-auto">
                    <ATeamCardWithPlayButton
                      titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                      slug={items?.slug}
                      link={`/people-of-aip/${urlSlug}/${items.slug}`}
                      image={items?.image}
                      title={items?.name}
                      desc={items?.designation}
                      linkedin={true}
                      linkedinLink={items?.linkedln}
                      linkOrVideo={items?.linkOrVideo}
                      video={items?.video}
                      videoLink={items?.videoLink}
                      showVideoButton={true}
                    />
                    {teamMembers[i + 1] && (
                      <PTeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        slug={teamMembers[i + 1]?.slug}
                        link={`/people-of-aip/${urlSlug}/${
                          teamMembers[i + 1].slug
                        }`}
                        image={teamMembers[i + 1]?.image}
                        title={teamMembers[i + 1]?.name}
                        desc={teamMembers[i + 1]?.designation}
                        linkedin={true}
                        linkedinLink={teamMembers[i + 1]?.linkedln}
                        linkOrVideo={teamMembers[i + 1]?.linkOrVideo}
                        video={teamMembers[i + 1]?.video}
                        videoLink={teamMembers[i + 1]?.videoLink}
                        showVideoButton={true}
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
                      <ATeamCardWithPlayButton
                        titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                        slug={items?.slug}
                        link={`/people-of-aip/${urlSlug}/${items.slug}`}
                        image={items?.image}
                        title={items?.name}
                        desc={items?.designation}
                        linkedin={true}
                        linkedinLink={items?.linkedln}
                        linkOrVideo={items?.linkOrVideo}
                        video={items?.video}
                        videoLink={items?.videoLink}
                        showVideoButton={true}
                      />
                      {teamMembers[i + 1] && (
                        <PTeamCardWithPlayButton
                          titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                          slug={teamMembers[i + 1]?.slug}
                          link={`/people-of-aip/${urlSlug}/${
                            teamMembers[i + 1].slug
                          }`}
                          image={teamMembers[i + 1]?.image}
                          title={teamMembers[i + 1]?.name}
                          desc={teamMembers[i + 1]?.designation}
                          linkedin={true}
                          linkedinLink={teamMembers[i + 1]?.linkedln}
                          linkOrVideo={teamMembers[i + 1]?.linkOrVideo}
                          video={teamMembers[i + 1]?.video}
                          videoLink={teamMembers[i + 1]?.videoLink}
                          showVideoButton={true}
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
