import BgFaq from "@public/svg/bg-faq.svg";
import Image from "next/image";
import { Api } from "@/api/Api";
import FaqTabGroup from "./_components/FaqTabGroup";
import { TFaqs } from "@/api/type";

export const dynamic = "force-dynamic";
const getFaqApi = async (category: string): Promise<TFaqs[]> => {
  const response = await Api.getFaq(category);
  return response?.data;
};
const FaqPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const asyncSearchParams = await searchParams;
  const category = asyncSearchParams.category
    ? asyncSearchParams.category
    : "General Inquiry";
  const response = await getFaqApi(category);
  if (!response) {
    return;
  }
  return (
    <div className="pt-[5rem]">
      <div className=" relative min-h-screen ">
        <Image
          src={BgFaq}
          alt=""
          className="hidden lg:block left-0 absolute top-[5rem] "
        />
        <FaqTabGroup faqData={response} category={category} />
      </div>
    </div>
  );
};

export default FaqPage;
