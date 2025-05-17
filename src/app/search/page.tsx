import BreadCrump from "@/components/bread-crump/BreadCrump";
import React from "react";
import CustomFilter from "@/components/custom/CustomFilter";
import { Api } from "@/api/Api";
import { TSearch } from "@/api/type";
import SearchBar from "./_components/SearchBar";
import DateFilter from "@/components/custom/DatePick";
import ContentOne from "./_components/ContentOne";
import ContentGallery from "./_components/ContentGallery";
import CardAnimation from "@/components/animations/CardAnimation";
import NoData from "@/components/NoData";
import Search from "./_components/Search";

const searchFilter = [
  {
    type: "field",
    options: [
      "All",
      "Art and Culture",
      "Education",
      "Environment",
      "Health and Nutrition",
      "Legal and Judiciary",
      "Livelihood",
      "Disability",
      "Rural Development",
      "Sports",
      "WASH",
      "Philanthrophy",
      "Women & Child",
    ],
  },
  {
    type: "type",
    options: [
      "Sector primers",
      "Giving Journey",
      "Research Study",
      "Philanthropist Speak",
      "Books",
      "Articles",
      "PoV",
      "White paper",
      "Newsletter",
    ],
  },
];

export const dynamic = "force-dynamic";
const getSearchApi = async ({
  key,
  field,
  type,
  date,
}: {
  key: string;
  field: string;
  type: string;
  date: string;
}): Promise<TSearch[]> => {
  const response = await Api.getSearch({
    key,
    field,
    type,
    date,
  });
  return response?.data;
};
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    key: string;
    field: string;
    type: string;
    date: string;
  }>;
}) => {
  const asyncSearchParam = await searchParams;
  const { key, field, type, date } = await searchParams;
  const response = await getSearchApi({ key, field, type, date });

  return (
    <div className="pt-[5rem]">
      <div className="relative container mx-auto ~pt-[4.313rem]/[5.5rem] ~px-[1.25rem]/[7.8rem]">
        <BreadCrump textOne="Search" linkOne="/search" />
        <SearchBar key={key} searchParams={{ ...asyncSearchParam }} />
        <div>
          <div className="flex flex-wrap ~pt-[3.25rem]/[4rem] items-center gap-[0.75rem]">
            <p className=" text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              Filter by:
            </p>
            <div className="flex flex-wrap gap-[.75rem]">
              {searchFilter.map((items, i) => (
                <CustomFilter
                  searchParams={{ ...asyncSearchParam }}
                  filterKey={items.type}
                  type={items.type}
                  key={i}
                  optionsArray={items.options}
                />
              ))}
              <DateFilter searchParams={{ ...asyncSearchParam }} />
            </div>
          </div>
          {key && (
            <p className="text-gray40 font-playFair text-center py-[1rem]">
              &quot;Search result for {key}&quot;
            </p>
          )}

          <Search/>
          {/* {response && response.length != 0 && (
            <AllTabContent searchData={response} />
          )} */}
          {/* {response && response.length != 0 ? (
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
          )} */}
        </div>
      </div>
    </div>
  );
};

export default page;
