import AddCollaborationMediaPage from "@/app/(admin)/_shared/components/collaborations-media/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddCollaborationMediaPage popperPlacement="bottom-start" />;
};

export default Add;
