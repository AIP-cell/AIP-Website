import BreadCrump from "@/components/bread-crump/BreadCrump";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { TAipResourcesCategory } from "@/api/type";
import { notFound } from "next/navigation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import NoData from "@/components/NoData";
import ResourcesTabAndSelect from "../../_components/ResourcesTabAndSelect";
import CustomFilter from "@/components/custom/CustomFilter";
import DateFilter from "@/components/custom/DatePick";
import SearchSvg from "@/components/svg/SearchSvg";
import CrossSvg from "@/components/svg/CrossSvg";
import CustomSearch from "@/components/custom/CustomSearch";

export const dynamic = "force-dynamic";

const tabList = [
  {
    slug: "voices-of-the-ecosystem",
    toSend: "voicesOfTheEcosystem",
    name: "Voices Of the Ecosystem",
    link: "/resource-center/gallery/voices-of-the-ecosystem",
  },
  {
    slug: "philspeak",
    toSend: "philSpeak",
    name: "PhilSpeak",
    link: "/resource-center/gallery/philspeak",
  },
  {
    slug: "celebrating-philanthropy",
    toSend: "celebratingPhilanthropy",
    name: "Celebrating Philanthropy",
    link: "/resource-center/gallery/celebrating-philanthropy",
  },
  {
    slug: "events-and-publications",
    toSend: "eventsAndPublications",
    name: "Events & Publications",
    link: "/resource-center/gallery/events-and-publications",
  },
  {
    slug: "aip-speak",
    toSend: "aipSpeak",
    name: "AIP Speak",
    link: "/resource-center/gallery/aip-speak",
  },
];

const aipGalleryFilter = [
  {
    filterBy: "gallery",
    filter: [
      {
        type: "domain",
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
        type: "c_type",
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
    ],
  },
];

const getAipResourcesData = async (
  category: string,
  {
    domain,
    c_type,
    date,
    q,
  }: { domain: string; c_type: string; date: string; q: string }
): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getGallery(category, { domain, c_type, date, q });
  return response?.data;
};

const GalleryCategoryPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    domain: string;
    c_type: string;
    date: string;
    q: string;
  }>;
}) => {
  const { slug } = await params;

  const filterBySlug = tabList.find((item) => item.slug === slug);

  if (!filterBySlug) return notFound();

  const SearchParam = await searchParams;
  const { domain, c_type, date, q } = await searchParams;
  const response = await getAipResourcesData(filterBySlug!.toSend, {
    domain,
    c_type,
    date,
    q,
  });

  if (!response) return notFound();

  const filterData = aipGalleryFilter.find(
    (item) => item.filterBy === "gallery"
  );

  return (
    <div className="pt-[5rem] overflow-x-hidden min-h-screen">
      <div className="container mx-auto relative ~px-5/[7.5rem] pb-[7.5rem]">
        <div className="~px-5/flex ~pt-0/[1.25rem] gap-[.75rem][7.8rem]">
          <BreadCrump
            textOne="Resource Center"
            linkOne="#"
            textTwo="Gallery"
            linkTwo="/resource-center/gallery/voices-of-the-ecosystem"
          />
          <div className="max-w-[51.188rem] ~pt-[4.3rem]/[5rem] ~pb-[2.5rem]/[4rem]">
            <WordStaggerAnimation
              text={"Gallery"}
              className="font-playFair leading-[3.3rem] ~text-h4/[3rem] text-gray80"
            />
          </div>
        </div>
        <ResourcesTabAndSelect
          resources="gallery"
          currentTab={filterBySlug?.name}
          tabList={tabList}
          mainClassName="!pt-0"
          tabClassName="!w-full  !px-0"
          tabListClassName="!w-full"
        />
        {filterData && (
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col md:flex-row md:items-center pt-[2rem]  ~gap-0/[0.75rem] ">
              <p className="~pb-[1.25rem]/0 text-gray40  ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
                Filter by:
              </p>
              <div className="relative flex flex-wrap gap-[.75rem]">
                {filterData?.filter.map((data, i) => (
                  <CustomFilter
                    key={i}
                    searchParams={{ ...SearchParam }}
                    filterKey={data?.type}
                    type={data?.type}
                    optionsArray={data?.options}
                  />
                ))}
                {<DateFilter searchParams={{ ...SearchParam }} />}
              </div>
            </div>

            {/* Create a search bar */}
            <div className="mt-[2rem]">
              <CustomSearch
                searchParams={{ ...SearchParam }}
                q={SearchParam.q}
              />
            </div>
          </div>
        )}
        {response.length !== 0 ? (
          <div className="pt-[3.25rem] grid md:grid-cols-2 lg:grid-cols-3 gap-[4.5rem]">
            {response.map((item, i) => (
              <CardAnimation delay={0.1} key={i}>
                <ResourceCard
                  city={item.city}
                  linkKey={"gallery"}
                  slug={item?.slug}
                  isLinkOrPdf={item?.isLinkOrPdf}
                  file={item?.file}
                  fileLink={item?.fileLink}
                  key={i}
                  src={item?.image}
                  title={item?.title}
                  desc={item?.description}
                  category={item?.domain}
                  domain={item?.domain}
                  date={item?.date}
                />
              </CardAnimation>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default GalleryCategoryPage;
