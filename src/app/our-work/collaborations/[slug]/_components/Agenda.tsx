import { TAgenda } from "@/api/type";
import dayjs from "dayjs";
import React from "react";

type Props = {
  agendaArray: TAgenda[];
};
const Agenda = ({ agendaArray }: Props) => {
  const dateFormat = (date: string) => {
    return dayjs(date).format("D MMMM");
  };
  const fromTimeFormat = (time: string) => {
    return dayjs(time).format("HH:mm");
  };
  const toTimeFormat = (time: string) => {
    return dayjs(time).format("HH:mm");
  };
  return (
    <>
      <p className="text-center font-playFair ~pb-[1rem]/20 ~leading-[2.6rem]/[3.3rem] tracking-[-.04rem] ~text-h4/h2 text-gray80">
        Agenda
      </p>
      <div className="~pb-[3rem]/0 ">
        {agendaArray.map((item, i: number) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row border-b ~gap-[1.25rem]/[3.5rem] border-gray10 ~py-[1rem]/6"
          >
            <div className="flex md:flex-col gap-[0.75rem] w-full lg:w-[7.5rem] pt-[0.75rem]">
              <p className="pb-[0.25rem] leading-[1.4rem]  font-inter text-midGray">
                {dateFormat(item.date)}
              </p>
              <p className=" leading-[1.4rem] font-inter font-bold text-midGray">
                {fromTimeFormat(item.fromTime)} - {toTimeFormat(item.toTime)}
              </p>
            </div>

            <div className="w-full lg:w-[53.375rem]">
              <p className=" font-playFair ~text-h5/h4 text-gray80  ~leading-[1.75rem]/[2.6rem] tracking-[-0.02rem]">
                {item.title}
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: item.description || "" }}
                className=" ~py-[0.25rem]/3 font-inter text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]"
              ></div>
              {/* <p className=" font-inter leading-[1.4rem] text-gray50">
                {item?.}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agenda;
