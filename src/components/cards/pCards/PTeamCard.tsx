import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import Src from "@public/images/pTeamSample.png";
import PMediumSizeSvg from "@/components/svg/PMediumSizeSvg";
type Props = {
  linkedin: boolean;
  title: string
  title2: string
  desc: string
};
const PTeamCard = ({ linkedin,title,title2,desc }: Props) => {
  return (
    <div className="tw-w-[11.87rem] tw-relative">
      {/* <Image src={Src} alt="" className="tw-w-full" /> */}
      <PMediumSizeSvg src="/images/pTeamSample.png"/>
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0 tw-size-[2.5rem]"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.5rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          {title}
        </h3>
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair">
          {title2}
        </h3>
        <p className="tw-font-playFairItalic tw-text-h5 tw-text-gray40 tw-leading-[1.75rem]  ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PTeamCard;
