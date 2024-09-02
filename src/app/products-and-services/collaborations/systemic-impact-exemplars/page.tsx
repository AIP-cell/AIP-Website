import React from "react";
import Link from "next/link";
import Foundation1 from "@public/svg/projectsPage/foundation1.png";
import Foundation2 from "@public/svg/projectsPage/foundation2.png";
import Foundation3 from "@public/svg/projectsPage/foundation3.png";
import Foundation4 from "@public/svg/projectsPage/foundation4.png";
import Ex from "@public/svg/projectsPage/ex.svg";
import Youtube from "@public/svg/projectsPage/youtube.svg";
import Eye from "@public/svg/projectsPage/Show.svg";
import DownloadWhite from "@public/svg/projectsPage/downloadWhite.svg";
import Download from "@public/svg/download.svg";
import Impact from "@public/svg/projectsPage/Impact.png";
import Systemic from "@public/svg/projectsPage/systemic.png";
import Image from "next/image";
import Agenda from "./_components/Agenda";

const page = () => {
  return (
    <div className="container tw-mx-auto tw-relative tw-px-[7.8rem] tw-pt-[5rem]">
      <div className="tw-absolute tw-left-[7.8rem] tw-font-inter tw-top-[1.25rem]">
        <Link
          href=""
          className="tw-text-gray50 tw-text-h9BodyCopy5 tw-leading-[19.6px]"
        >
          {"<"}Products & Services &nbsp;/ Collaborations&nbsp;/&nbsp;
        </Link>
        <Link href="#">Systemic Impact Exemplars</Link>
      </div>

      <div className="tw-grid tw-grid-cols-3 tw-gap-5">
        <div className="tw-col-span-2 tw-flex tw-flex-col tw-gap-10  tw-pe-[6.563rem]">
          <div className="tw-font-playFair">
            <p className="tw-leading-[3.25rem] tw-tracking-[-.04rem] tw-text-h3 tw-text-midGray">
              Systemic Impact Exemplars
            </p>
            <p className=" tw-leading-[1.75rem] tw-tracking-[-.02rem] tw-italic tw-text-h5 tw-text-gray40 tw-font-medium tw-pt-4">
              {" "}
              Reports{" "}
            </p>
          </div>
          <p className="tw-font-inter tw-leading-[1.4rem]  tw-text-midGray tw-max-w-[31.563rem]">
            This report was conceptualised to identify and learn from
            organisations that have achieved large-scale impact by adopting the
            systems change approach. It profiles 20 of India’s leading SSOs, and
            aims to inspire and inform other social purpose organisations by
            building evidence on what works in the Indian context. The report
            serves as a comprehensive knowledge resource, intended to shape
            thinking on systems change.
          </p>
          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              In Partnership With
            </p>
            <div className="tw-flex tw-gap-4">
              <Image
                src={Foundation4}
                className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-[0.89rem] tw-px-[0.3rem]  tw-w-[9.688rem] tw-h-20"
                alt="foundation"
              />
              <Image
                src={Foundation3}
                className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-[0.5rem] tw-px-[0.1rem]  tw-w-[5.388rem] tw-h-20"
                alt="foundation"
              />
              <Image src={Foundation2} alt="foundation" />
            </div>
          </div>
          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              Organised By
            </p>
            <div className="tw-flex tw-gap-4">
              <Image
                src={Foundation1}
                className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-[0.5rem] tw-px-[0.375rem] tw-w-[11.813rem] tw-h-20"
                alt="foundation"
              />
              <Image
                src={Impact}
                className="tw-border tw-border-1 tw-border-gray10 tw-rounded-xl tw-py-[0.681rem] tw-px-[0.375rem]  tw-w-[6.863rem] tw-h-20"
                alt="foundation"
              />
            </div>
          </div>

          <div className="tw-h-px tw-bg-gray10 tw-w-[31.563rem]"></div>
          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              Launch Details
            </p>
            <div className="tw-flex tw-gap-10">
              <div>
                <p className="tw-text-textPurple tw-italic tw-text-h3 tw-tracking-[0.04rem] tw-leading-[3.25rem] tw-font-playFair">
                  New Delhi
                </p>
                <p className="tw-py-4 tw-font-bold tw-text-h7Copy2 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  25th Jun 2024
                </p>
                <p className="tw-font-bold tw-text-h7Copy2 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  16:00 Hrs IST
                </p>
              </div>
              <div>
                <p className="tw-text-textPurple tw-italic tw-text-h3 tw-tracking-[0.04rem] tw-leading-[3.25rem] tw-font-playFair">
                  {" "}
                  Mumbai
                </p>
                <p className="tw-py-4 tw-font-bold tw-text-h7Copy2 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  18th July 2024
                </p>
                <p className=" tw-font-bold tw-text-h7Copy2 tw-leading-[1.575rem] tw-font-inter tw-text-gray80">
                  9:00 Hrs IST
                </p>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-gap-5">
            {/* <button className=""> */}
            <button className="tw-group tw-bg-darkPurple  hover:tw-bg-white  tw-transition-all  hover:tw-text-darkPurple tw-text-white hover:tw-border  hover:tw-border-1 hover:tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl">
              <p className=" tw-font-inter  tw-text-h9Copy5 tw-leading-[1.225rem]">
                Download Event Report
              </p>
              <div className=" tw-pt-[.1rem]">
                <Image
                  src={DownloadWhite}
                  alt="Download  Image"
                  className="group-hover:tw-hidden tw-w-[0.725rem] tw-h-[.938rem]"
                />
                <Image
                  src={Download}
                  alt="Download Image"
                  className="tw-hidden group-hover:tw-block  tw-w-[0.725rem] tw-h-[.938rem]"
                />
              </div>
            </button>

            <Link
              className=" hover:tw-bg-darkPurple hover:tw-text-white  tw-transition-all  tw-bg-white tw-text-darkPurple tw-border tw-border-1 tw-border-darkPurple tw-px-7 tw-py-3 tw-flex tw-gap-[0.75rem] tw-w-fit tw-rounded-3xl"
              href="#"
            >
              <p className=" tw-font-inter tw-text-h9Copy5 tw-leading-[1.225rem]">
                Visit Gallery
              </p>
              <Image
                src={Eye}
                alt="view Image"
                className=" tw-w-[1.25rem] tw-h-[1.25rem]"
              />
            </Link>
          </div>

          <div className="tw-h-px tw-bg-gray10"></div>

          <div>
            <p className="tw-font-playFair tw-pb-4 tw-leading-[1.75rem] tw-font-medium tw-tracking-[-.02rem] tw-text-h5 tw-text-gray80">
              Catch up on Event Updates
            </p>

            <div className="tw-flex tw-gap-4">
              <div className="tw-bg-bgGray5 tw-w-[3rem] tw-h-[3rem] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                <Image
                  src={Youtube}
                  className=" tw-w-[1.833rem] tw-h-[1.288rem] "
                  alt="Youtube Image"
                />
              </div>

              <div className="tw-bg-bgGray5 tw-w-[3rem] tw-h-[3rem] tw-rounded-full tw-flex tw-items-center tw-justify-center ">
                <Image
                  src={Ex}
                  className=" tw-w-[1.063rem] tw-h-[1.125rem]"
                  alt="Ex Image"
                />
              </div>
            </div>
          </div>
        </div>
        <Image
                src={Systemic}
                className=" tw-w-[25rem] tw-object-cover"
                alt="image"
              />
      </div>

      <div className="tw-pt-[7.563rem]">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Agenda
        </p>

        <Agenda/>
      </div>

      
      <div className="tw-pt-[7.563rem]">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          Gallery
        </p>
      </div>

      
      <div className="tw-pt-[7.563rem]">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
          In Media
        </p>
      </div>

      
      <div className="tw-pt-[7.563rem]">
        <p className="tw-text-center tw-font-playFair tw-pb-20 tw-leading-[3.3rem] tw-tracking-[-.04rem] tw-text-h2 tw-text-gray80">
        Testimonials
        </p>
      </div>
    </div>
  );
};

export default page;
