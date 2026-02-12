import AddProgramsMediaPage from "@/app/(admin)/_shared/components/programs-projects-media/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddProgramsMediaPage popperPlacement="bottom-start" />;
};

export default Add;
