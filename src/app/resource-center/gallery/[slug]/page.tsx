import BreadCrump from "@/components/bread-crump/BreadCrump";
import ResourceCard from "@/components/cards/ResourceCard";
import { Api } from "@/api/Api";
import { TAipResourcesCategory } from "@/api/type";
import { notFound } from "next/navigation";
import WordStaggerAnimation from "@/components/animations/WordStaggerAnimation";
import CardAnimation from "@/components/animations/CardAnimation";
import NoData from "@/components/NoData";
import ResourcesTabAndSelect from "../../_components/ResourcesTabAndSelect";

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

const getAipResourcesData = async (
  category: string
): Promise<TAipResourcesCategory[]> => {
  const response = await Api.getGallery(category);
  return response?.data;
};

const GalleryCategoryPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const filterBySlug = tabList.find((item) => item.slug === slug);

  if (!filterBySlug) return notFound();

  const response = await getAipResourcesData(filterBySlug.toSend);
  if (!response) return notFound();

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
