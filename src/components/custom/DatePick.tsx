"use client";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import FilterDownArrowSvg from "../svg/FilterDownArrowSvg";
import { generatingSearchParam } from "@/utils/UrlHelper";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import dayjs from "dayjs";
import useClient from "@/hooks/useClient";

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
    <div>
      <div
        className="border-2 border-[#DFE0E5] rounded-lg cursor-pointer"
        onClick={toggleDatePicker}
      >
        <div
          className={`flex gap-[.79rem] text-gray80 text-h9Copy5 ~pl-[0.75rem]/[1.75rem] pr-[1.25rem] py-[0.75rem] items-center w-full justify-between`}
        >
          <p className="text-h9Copy5 leading-[1.225rem] capitalize">Date</p>
          <FilterDownArrowSvg className="size-[1.25rem]" />
        </div>
      </div>
      {showDatePicker && (
        <div className="relative z-[6000]">
          <div className="absolute top-2 right-[-4.5rem] z-[6000]">
            <DatePicker
        
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                const query = generatingSearchParam({
                  ...searchParams,
                  date: dayjs(date).format("D MMMM YYYY"),
                });
                router.push(`?${query.toString()}`, {
                  scroll: false,
                });
                setShowDatePicker(false);
              }}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YY"
              inline // Ensures it renders properly as a dropdown-like UI
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
