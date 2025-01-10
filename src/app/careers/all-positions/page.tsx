import React from "react";
import careerBg from "@public/svg/careers/careerBg.svg";
import careerSmallBg from "@public/svg/careerHeroSvg.svg";
import rightBottomWave from "@public/svg/about/philanthropist-network/peachVertWaveLeft.tsx.svg";
import Image from "next/image";
import Link from "next/link";
import PositionsGrid from "../_components/PositionsGrid";
import BreadCrump from "@/components/bread-crump/BreadCrump";
import CustomFilter from "@/components/custom/CustomFilter";
import { Api } from "@/api/Api";
import { TAllPositions } from "@/api/type";

const getCareersApi = async (page: string): Promise<TAllPositions> => {
  const response = await Api.getCareers(page);
  return response.data;
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = (await searchParams).page;
  const response = await getCareersApi(page);
  if (!response) return;
  const totalPages = response.pageCount;
  return (
    <div className="pt-[5rem]">
      <div className=" relative bg-container mx-auto ">
        <Image
          src={careerBg}
          alt=""
          className="hidden md:block absolute top-[-8rem] w-full"
        />
        <Image
          src={careerSmallBg}
          alt=""
          className="block md:hidden  absolute top-[-4.5rem] w-full"
        />
        <Image
          src={rightBottomWave}
          alt="peach-wave"
          className="hidden lg:block absolute bottom-0 right-0"
        />
        <div className="container mx-auto relative ~px-[1.25rem]/[7.8rem] ~pt-[4.3rem]/[5rem]">
          <BreadCrump
            textOne="Careers"
            linkOne="/careers"
            textTwo="All Positions"
            linkTwo="/careers/all-positions"
          />
          <p className="font-inter font-semibold uppercase ~text-h9Copy5/h9Copy4 ~leading-[1.138rem]/[1.3rem] text-purple40 tracking-[.02rem]">
            All Positions
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 pt-5 tracking-[0.02rem]">
            See where you fit into the movement!{" "}
          </p>
          <p className="~leading-[2.113rem]/[2.6rem] font-playFair ~text-h4a/h4 text-gray80 ~pb-[7.3rem]/[5rem]">
            Apply now. We’ll surely get back to you at the soonest.
          </p>

          <PositionsGrid data={response.jobs} totalPages={totalPages} />

          <div className=" ~px-0/[6.563rem] ~pt-[2.5rem]/20 ~pb-[1.5rem]/[7.438rem] ">
            <div className="~px-5/[9.375rem] py-[2rem] rounded-[1.25rem] text-center bg-lightgrey">
              <p className="font-playFair ~text-h5/h4a ~leading-[1.75rem]/[2.113rem] text-gray80">
                Can’t Find what you are looking for?
              </p>
              <p className="font-inter text-h9Copy5 leading-[1.4rem] pt-3 text-midGray">
                Send in your resume and portfolio at
                <Link
                  href="mailto:careers@indianphilanthropy.org"
                  className="text-textPurple inline-block underline"
                >
                  &nbsp;careers@indianphilanthropy.org
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
