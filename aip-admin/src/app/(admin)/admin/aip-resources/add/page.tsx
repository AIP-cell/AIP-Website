import AddAipResourcesPage from "@/app/(admin)/_shared/components/aip-resources/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddAipResourcesPage popperPlacement="bottom-start" />;
};

export default Add;
