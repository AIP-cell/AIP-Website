import AddGalleryPage from "@/app/(admin)/_shared/components/galleries/AddPage";
export const dynamic = "force-dynamic";
const Add: React.FC = async () => {
  return <AddGalleryPage popperPlacement="bottom-start" />;
};

export default Add;
