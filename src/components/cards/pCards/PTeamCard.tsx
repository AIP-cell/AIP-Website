import Image from "next/image";
import Linkedin from "@public/svg/grayLinkedin.svg";
import PMediumSizeSvg from "@/components/svg/PMediumSizeSvg";
import Link from "next/link";
type Props = {
  linkedin: boolean;
  linkedinLink?: string;
  title?: string;
  slug?: string;
  image?: string;
  location?: string;
  email?: string;
  desc?: string;
  titleClassName?: string;
  locationClassName?: string;
  link?: string;
};
const PTeamCard = ({
  linkedin,
  linkedinLink,
  slug,
  image,
  title,
  location,
  email,
  desc,
  titleClassName,
  locationClassName,
  link,
}: Props) => {
  return (
    <div className="max-[23rem]:w-[8rem]  flex flex-col ~w-[10.3rem]/[11.87rem] relative">
      <PMediumSizeSvg
        src={image}
        className="max-[23rem]:w-[8rem] ~w-[10.3rem]/[11.87rem]"
      />
      {!!linkedinLink && !!linkedin && (
        <Link
          target="_blank"
          href={linkedinLink}
          className="absolute top-0 right-0 size-[2.5rem] z-50"
        >
          <Image src={Linkedin} alt="" />
        </Link>
      )}
      <div className="flex flex-col grow gap-[0.5rem]">
        {slug ? (
          <Link
            href={`${link}`}
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName}`}
          >
            {title}
          </Link>
        ) : (
          <h3
            className={`~text-h4a/h4 ~leading-[2.1rem]/[2.6rem] text-gray80 font-playFair ${titleClassName}`}
          >
            {title}
          </h3>
        )}

        {!!location && (
          <p
            className={`~text-h4a/h5 ~leading-[2.113rem]/[1.75rem] text-gray80 font-playFair font-medium ${locationClassName}`}
          >
            {location}
          </p>
        )}
        {!!desc && (
          <p className="~text-h6M/h5 font-playFairItalic  text-gray40 ~leading-[1.575rem]/[1.75rem]  ">
            {desc}
          </p>
        )}
        {!!email && (
          <Link
            href=""
            className="break-words break-all ~text-h9Copy5/h8Copy3 text-textPurple italic  ~leading-[1.225rem]/[1.575rem] underline decoration-[1px] "
          >
            {email}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PTeamCard;
