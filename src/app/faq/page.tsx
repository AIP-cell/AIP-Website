import BgFaq from "@public/svg/bg-faq.svg";
import List from "./_components/List";
import Image from "next/image";
import Link from "next/link";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import FaqTab from "./_components/FaqTab";
import { FaqItem } from "./_components/FaqItem";
import { Api } from "@/api/Api";
import FaqTabGroup from "./_components/FaqTabGroup";
import { TFaqs, TFaqsPageData } from "@/api/type";

export const dynamic = "force-dynamic";
const getFaqApi = async (category: string): Promise<TFaqs[]> => {
  const response = await Api.getFaq(category);
  return response.data;
};
const FaqPage = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const category = searchParams.category
    ? searchParams.category
    : "General Inquiry";
  const response = await getFaqApi(category);
  console.log("response:::", response);
  return (
    <div className="pt-[5rem]">
      <div className=" relative h-screen ">
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
