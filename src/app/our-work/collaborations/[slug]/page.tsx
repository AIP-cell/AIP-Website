import InnerCollaborations from "./_components/InnerCollaborations";
import { Api } from "@/api/Api";
import { TOneCollaborationPageData } from "@/api/type";

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
  return (
    <div className="pt-[5rem]">
      <InnerCollaborations collaboration={collaboration} slug={asyncParam} />
    </div>
  );
};

export default page;
