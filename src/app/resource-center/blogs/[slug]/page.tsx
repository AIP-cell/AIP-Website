import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import Image from "next/image";
import XSvg from "@/components/svg/XSvg";
import LinkedinSvg from "@/components/svg/LinkedinSvg";
import LinkSvg from "@/components/svg/LinkSvg";
import FilledYoutubeSvg from "@/components/svg/FilledYoutubeSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { StorageUrl } from "@/utils/BaseUrl";
import dayjs from "dayjs";
import { TInnerBlog } from "@/api/type";
import Link from "next/link";
import Tags from "./_components/Tags";

export const dynamic = "force-dynamic";

const getOneBlogApi = async (slug: string): Promise<TInnerBlog> => {
  const response = await Api.getOneBlog(slug);
  return response?.data;
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const param = await params;
  const response = await getOneBlogApi(param.slug);
  if (!response) {
    notFound();
  }
  const dateFormat = dayjs(response.date).format("D MMMM");
  const UpdateDateFormat = dayjs(response.updatedAt).format("D MMMM");
  const processedDescription = response?.description
    ?.replace(/style="[^"]*"/g, "")
    .replace(
      /<a(?![^>]*target=)/g,
      '<a target="_blank" rel="noopener noreferrer" '
    );
  return (
    <div className="pt-[5rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~pl-5/[7.5rem] ~pr-5/[19rem] ~pb-[3rem]/[7.5rem]">
        <div className=" ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Blogs"
            linkTwo="/resource-center/blogs"
            textThree={response.title}
            linkThree={`/resource-center/blogs/${param.slug}`}
          />
          <div className=" ~pt-[4.6rem]/[5rem]">
            <WordStaggerAnimation
              text={response.title}
              className="font-playFair ~leading-[2.5rem]/[3.25rem] ~text-h4/h3 text-gray80 tracking-[-1px]"
            />
          </div>
          <div className="~pt-[2rem]/[2.5rem]">
            <p className="font-medium leading-[1.75rem] font-playFair text-h5 text-gray80 ">
              By{" "}
              <span className="underline underline-offset-3 decoration-[1.5px]">
                {response.author}
              </span>
            </p>
            <p className="leading-[1.4rem] text-midGray pt-[0.5rem] ">
              {dateFormat} | {response.readingTime}
            </p>
            <p className="leading-[1.4rem] text-midGray pt-[0.5rem] ">
              {UpdateDateFormat}
            </p>
          </div>
          <div className="w-full h-[1.5px] bg-gray10 ~my-[2rem]/[2.5rem] "></div>
          <div className="w-full h-[25rem] relative overflow-hidden">
            <Image
              src={StorageUrl + response.image}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: processedDescription || "" }}
            className="blog-description-section ~pt-[2rem]/[2.5rem] ~text-h9Copy5/[1rem] ~leading-[1.22rem]/[1.4rem] text-midGray font-sans text-base
             [&_a]:text-blue-400 [&_a]:underline "
          ></div>
          <div className="flex ~gap-[1rem]/[1.25rem]  text-midGray ~pt-[2rem]/[2.5rem] ">
            <Tags tagArray={response.tags} />
          </div>
          <div className="w-full h-[1.5px] bg-gray10 ~my-[2rem]/[2.5rem] "></div>
          <div className="flex ~gap-[0.7rem]/[1.25rem] items-center">
            {response.twitter && response.twitter != "" && (
              <Link href={response.twitter} target="_blank">
                <ButtonAnimation className="bg-gray50 text-white hover:bg-white hover:!text-gray50 rounded-full p-[0.75rem]">
                  <XSvg className="size-[1rem]" />
                </ButtonAnimation>
              </Link>
            )}
            {response.linkedIn && response.linkedIn != "" && (
              <Link href={response.linkedIn} target="_blank">
                <ButtonAnimation className="bg-gray50 text-white hover:bg-white hover:text-gray50 rounded-full p-[0.75rem]">
                  <LinkedinSvg className="size-[1rem]" />
                </ButtonAnimation>
              </Link>
            )}
            {response.youtube && response.youtube != "" && (
              <Link href={response.youtube} target="_blank">
                <ButtonAnimation className="bg-gray50 text-white hover:bg-white hover:text-gray50 rounded-full p-[0.75rem]">
                  <FilledYoutubeSvg className="size-[1rem]" />
                </ButtonAnimation>
              </Link>
            )}
            {response.otherLink && response.otherLink != "" && (
              <Link href={response.otherLink} target="_blank">
                <ButtonAnimation className="bg-gray50 text-white hover:bg-white hover:text-gray50 rounded-full p-[0.75rem]">
                  <LinkSvg className="size-[1rem]" />
                </ButtonAnimation>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
