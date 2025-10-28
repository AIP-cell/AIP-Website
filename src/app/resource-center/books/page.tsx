import BreadCrump from "@/components/bread-crump/BreadCrump";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
export const dynamic = "force-dynamic";

import { Metadata } from "next";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { Tbook } from "@/api/type";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resource-center/books",
  },
};

const getAllBooksApi = async (): Promise<Tbook[]> => {
  const response = await Api.getBooks();
  return response.data;
};

const page = async () => {
  const response = await getAllBooksApi();
  if (!response) {
    notFound();
  }
  return (
    <div className="~pt-[5rem]/[10rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Books"
            linkTwo="/resource-center/books"
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <WordStaggerAnimation
              text="Books"
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
          {response?.map((item, i) => {
            const modalText = item?.description
              ?.replace(/<\/?p>/g, "")
              ?.replace(/\r?\n|\r/g, "")
              ?.trim();
            return (
              <CardAnimation delay={0.1} key={i}>
                <ResourceCard
                  linkKey={"books"}
                  slug={item?.slug}
                  key={i}
                  src={item?.image}
                  title={item?.title}
                  desc={modalText}
                />
              </CardAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
