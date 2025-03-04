"use client";
import cn from "@/utils/tailwind";

type Props = {
  desc?: string;
  index?: number;
};

const ResourceDescSection = ({ desc, index }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "text-gray50  ~text-h9Copy5/h9Copy4 line-clamp-6 text-ellipsis overflow-hidden ~leading-[1.225rem]/[1.4rem] relative"
        )}
      >
        {desc}
      </div>
    </div>
  );
};

export default ResourceDescSection;
