import ATeamCard from "@/components/cards/aCards/ATeamCard";
import PTeamCard from "@/components/cards/pCards/PTeamCard";
import Image from "next/image";
import Bg1 from "@public/svg/people-of-aip/peachCurveRightTeamAip.svg"
import OvalPeach from "@public/svg/ovalPeach.svg"
import Bg2 from "@public/svg/people-of-aip/peachCurveLeftTeamAip.svg"

const TeamAip = () => {
  return (
    <div className="tw-pt-[3rem] tw-pb-[7rem] container tw-mx-auto">
      <div className="tw-flex tw-flex-col  tw-justify-center">
          <h2 className=" tw-text-center tw-text-h2 tw-leading-[3.3rem] tw-font-playFair">
            Team <i className="tw-text-textPurple">AIP</i>
          </h2>
          <p className="tw-pt-[1.25rem] tw-px-[20.9rem] tw-text-center tw-text-h9Copy4 tw-leading-[1.4rem]">
          It takes a village to raise a child. It takes a team to build an organisation that works toward a common aim: to inform, influence and inspire philanthropists and stakeholders, fostering a deeper understanding of how strategic philanthropy can address pressing social challenges.
          </p>
      </div>
      <div className="tw-pt-[7.875rem] tw-px-[7.8rem] tw-relative">
        <Image src={Bg1} alt="" className="tw-absolute tw-top-[7.875rem] tw-right-0"/>
        <Image src={OvalPeach} alt="" className="tw-absolute tw-top-[28.56rem] tw-right-[14.125rem] tw-size-[12rem]"/>
        <Image src={Bg2} alt="" className="tw-absolute tw-bottom-0 tw-left-0"/>
        <Image src={OvalPeach} alt="" className="tw-absolute tw-bottom-[15.75rem] tw-left-[17rem] tw-size-[12rem]"/>
        <div className="tw-flex tw-gap-[5.6rem] ">
            <ATeamCard/>
            <PTeamCard/>
        </div>
        <div className="tw-pt-[4rem] tw-flex tw-gap-[5.6rem] ">
            <ATeamCard/>
            <PTeamCard/>
        </div>
        <div className="tw-pt-[4rem] tw-flex tw-gap-[5.6rem] ">
            <ATeamCard/>
            <PTeamCard/>
            <ATeamCard/>
            <PTeamCard/>
        </div>
        <div className="tw-pt-[4rem] tw-flex tw-justify-end tw-gap-[5.6rem] ">
            <ATeamCard/>
            <PTeamCard/>
        </div>
        <div className="tw-pt-[4rem] tw-flex tw-justify-end tw-gap-[5.6rem] ">
            <ATeamCard/>
            <PTeamCard/>
        </div>
      </div>
    </div>
  );
};

export default TeamAip;
