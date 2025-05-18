import Link from "next/link";
import cn from "@/utils/tailwind";
import LeftOPenSvg from "../svg/LeftOpenSvg";
type Props = {
  textOne: string;
  linkOne: string;
  textTwo?: string;
  linkTwo?: string;
  textThree?: string;
  linkThree?: string;
  textFour?: string;
  linkFour?: string;
};
const BreadCrump = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
}: Props) => {
  return (
    <div className="absolute z-[1000] flex flex-wrap items-center ~left-5/[7.8rem] font-inter top-[1.25rem]">
      <Link
        href={linkOne}
        className={cn(
          "text-black flex items-center gap-[0.5rem] ~text-h10Copy6/h9Copy5 leading-[1.225rem] text-left",
          { "!text-gray50": textTwo }
        )}
      >
        <div className="text-[#6A6D75]">
          <LeftOPenSvg className="~size-[0.8rem]/[1rem]" />
        </div>
        <p className="text-left">{textOne}</p>
        <p className="text-left">{textTwo && <span>/&nbsp;</span>}</p>
      </Link>
      {linkTwo && (
        <Link
          href={linkTwo}
          className={cn(
            " text-black flex gap-[0.5rem] ~text-h10Copy6/h9Copy5 leading-[1.225rem] text-left",
            { "!text-gray50 ": textThree }
          )}
        >
          <p
            className={cn("text-left", {
              "underline underline-offset-4": textThree,
            })}
          >
            {textTwo}
          </p>
          {textThree && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textThree && linkThree && (
        <Link
          href={linkThree}
          className={cn(
            "text-black  ~text-h10Copy6/h9Copy5 flex leading-[1.225rem] text-left",
            {
              "!text-gray50": textFour,
            }
          )}
        >
          <p
            className={cn("text-left", {
              "underline underline-offset-4 ": textFour,
            })}
          >
            {textThree}
          </p>
          {textFour && <p>&nbsp;/&nbsp;</p>}
        </Link>
      )}
      {textFour && linkFour && (
        <Link
          href={linkFour}
          className="text-black ~text-h10Copy6/h9Copy5 leading-[1.225rem] text-left"
        >
          <p className="text-left">{textFour}</p>
        </Link>
      )}
    </div>
  );
};

export default BreadCrump;
