import Agenda from "@/app/our-work/collaborations/[slug]/_components/Agenda";
import InnerCollaborations from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborations";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import InnerCollaborationTestimonials from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationTestimonials";
import Gallery from "@/app/our-work/projects-and-programs/[slug]/_components/Gallery";
import Media from "@/app/our-work/projects-and-programs/[slug]/_components/Media";
import InnerExpertsSectionOne from "./_components/InnerExpertsSectionOne";
import { TCuratedResourcesExpertsInner } from "@/api/type";
import { Api } from "@/api/Api";

const agendaArray = [
  {
    title: "Registration + Tea and Coffee",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
  },
  {
    title: "Welcome Address by Vikram Bhalla ",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "Managing Director & Senior Partner, BCG",
  },
  {
    title: "Unveiling of the report",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "“Wealth with Purpose: A Report on Private Indian Philanthropy” by AIP Core Founders, NCR Advisory Council Members and BCG Leaders.",
  },
  {
    title: "Presentation on the report",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "By Abhishek Gopalka, Managing Director and Partner, BCG and Amitabh Jaipuria, CEO, AIP",
  },
  {
    title: "Conversation",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "“Navigating Philanthropy in India” featuring:",
  },
  {
    title: "Closing remarks",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "By Ashish Dhawan, Founder-CEO,The Convergence Foundation; Core Founder, AIP",
  },
];
export const dynamic = "force-dynamic";
const getCuratedResourcesExpertsInnerApi = async (
  slug: string
): Promise<TCuratedResourcesExpertsInner> => {
  const response = await Api.getCuratedResourcesExpertsInner(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ innerSlug: string,slug:string }> }) => {
  const asyncInnerSlug = (await params).innerSlug;
  // const asyncSlug = (await params).slug;
  const response = await getCuratedResourcesExpertsInnerApi(asyncInnerSlug);
  if (!response) {
    return;
  }
  const curatedResource = response?.curatedResource;
  const galleryImages = response.curatedResource.galleryImages;
  return (
    <div className="pt-[5rem]">
      <InnerExpertsSectionOne innerData={curatedResource} params={asyncInnerSlug}/>
      <div className="container mx-auto ~pb-[5rem]/[7.5rem]">
        <Gallery galleryImages={galleryImages} />
      </div>
    </div>
  );
};

export default page;
