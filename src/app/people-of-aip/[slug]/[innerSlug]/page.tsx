import Link from "next/link";
import Bg from "@public/svg/people-of-aip/peachCurveRightDetailsPage.svg";
import Linkedin from "@public/svg/linkedinPurple.svg";
import LinkSvg from "@public/svg/linkingPurple.svg";
import Image from "next/image";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import XSvg from "@/components/svg/XSvg";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import PSvg from "@/components/svg/PSvg";
import InnerCollaborationsVideo from "@/app/our-work/collaborations/[slug]/_components/InnerCollaborationsVideo";
import { Api } from "@/api/Api";
import { TPeopleOfAipGetOne } from "@/api/type";
import { notFound } from "next/navigation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";

export const dynamic = "force-dynamic";
const getPeopleOfAipGetOneApi = async (
  slug: string
): Promise<TPeopleOfAipGetOne> => {
  const response = await Api.getPeopleOfAipGetOne(slug);
  return response?.data;
};
const InnerTeamPage = async ({
  params,
}: {
  params: Promise<{ innerSlug: string; slug: string }>;
}) => {
  const urlParams = await params;
  const response = await getPeopleOfAipGetOneApi(urlParams.innerSlug);
  if (!response) {
    notFound();
  }
  const team = response?.teams;
  let textTwoBreadCrump;
  if (urlParams.slug === "team-aip") {
    textTwoBreadCrump = "Team AIP";
  } else if (urlParams.slug === "core-founder") {
    textTwoBreadCrump = "Our Core Founders";
  } else if (urlParams.slug === "founders") {
    textTwoBreadCrump = "Founders";
  } else if (urlParams.slug === "advisory-board") {
    textTwoBreadCrump = "Our Advisory Board";
  } else if (urlParams.slug === "experts") {
    textTwoBreadCrump = "Experts";
  }

  return (
    <div className="pt-[5rem]">
      <div className="w-full relative ">
        <Image
          src={Bg}
          alt="background-svg"
          className=" absolute ~top-[2.75rem]/0 right-0 z-[-1] ~w-[15.438rem]/[32.813rem] ~h-[23.524rem]/[50rem]"
        />
        <div className="relative container mx-auto">
          <div className="~px-[1.25rem]/[7.8rem] ~pb-[4.9rem]/[7.5rem]">
            <BreadCrump
              textOne="People of AIP"
              linkOne="/people-of-aip"
              textTwo={textTwoBreadCrump}
              linkTwo={`/people-of-aip/${urlParams.slug}`}
              textThree={`${team?.name}`}
              linkThree={`/people-of-aip/${urlParams.slug}/${urlParams.innerSlug}`}
            />
            <div className="~pt-[4.3rem]/[5rem] flex flex-col-reverse lg:grid grid-cols-3 gap-[1.238rem]">
              <div className="col-span-2  relative">
                <div className=" hidden md:block">
                  <FadeInAnimation delay={0.1} y1={20} y2={0}>
                    <h2 className="~text-h4/h2 text-midGray leading-[3.3rem] font-playFair">
                      {team?.name}
                    </h2>
                  </FadeInAnimation>
                  <h4 className="pt-[1rem] ~text-h6/h5 text-gray40 font-playFairItalic ~pr-[4rem]/0">
                    {team?.designation}
                  </h4>
                </div>
                <div className="~pt-[2rem]/[2.5rem] text-midGray ~pr-0/[6.56rem]">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: team?.description || "",
                    }}
                    className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4"
                  ></div>

                  <div className=" ~pt-[2rem]/[2.5rem]  flex-col flex gap-[1rem]">
                    <div className="flex gap-[1rem]">
                      {team?.linkedln && (
                        <Link href={team.linkedln} target="_blank">
                          <ButtonAnimation className="rounded-full ~p-[0.5rem]/[0.875rem] bg-bgGray5">
                            <Image
                              src={Linkedin}
                              alt=""
                              className="w-[1.375rem]"
                            />
                          </ButtonAnimation>
                        </Link>
                      )}
                      {team?.twitter && (
                        <Link href={team.twitter} target="_blank">
                          <ButtonAnimation className="rounded-full flex justify-center items-center text-textPurple hover:text-white p-[0.93rem] bg-bgGray5 hover:bg-textPurple">
                            <XSvg className="size-[1.063rem]" />
                          </ButtonAnimation>
                        </Link>
                      )}
                    </div>
                    {team?.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link?.link}
                        target="_blank"
                        className="flex w-[17.375rem] gap-[0.98rem] ~pl-[1rem]/[1.25rem] ~pr-[2.813rem]/[1.25rem] ~py-[0.87rem]/[0.76rem] bg-bgGray5 rounded-full"
                      >
                        <Image
                          src={LinkSvg}
                          alt=""
                          className="size-[1.25rem]"
                        />
                        <p className="text-gray80 ~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4">
                          {link.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-1 relative">
                <FadeInAnimation delay={0.1} y1={20} y2={0}>
                  <PSvg
                    src={team?.image}
                    className="relative z-10 ~w-[18.438rem]/[25rem]"
                  />
                </FadeInAnimation>
                <div className=" block md:hidden">
                  <h2 className="~text-h4/h2 text-midGray leading-[3.3rem] font-playFair">
                    {team?.name}
                  </h2>
                  <h4 className="~pt-[0.75rem]/[1rem] font-medium ~text-h6M/h5 text-gray40 font-playFairItalic ~pr-[4rem]/0">
                    {team?.designation}
                  </h4>
                </div>
                {team?.quote && (
                  <FadeInAnimation delay={0.1} y1={20} y2={0}>
                    <p className="text-h5 pt-[2rem] text-gray90 font-playFair font-medium leading-[1.75rem]">
                      {team?.quote}
                    </p>
                  </FadeInAnimation>
                )}
              </div>
            </div>
            {team.linkOrVideo && (
              <div className="">
                <InnerCollaborationsVideo
                  linkOrVideo={team.linkOrVideo}
                  video={team?.video}
                  videoLink={team?.videoLink}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerTeamPage;
