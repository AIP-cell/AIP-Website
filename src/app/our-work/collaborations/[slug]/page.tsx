import Agenda from "./_components/Agenda";
import InnerCollaborations from "./_components/InnerCollaborations";
import InnerCollaborationsVideo from "./_components/InnerCollaborationsVideo";
import Gallery from "../../projects-and-programs/[slug]/_components/Gallery";
import Media from "../../projects-and-programs/[slug]/_components/Media";
import InnerCollaborationTestimonials from "./_components/InnerCollaborationTestimonials";
import { Api } from "@/api/Api";
import { TOneCollaborationPageData } from "@/api/type";
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
const getOneCollaborationsApi = async (
  slug: string
): Promise<TOneCollaborationPageData> => {
  const response = await Api.getOneCollaborations(slug);
  return response.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneCollaborationsApi(asyncParam);
  const collaboration = response.collaboration;
  const cities = collaboration?.cities;
  const media = cities;
  return (
    <div className="pt-[5rem]">
      <InnerCollaborations collaboration={collaboration} slug={asyncParam}/>
    </div>
  );
};

export default page;
