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
      className={`flex flex-col items-center gap-[0.75rem] ${topClassName}`}
    >
      <div>
        <h2 className="~text-h4a/h4 ~leading-[2.113rem]/[2.6rem] text-center font-playFairItalic text-textPurple">
          {title1}
        </h2>
        <h2 className="~text-h4a/h4 ~leading-[2.113rem]/[2.6rem] text-center font-playFairItalic text-textPurple">
          {title2}
        </h2>
      </div>
      <p className="~text-h9Copy5/h9Copy4 ~leading-[1.225]/[1.4rem] text-midGray text-center">
        {desc}
      </p>
    </div>
  );
};

export default TitleDescCard;
