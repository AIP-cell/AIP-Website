import cn from "@/utils/tailwind";
import React from "react";

type Props = { children: React.ReactNode ,className?:string};

const PaddingLeft = ({ children,className }: Props) => {
  return <div className={cn("lg:~lg:~pl-[4rem]/[8.75rem] ",className)}>{children}</div>;
};

export default PaddingLeft;
