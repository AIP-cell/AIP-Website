import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg";
import OvalPeach from "@public/svg/ovalPeach.svg";
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg";

const TeamAip = () => {
  return (
    <div className="tw-w-full tw-relative">
      <Image
        src={Bg1}
        alt=""
        className="tw-hidden md:tw-block tw-absolute tw-top-[19.5rem] tw-right-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="tw-hidden md:tw-block tw-absolute tw-top-[39rem] tw-right-[14.125rem] tw-size-[12rem]"
      />
      <Image
        src={Bg2}
        alt=""
        className="tw-hidden md:tw-block tw-absolute tw-bottom-[8rem] tw-left-0"
      />
      <Image
        src={OvalPeach}
        alt=""
        className="tw-hidden md:tw-block tw-absolute tw-bottom-[23rem] tw-left-[17rem] tw-size-[12rem]"
      />
      <div className="tw-pt-[3rem] tw-pb-[7rem] container tw-mx-auto">
        <div className="tw-flex tw-flex-col  tw-justify-center ~tw-px-[1.25rem]/[20.9rem]">
          <h2 className=" tw-text-left md:tw-text-center ~tw-text-h4/h2 tw-leading-[3.3rem] tw-font-playFair">
            Team
            <span className="tw-text-textPurple tw-font-playFairItalic">
              &nbsp;AIP
            </span>
          </h2>
          <p className="~tw-pt-[2rem]/[1.25rem]  tw-text-midGray tw-text-left md:tw-text-center ~tw-text-h9Copy5/h9Copy4 tw-leading-[1.4rem]">
            It takes a village to raise a child. It takes a team to build an
            organisation that works toward a common aim: to inform, influence
            and inspire philanthropists and stakeholders, fostering a deeper
            understanding of how strategic philanthropy can address pressing
            social challenges.
          </p>
        </div>
        <div className="~tw-pt-[4.83rem]/[7.875rem] tw-flex md:tw-block tw-flex-col tw-items-center ~tw-px-[1.25rem]/[7.8rem] tw-relative">
          <div className="tw-flex ~tw-gap-[1.25rem]/[5.6rem] ">
            <ATeamCard
              title="Piyush"
              title2="Doshi"
              desc="Operating Partner"
              linkedin={true}
            />
            <PTeamCard
              title="Amitabh"
              title2="Jaipuria"
              desc="CEO"
              linkedin={true}
            />
          </div>
          <div className="tw-pt-[4rem] tw-flex ~tw-gap-[1.25rem]/[5.6rem] ">
            <ATeamCard
              title="Radhika"
              title2="Jain"
              desc="Philanthropic Partner"
              linkedin={true}
            />
            <PTeamCard
              title="Aditi"
              title2="Ray"
              desc="Philanthropic Partner"
              linkedin={true}
            />
          </div>
          <div className="tw-justify-center tw-pt-[4rem] tw-flex tw-flex-wrap ~tw-gap-[1.25rem]/[5.6rem]  ">
            <ATeamCard
              title="Dr. Preethi"
              title2="Jain"
              desc="Philanthropic Partner"
              linkedin={true}
            />
            <PTeamCard
              title="Vishal"
              title2="Dutta"
              desc="Head, Knowledge"
              linkedin={true}
            />
            <ATeamCard
              title="Jhilmil"
              title2="Garg"
              desc="Program Manager"
              linkedin={true}
            />
            <PTeamCard
              title="Isha"
              title2="Mathur"
              desc="Program Manager"
              linkedin={true}
            />
          </div>
          <div className="tw-pt-[4rem] tw-flex tw-justify-start md:tw-justify-end ~tw-gap-[1.25rem]/[5.6rem]  ">
            <ATeamCard
              title="Bhavana S"
              title2="Resmi"
              desc="Program Associate"
              linkedin={true}
            />
            <PTeamCard
              title="Aparna"
              title2="Joshi"
              desc="Program Manager"
              linkedin={true}
            />
          </div>
          <div className="tw-pt-[4rem] tw-flex tw-justify-start md:tw-justify-end ~tw-gap-[1.25rem]/[5.6rem] ">
            <ATeamCard
              title="Dr. Sabhyata"
              title2="Prakash"
              desc="Communication & Brand Manager"
              linkedin={true}
            />
            <PTeamCard
              title="Annie"
              title2="Bisht"
              desc="Executive Assistant"
              linkedin={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAip;
