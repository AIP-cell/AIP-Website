import LenisScroll from "@/library/LenisScroll";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <LenisScroll>{children}</LenisScroll>;
}
