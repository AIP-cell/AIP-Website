import { TboardOfDirectors } from "@/api/type";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import ATeamCardWithPlayButton from "@/components/cards/aCards/ACardWithSmallPlayButton";

import PTeamCardWithPlayButton from "@/components/cards/pCards/PTeamCardWithPlayButton";

type Props = {
  teamMembers?: TboardOfDirectors[];
};

const Directors = ({ teamMembers }: Props) => {
  console.log(teamMembers);
  return (
    <div>
      <div className="flex flex-col items-center justify-center ~px-[1.25rem]/[20.938rem] container mx-auto ~pt-[3rem]/[7rem]">
        <WordStaggerAnimation
          text="Board of<color> Directors</color>"
          className="~text-h4/h2 text-center text-gray80 ~leading-[2.6rem]/[3.2rem] font-playFair"
        />

        <TextStaggerAnimation
          text="Meet our Board of Directors: united by a shared commitment and diverse expertise across sectors, they guide us, uphold our values, and ensure responsible stewardship. Together, they drive strategic growth and inspire lasting change."
          className="font-inter ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-center text-gray80 ~pt-[2rem]/[1.25rem] ~px-[1rem]/0"
        />
      </div>

      <div className="flex ~gap-[1.25rem]/[5.6rem] ~px-[1.25rem]/[7.8rem] relative container mx-auto justify-center pt-[3rem]">
        {teamMembers?.map((items, i) => {
          // const isFirstDesign = Math.floor(i / 2) % 2 === 0;
          if (i % 2 === 0) {
            return (
              <CardAnimation delay={0.1} key={i}>
                <div>
                  <ATeamCardWithPlayButton
                    titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                    slug={items?.slug}
                    image={items?.image}
                    title={items?.name}
                    linkedin
                    linkedinLink={items?.linkedln}
                    link={`/people-of-aip/advisory-board/${items.slug}`}
                  />
                </div>
              </CardAnimation>
            );
          } else {
            return (
              <CardAnimation delay={0.1} key={i}>
                <div>
                  <PTeamCardWithPlayButton
                    titleClassName=" hover:underline decoration-[1px] underline-offset-4 transition-all duration-200 "
                    slug={items?.slug}
                    image={items?.image}
                    title={items?.name}
                    linkedin
                    linkedinLink={items?.linkedln}
                    link={`/people-of-aip/advisory-board/${items.slug}`}
                  />
                </div>
              </CardAnimation>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Directors;
