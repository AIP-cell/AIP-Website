"use client";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import FilterDownArrowSvg from "../svg/FilterDownArrowSvg";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import useClient from "@/hooks/useClient";
import CrossSvg from "../svg/CrossSvg";

type Props = {
  searchParams: Record<string, any>;
};
const DateFilter = ({ searchParams }: Props) => {
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const client = useClient();
  if (!client) return;
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="w-[15rem]">
      <div
        className="border-2 border-[#DFE0E5] rounded-lg cursor-pointer w-fit"
        onClick={toggleDatePicker}
      >
        <div
          className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] pr-[1.25rem] py-[0.75rem] items-center w-full justify-between`}
        >
          <p className="text-h9Copy5 leading-[1.225rem] capitalize">
            {searchParams.date ? searchParams.date.replace(/ /g, "-") : "Date"}
          </p>
          <div className="flex gap-[0.5rem] items-center">
            {searchParams.date && (
              <CrossSvg
                className="size-[0.8rem]"
                onClick={() => {
                  setStartDate(null);
                  const query = generatingSearchParam({
                    ...searchParams,
                    date: "",
                  });
                  router.push(`?${query.toString()}`, {
                    scroll: false,
                  });
                }}
              />
            )}
            <FilterDownArrowSvg className="size-[1.25rem]" />
          </div>
        </div>
      </div>
      {showDatePicker && (
        <div className="relative z-[6000] ">
          {/* sm:right-[-4.5rem] sm:left-auto right-auto */}
          <div className="absolute  top-1 left-0 z-[6000]">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                const query = generatingSearchParam({
                  ...searchParams,
                  date: dayjs(date).format("DD MM YY"),
                });
                router.push(`?${query.toString()}`, {
                  scroll: false,
                });
                setShowDatePicker(false);
              }}
              // minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YY"
              inline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
