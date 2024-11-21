import Agenda from "./_components/Agenda";
import InnerCollaborationsSectionOne from "./_components/InnerCollaborationsSectionOne";
import InnerCollaborationsVideo from "./_components/InnerCollaborationsVideo";
import Gallery from "../../projects-and-programs/[slug]/_components/Gallery";
import Media from "../../projects-and-programs/[slug]/_components/Media";
import InnerCollaborationTestimonials from "./_components/InnerCollaborationTestimonials";
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
    <div className="tw-pt-[5rem]">
      <InnerCollaborationsSectionOne />
      <div className="">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Agenda
        </p>
        <Agenda agendaArray={agendaArray} />
      </div>
      <InnerCollaborationsVideo />
      <div className="container tw-mx-auto">
        <Gallery galleryLink="/our-work/collaborations/slug/event-gallery"/>
      </div>
      <Media />
      <InnerCollaborationTestimonials />
    </div>
  );
};

export default page;
