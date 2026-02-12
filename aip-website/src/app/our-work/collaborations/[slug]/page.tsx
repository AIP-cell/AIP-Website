import InnerCollaborations from "./_components/InnerCollaborations";
import { Api } from "@/api/Api";
import { TOneCollaborationPageData } from "@/api/type";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const response = await Api.getOneCollaborations(slug);
  const seo = response?.data.collaboration ?? {};
  return {
    ...seo,
    alternates: {
      canonical: `/our-work/collaborations/${slug}`,
    },
  };
}

const getOneCollaborationsApi = async (
  slug: string
): Promise<TOneCollaborationPageData> => {
  const response = await Api.getOneCollaborations(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const asyncParam = (await params).slug;
  const response = await getOneCollaborationsApi(asyncParam);
  if (!response) {
    notFound();
  }
  const collaboration = response?.collaboration;
  return (
    <div className="~pt-[5rem]/[10rem]">
      {collaboration && (
        <InnerCollaborations collaboration={collaboration} slug={asyncParam} />
      )}
    </div>
  );
};

export default page;
