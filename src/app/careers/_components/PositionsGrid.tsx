"use client";
import React, { useRef, useState } from "react";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import UserCheckSvg from "@/components/svg/UserCheckSvg";
import Link from "next/link";
import LeftSlickArrowSvg from "@/components/svg/LeftSlickArrowSvg";
import RightSlickArrowSvg from "@/components/svg/RightSlickArrowSvg";
import { TJob } from "@/api/type";
import { useRouter } from "next/navigation";

type Props = {
  data: TJob[];
  totalPages?: number;
};
const PositionsGrid = ({ data, totalPages }: Props) => {
  const parentDivRef = useRef<any>();
  const router = useRouter();
  const [page, setPage] = useState(1);
  if (!data) {
    return;
  }
  const itemPerPage = 10;

  const nextPage = () => {
    if (page > 1) {
      setPage(page + 1);
      router.push(`/careers/all-positions?page=${page}`);
    }
    // setPage((prev) => {
    //   const newPage = prev + 1;
    //   if (newPage > totalPage) return 1;
    //   return newPage;
    // });
  };

  const previousPage = () => {
    if (totalPages) {
      if (page <= totalPages) {
        setPage(page - 1);
        router.push(`/careers/all-positions?page=${page}`);
      }
    }
    // setPage((prev) => {
    //   const newPage = prev - 1;
    //   if (newPage < 1) return totalPage;
    //   return newPage;
    // });
  };

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
    parentDivRef.current.scrollIntoView();
  };
  return (
    <div ref={parentDivRef}>
      <div className="relative ~pt-[1rem]/[3rem]">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between ~gap-0/[5.4rem] w-full  py-8  border-b border-gray10"
          >
            <div className="">
              <p className="font-playFair ~text-h4a/h4 text-gray80 ~leading-[2.113rem]/[2.6rem]">
                {item?.position_name}
              </p>
              <div className="relative">
                <div
                  className="py-4 ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem] font-inter text-midGray h-[10rem] overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
                <div className="absolute bg-gradient-to-b from-transparent to-bgLightPeach z-[1] inset-0 size-full"></div>
              </div>
            </div>
            <div className="text-end leading-[1.4rem] ~pt-[2rem]/0 font-inter w-fit flex items-end ~pb-0/4">
              <ButtonAnimation className="">
                <Link
                  target="_blank"
                  href={item?.career_page_url}
                  className="font-inter border-2 border-darkPurple text-h9BodyCopy5 rounded-3xl flex items-center gap-2 leading-[1.225rem]  text-darkPurple font-medium hover:text-white bg-white px-[1.75rem] py-[0.75rem] hover:bg-darkPurple"
                >
                  <p>Apply</p>
                  <UserCheckSvg className="size-[1.25rem]" />
                </Link>
              </ButtonAnimation>
            </div>
          </div>
        ))}
      </div>
      {data.length > itemPerPage && (
        <div className="flex justify-center ~pt-[2.5rem]/[8.5rem] md:block">
          <div className="flex h-8 items-center justify-center rounded-full">
            <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center ">
              <button onClick={previousPage}>
                <LeftSlickArrowSvg />
              </button>
            </div>

            {totalPages && (
              <div className="text-global-font-mob-text2 flex  gap-[1rem]">
                {Array.from({ length: totalPages }, (items: string, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageClick(i + 1)}
                    className={`w-[1.5rem] rounded-full ${
                      page === i + 1
                        ? " bg-darkPurple  text-white "
                        : " bg-white  text-darkPurple "
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center">
              <button onClick={nextPage}>
                <RightSlickArrowSvg />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PositionsGrid;
