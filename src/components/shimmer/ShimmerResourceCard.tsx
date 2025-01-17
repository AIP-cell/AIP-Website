import React from "react";

const ShimmerResourceCard = () => {
  return (
    <div className="grid grid-cols-4 gap-[2.5rem]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col  items-center ~gap-[1.25rem]/[0.75rem]"
        >
          <div className=" bg-slate-200 w-full ~h-[19.688rem]/[16.594rem] rounded-2xl"></div>
          <div className="flex flex-col w-full gap-[0.75rem] bg-slate-200 h-[3rem] rounded-full"></div>
          <div className="h-px bg-slate-200 w-full"></div>
          <div className=" w-full flex justify-between">
            <div className="bg-slate-200 w-[7rem] rounded-full h-[1.5rem]"></div>
            <div className="bg-slate-200 w-[5rem] rounded-full h-[1.5rem]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerResourceCard;
