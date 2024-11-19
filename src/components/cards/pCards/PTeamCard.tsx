import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import Src from "@public/images/pTeamSample.png";
import PMediumSizeSvg from "@/components/svg/PMediumSizeSvg";
import Link from "next/link";
type Props = {
  linkedin: boolean;
  title: string;
  title2: string;
  location?: string;
  email?: string;
  desc: string;
  titleClassName?: string;
  title2ClassName?: string;
  locationClassName?: string;
};
const PTeamCard = ({
  linkedin,
  title,
  title2,
  location,
  email,
  desc,
  titleClassName,
  title2ClassName,
  locationClassName,
}: Props) => {
  return (
    <div className="~tw-w-[11rem]/[11.87rem] tw-relative">
      <PMediumSizeSvg src="/images/pTeamSample.png" />
      {linkedin && (
        <Image
          src={Linkedin}
          alt=""
          className="tw-absolute tw-top-0 tw-right-0 tw-size-[2.5rem]"
        />
      )}
      <div className="tw-flex tw-flex-col tw-gap-[0.5rem]">
        <h3
          className={`~tw-text-h4a/h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair ${titleClassName}`}
        >
          {title}
        </h3>
        <h3
          className={`~tw-text-h4a/h4 tw-leading-[2.6rem] tw-text-gray80 tw-font-playFair ${title2ClassName}`}
        >
          {title2}
        </h3>
        <p
          className={`~tw-text-h4a/h5 ~tw-leading-[2.113rem]/[1.75rem] tw-text-gray80 tw-font-playFair ${locationClassName}`}
        >
          {location}
        </p>
        <p className="tw-font-playFairItalic ~tw-text-h6/h5 tw-text-gray40 tw-leading-[1.75rem]  ">
          {desc}
        </p>
        <Link href=""  className=" ~tw-text-h6/h8Copy3 tw-text-textPurple tw-italic tw-leading-[1.575rem] tw-underline tw-decoration-[1px] ">
          {email}
        </Link>
      </div>
    </div>
  );
};

export default PTeamCard;
