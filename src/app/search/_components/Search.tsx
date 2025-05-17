"use client";
import CardAnimation from "@/components/animations/CardAnimation";
import React, { useState } from "react";
import ContentOne from "./ContentOne";
import ContentGallery from "./ContentGallery";
import NoData from "@/components/NoData";
import { TSearch } from "@/api/type";
import { Api } from "@/api/Api";
import { useInfiniteQuery, InfiniteData, QueryFunctionContext } from "@tanstack/react-query";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";

export const dynamic = "force-dynamic";

type SearchProps = {
  searchParams: {
    key: string;
    field: string;
    type: string;
    date: string;
  };
};

const fetchData = async (
  context: QueryFunctionContext<[string, SearchProps["searchParams"]]>
): Promise<TSearch[]> => {
  const { pageParam = 1, queryKey } = context;
  const [, params] = queryKey;
  const { key, field, type, date } = params;
  const response = await Api.getSearch({
    key,
    field,
    type,
    date,
    pageparam: Number(pageParam),
  });
  return response?.data ?? [];
};

const Search: React.FC<SearchProps> = ({ searchParams }) => {
  const [currentPage, setCurrentPage] = useState(0);

const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isError,
  isFetching,
  isFetchingNextPage,
} = useInfiniteQuery<TSearch[], Error, InfiniteData<TSearch[]>, [string, SearchProps["searchParams"]]>(
  {
    queryKey: ["search", searchParams],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  }
);

  const handleNextPage = () => {
    fetchNextPage();
    setCurrentPage((prev) => prev + 1);
  };

  const response = data
    ? data.pages.flatMap((page) => page ?? [])
    : [];

  if (isFetching && !data) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      {response && response.length !== 0 ? (
        <div className="pt-[1rem] pb-[7.46rem]">
          <div className="flex flex-col ">
            {response.map((content, i) => {
              const keyPresent =
                content.key === "curatedResource" ||
                content.key === "aipImpactCasestudies" ||
                content.key === "aipImpactPeople" ||
                content.key === "aipImpactTestimonials" ||
                content.key === "npoCasestudies" ||
                content.key === "npoPeople" ||
                content.key === "philanthropistNetworkCasestudies" ||
                content.key === "founderNetworkTestimonials" ||
                content.key === "founderNetworkMethods" ||
                content.key === "aipResource" ||
                content.key === "aipTeam" ||
                content.key === "collaborations" ||
                content.key === "projectAndPrograms";
              const galleryImage = content.key === "galleryImages";
              if (keyPresent) {
                return (
                  <CardAnimation delay={0.03} index={i} key={i}>
                    <ContentOne
                      index={i}
                      key={i}
                      searchData={response}
                      title={content.title}
                      description={content.description}
                      designation={content.designation}
                      initiativeName={content.initiativeName}
                      image={content.image}
                      organisationName={content.organisationName}
                      video={content.video}
                    />
                  </CardAnimation>
                );
              }
              if (galleryImage) {
                return (
                  <CardAnimation index={i} delay={0.03} key={i}>
                    <ContentGallery
                      key={i}
                      title={content.title}
                      description={content.description}
                      index={i}
                      searchData={response}
                      galleryImages={content.galleryImages}
                    />
                  </CardAnimation>
                );
              }
            })}
          </div>
        </div>
      ) : (
        // </div>
        <NoData />
      )}
      {hasNextPage && (
        <div className="flex justify-end w-full pb-16">
          <ButtonAnimation
            onClick={handleNextPage}
            disabled={isFetchingNextPage}
            className=" bg-darkPurple hover:bg-white text-white hover:text-darkPurple transition-all duration-500  px-[1.75rem] py-[0.75rem] leading-[1.4rem] border-white hover:border hover:border-darkPurple rounded-full  "
          >
            View More
          </ButtonAnimation>
        </div>
      )}
    </div>
  );
};

export default Search;
