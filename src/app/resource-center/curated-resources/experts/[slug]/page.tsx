import Agenda from "@/app/our-work/collaborations/[slug]/_components/Agenda";
import InnerCollaborationsSectionOne from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsSectionOne";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import InnerCollaborationTestimonials from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationTestimonials";
import Gallery from "@/app/our-work/projects-and-programs/[slug]/_components/Gallery";
import Media from "@/app/our-work/projects-and-programs/[slug]/_components/Media";
import InnerExpertsSectionOne from "./_components/InnerExpertsSectionOne";

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
const page = () => {
  return (
    <div className="pt-[5rem]">
      <InnerExpertsSectionOne />
      <div className="container mx-auto ~pb-[5rem]/[7.5rem]">
        <Gallery />
      </div>
    </div>
  );
};

export default page;
