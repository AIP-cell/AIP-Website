import React from "react";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import Image from "next/image";

import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import BuySvg from "@/components/svg/BuySvg";
import BooksSvg from "@/components/svg/BooksSvg";
import Link from "next/link";
import { Api } from "@/api/Api";
import { notFound } from "next/navigation";
import { StorageUrl } from "@/utils/BaseUrl";
import { Tbook } from "@/api/type";
// import Gallery from "./_components/Gallery";
// import Video from "./_components/Video";

export const dynamic = "force-dynamic";

const getBookInner = async (slug: string): Promise<Tbook> => {
  const response = await Api.getBookInner(slug);
  return response?.data;
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const param = await params;
  const response = await getBookInner(param.slug);
  console.log(response);
  if (!response) {
    notFound();
  }
  return (
    <div className=" ~pt-[5rem]/[10rem] relative ">
      <BooksSvg className="w-[26.6875rem] hidden lg:flex   ~pt-[5rem]/[10rem] absolute right-0 shrink-0" />
      <div className="container mx-auto   ~px-5/[7.5rem] ~pb-[3rem]/[7.5rem]">
        <div className=" ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Books"
            linkTwo="/resource-center/books"
            textThree={"Live To Give"}
            linkThree={`/resource-center/books/live-to-give}`}
          />
          <div className=" ~pt-[3rem]/[4rem]">
            <WordStaggerAnimation
              text={response.title}
              className="font-playFair ~leading-[2.5rem]/[3.25rem] hidden lg:flex ~text-h4/h3 text-[#45484D] tracking-[-1px]"
            />
          </div>
          <div className="flex lg:flex-row flex-col-reverse ~gap-[1rem]/[1.25rem]  ">
            <div className="pt-[1rem] shrink-0 lg:w-[60%]">
              <div className=" ~pb-[0.75rem]/[2rem]">
                <WordStaggerAnimation
                  text={response.title}
                  className="font-playFair ~leading-[2.5rem]/[3.25rem] lg:hidden flex ~text-h4/h3 text-[#45484D] tracking-[-1px]"
                />
              </div>

              <p className="font-medium leading-[1.75rem] font-playFair text-h5 text-gray80 ">
                By{" "}
                <span

                // className="underline underline-offset-3 decoration-[1.5px]"
                >
                  {response.author}
                </span>
              </p>
              {/* <div className="text-[#81848F] ~text-h9Copy4/h7Copy2 ~py-[0.75rem]/[1rem] ~leading-[1.4rem]/[1.75rem] font-playFairItalic ">
                Know
              </div> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: response?.description || "",
                }}
                className=" ~text-h9Copy5/h9Copy4 lg:max-w-[50ch] ~pt-[0.75rem]/[1rem] ~leading-[1.225rem]/[1.4rem] text-midGray/70 "
              ></div>
              <div className="flex flex-wrap  ~gap-[0.5rem]/[1rem]">
                {response.buttons.map((item, i) => (
                  <Link key={i} href={item.link} target="_blank">
                    <ButtonAnimation className=" z-30 bg-darkPurple ~mt-[1.25rem]/[2.5rem] border border-darkPurple  hover:bg-transparent text-white hover:text-darkPurple rounded-full transition-all duration-500 ">
                      <p
                        className={`~px-[1rem]/[2rem] flex gap-[0.75rem] items-center ~py-[0.625rem]/[0.75rem] ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]`}
                      >
                        {item.name} <BuySvg className="size-[0.9375rem]" />
                      </p>
                    </ButtonAnimation>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:w-[40%]">
              <div className="relative w-full ~h-[20.8926620483rem]/[39.0306129456rem]">
                {" "}
                <Image
                  fill
                  src={StorageUrl + response.image}
                  alt=""
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Video />
      <Gallery /> */}
    </div>
  );
};

export default page;
