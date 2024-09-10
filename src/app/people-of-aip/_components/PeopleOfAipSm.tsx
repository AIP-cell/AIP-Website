"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import OurCoreFoundersContent from "../founders/_components/OurCoreFoundersContent";
import TeamAip from "../founders/_components/TeamAip";
import Link from "next/link";
import { useState } from "react";
import CustomGraySelect from "@/components/custom/CustomGraySelect";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
import DownloadFileSvg from "@/components/svg/DowloadFileSvg";

const list = [
  { id: 1, title: "Our Core Founders" },
  { id: 2, title: "Founders" },
  { id: 3, title: "Our Advisory Board" },
  { id: 4, title: "Team AIP" },
];

const PeopleOfAipSm = () => {
  const [selected, setSelected] = useState(list[1]);
  return (
    <div className="tw-flex tw-justify-center ~tw-pt-8/[4.75rem] ">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <CustomGraySelect
          data={list}
          selected={selected}
          setSelected={setSelected}
        />
        <div>
          {selected.id == 1 && <OurCoreFoundersContent />}
          {selected.id == 2 && <div>Content 2</div>}
          {selected.id == 3 && <div>Content 3</div>}
          {selected.id == 4 && <TeamAip />}
        </div>
      </div>
    </div>
  );
};

export default PeopleOfAipSm;
