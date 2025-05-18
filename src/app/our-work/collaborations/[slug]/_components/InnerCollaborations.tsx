import Image from "next/image";
import PurpleTopSvg from "@public/svg/products-and-services/project-and-programs/topRightPurpleCurve.svg";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import { TOneCollaboration } from "@/api/type";
import Cities from "./Cities";

type Props = {
  collaboration: TOneCollaboration;
  slug: string;
};
const InnerCollaborations = ({ collaboration, slug }: Props) => {
  return (
    <>
      <div className="relative w-full ~pb-[5rem]/[7.5rem]">
        <Image
          src={PurpleTopSvg}
          alt="purple-curve"
          className="hidden lg:block absolute top-[8rem] right-0"
        />
        <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] pt-[5rem]">
          <BreadCrump
            textOne="Our Work"
            linkOne="#"
            textTwo="Collaborations"
            linkTwo="/our-work/collaborations"
            textThree={collaboration?.title}
            linkThree={`/our-work/collaborations/${slug}`}
          />
        </div>
        {collaboration && <Cities collaboration={collaboration} slug={slug} />}
      </div>
    </>
  );
};

export default InnerCollaborations;
