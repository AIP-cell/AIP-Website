import Agenda from "./_components/Agenda";
import InnerCollaborationsSectionOne from "./_components/InnerCollaborationsSectionOne";
import InnerCollaborationsVideo from "./_components/InnerCollaborationsVideo";
import Gallery from "../../projects-and-programs/[slug]/_components/Gallery";
import Media from "../../projects-and-programs/[slug]/_components/Media";
import InnerCollaborationTestimonials from "./_components/InnerCollaborationTestimonials";

const page = () => {
  return (
    <div className="tw-pt-[5rem]">
      <InnerCollaborationsSectionOne />
      <div className="">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Agenda
        </p>
        <Agenda />
      </div>
      <InnerCollaborationsVideo />
      <div className="container tw-mx-auto">
        <Gallery />
      </div>
      <Media />
      <InnerCollaborationTestimonials />
    </div>
  );
};

export default page;
