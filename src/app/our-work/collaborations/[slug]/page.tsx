import InnerCollaborations from "./_components/InnerCollaborations";
import { Api } from "@/api/Api";
import { TOneCollaborationPageData } from "@/api/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const getOneCollaborationsApi = async (
  slug: string
): Promise<TOneCollaborationPageData> => {
  const response = await Api.getOneCollaborations(slug);
  return response.data;
};
const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ city: string }>;
}) => {
  const asyncParam = (await params).slug;
  const asyncSearchParam = (await searchParams).city;
  let defaultCity: string = asyncSearchParam;
  const response = await getOneCollaborationsApi(asyncParam);

  const collaboration = response.collaboration;
  if (!response) {
    notFound();
  }
  return (
    <div className="pt-[5rem]">
      {collaboration && (
        <InnerCollaborations collaboration={collaboration} slug={asyncParam} />
      )}
    </div>
  );
};

export default page;
