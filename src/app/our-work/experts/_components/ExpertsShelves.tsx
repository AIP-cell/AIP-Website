import { TSelectedWorks } from "@/api/type";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import BgButton from "@/components/buttons/BgButton";
import ResourceCard from "@/components/cards/ResourceCard";

type Props = {
  expertShelves: TSelectedWorks[];
};
const ExpertsShelves = ({ expertShelves }: Props) => {
  return (
    <div className=" container mx-auto flex flex-col items-center">
      <TextStaggerAnimation
        text="From Experts’ Shelves"
        className="~text-h4/h2 ~leading-[2.6rem]/[3.3rem]  text-center font-playFair text-gray80"
      />
      <p className="text-midGray px-[2.8rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] ~pt-[0.75rem]/[1.25rem] text-center ~pb-[2.5rem]/[5rem]">
        A showcase of inspirational work done by collaborators in our network
      </p>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 ~gap-[2.5rem]/[4.5rem] ~px-[1.25rem]/[8.125rem]">
        {expertShelves?.map((item, i) => (
          <ResourceCard
            slug={item?.slug}
            key={i}
            src={item?.image}
            title={item?.title}
            desc={item?.description}
            category={item?.category}
            domain={item?.domain}
          />
        ))}
      </div>
      {expertShelves && (
        <div className="~pt-[2.5rem]/[5rem] ~pb-[5rem]/[7.5rem]">
          <BgButton text="See All" className="py-[0.75rem] px-[1.75rem]" />
        </div>
      )}
    </div>
  );
};

export default ExpertsShelves;
