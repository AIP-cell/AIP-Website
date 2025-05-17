"use client";
import CardAnimation from "@/components/animations/CardAnimation";
import React, { useState } from "react";
import ContentOne from "./ContentOne";
import ContentGallery from "./ContentGallery";
import NoData from "@/components/NoData";
import { TSearch } from "@/api/type";
import { Api } from "@/api/Api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const dynamic = "force-dynamic";

const fetchData = async ({
  pageParam = 1,
  key,
  field,
  type,
  date,
}: {
  key: string;
  field: string;
  type: string;
  date: string;
  pageParam: number;
}): Promise<TSearch[]> => {
  {
    const response = await Api.getSearch({
      key,
      field,
      type,
      date,
      pageparam: pageParam,
    });

    return response?.data;
  }
};

const Search = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data, // InfiniteQueryData<Page>
    error, // Error
    fetchNextPage,
    hasNextPage, // boolean
    isError,
    isFetching, // boolean
    isFetchingNextPage,
  } = useInfiniteQuery<TSearch[], Error>({
    queryKey: ["search"],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      // If the last page returned less than 10 items, no more pages
      if (!lastPage || lastPage.length < 10) return undefined;
      return allPages.length + 1;
    },
  });

  const handleNextPage = () => {
    fetchNextPage();
    setCurrentPage((prev) => prev + 1);
  };

  const paginatedResults = data
    ? data.pages.flatMap((page) => page ?? [])
    : null;

  if (isFetching && !data) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      {paginatedResults && paginatedResults.length !== 0 ? (
        <div className="pt-[1rem] pb-[7.46rem]">
          <div className="flex flex-col ">
            {paginatedResults.map((content, i) => {
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
                      searchData={paginatedResults}
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
      <button
        onClick={handleNextPage}
        disabled={isFetchingNextPage}
        className="mt-4 bg-black text-white px-4 py-2 rounded"  
      >
        Next Page
      </button>
    )}

    </div>
  );
};

export default Search;
