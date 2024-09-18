"use client";
import OurCoreFoundersContent from "../founders/_components/OurCoreFoundersContent";
import TeamAip from "../founders/_components/TeamAip";
import { useState } from "react";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import { useRouter } from "next/navigation";

const list = [
  { id: 1, title: "Our Core Founders" },
  { id: 2, title: "Founders" },
  { id: 3, title: "Our Advisory Board" },
  { id: 4, title: "Team AIP" },
];

const PeopleOfAipSm = () => {
  const [selected, setSelected] = useState(list[0]);
  const router = useRouter();
  if (selected.id == 3) {
    router.push("/people-of-aip/our-advisory-board/slug");
  }
  return (
    <div className="tw-flex md:tw-hidden tw-justify-center ~tw-pt-[4.3rem]/[4.75rem] ">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full">
        <CustomGraySelect
          data={list}
          selected={selected}
          setSelected={setSelected}
        />
        <div>
          {selected.id == 1 && <OurCoreFoundersContent />}
          {/* {selected.id == 2 && <div>Content 2</div>}
          {selected.id == 3 && <div>Content 3</div>} */}
          {selected.id == 4 && <TeamAip />}
        </div>
      </div>
    </div>
  );
};

export default PeopleOfAipSm;
