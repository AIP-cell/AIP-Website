import BreadCrump from "@/components/bread-crump/BreadCrump";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { TAipResourcesCategory } from "@/api/type";
import BlogCard from "@/components/cards/BlogCard";

export const dynamic = "force-dynamic";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resource-center/blogs",
  },
};

const getAllBlogApi = async (): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getAllBlog();
  return response?.data;
};
const page = async () => {
  const response = await getAllBlogApi();
  if (!response) {
    notFound();
  }
  return (
    <div className="pt-[5rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Blogs"
            linkTwo="/resource-center/blogs"
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <WordStaggerAnimation
              text="Blogs"
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
          {response?.map((item, i) => (
            <CardAnimation delay={0.1} key={i}>
              <BlogCard
                slug={item?.slug}
                name={item?.author}
                readTime={item?.readingTime}
                key={i}
                src={item?.image}
                title={item?.title}
                desc={item?.shortDescription}
                category={item?.domain}
                domain={item?.domain}
                date={item?.date}
              />
            </CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
