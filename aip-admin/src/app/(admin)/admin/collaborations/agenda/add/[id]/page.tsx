import AddCollaborationAgendaPage from "@/app/(admin)/_shared/components/collaborations-agenda/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddCollaborationAgendaPage popperPlacement="bottom-start" />;
};

export default Add;
