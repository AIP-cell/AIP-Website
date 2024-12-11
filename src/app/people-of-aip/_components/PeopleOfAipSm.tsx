"use client";
import OurCoreFoundersContent from "../core-founders/_components/OurCoreFoundersContent";
import TeamAip from "../team-AIP/_components/TeamAip";
import { useState } from "react";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import { useRouter } from "next/navigation";
import Experts from "../experts/_components/Experts";

const list = [
  "Our Core Founders",
  "Founders",
  "Our Advisory Board",
  "Team AIP",
  "Experts",
];

type Props = {
  tabSelect: string;
};
const PeopleOfAipSm = ({ tabSelect }: Props) => {
  const [selected, setSelected] = useState(tabSelect);
  const router = useRouter();
  if (selected == "Our Advisory Board") {
    router.push("/people-of-aip/our-advisory-board/slug");
  }
  return (
    <div className="flex md:hidden justify-center ~pt-[4.3rem]/[4.75rem] ">
      <div className="flex flex-col items-center justify-center w-full">
        <CustomGraySelect
          data={list}
          selected={selected}
          setSelected={setSelected}
        />
        <div>
          {selected === "Our Core Founders" && <OurCoreFoundersContent />}
          {selected === "Team AIP" && <TeamAip />}
          {selected === "Experts" && <Experts />}
        </div>
      </div>
    </div>
  );
};

export default PeopleOfAipSm;
