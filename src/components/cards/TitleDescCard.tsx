import React from "react";

type Props = {
  title1: string;
  title2?: string;
  desc: string;
  topClassName?: string;
};
const TitleDescCard = ({ title1, desc, title2, topClassName }: Props) => {
  return (
    <div
      className={`tw-flex tw-flex-col tw-items-center tw-gap-[0.75rem] ${topClassName}`}
    >
      <div>
        <h2 className="~tw-text-h4a/h4 ~tw-leading-[2.113rem]/[2.6rem] tw-text-center tw-font-playFairItalic tw-text-textPurple">
          {title1}
        </h2>
        <h2 className="~tw-text-h4a/h4 ~tw-leading-[2.113rem]/[2.6rem] tw-text-center tw-font-playFairItalic tw-text-textPurple">
          {title2}
        </h2>
      </div>
      <p className="~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225]/[1.4rem] tw-text-midGray tw-text-center">
        {desc}
      </p>
    </div>
  );
};

export default TitleDescCard;
