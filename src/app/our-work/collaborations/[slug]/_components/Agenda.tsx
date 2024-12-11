import React from "react";

type Props = {
  agendaArray: any;
};
const Agenda = ({ agendaArray }: Props) => {
  return (
    <div className="~pb-[3rem]/0 ">
      {agendaArray.map((item: any, i: number) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row border-b ~gap-[1.25rem]/[3.5rem] border-gray10 ~py-[1rem]/6"
        >
          <div className="flex md:flex-col gap-[0.75rem] w-full lg:w-[7.5rem] pt-[0.75rem]">
            <p className="pb-[0.25rem] leading-[1.4rem]  font-inter text-midGray">
              {item.date}
            </p>
            <p className=" leading-[1.4rem] font-inter font-bold text-midGray">
              {item.time}
            </p>
          </div>

          <div className="w-full lg:w-[53.375rem]">
            <p className=" font-playFair ~text-h5/h4 text-gray80  ~leading-[1.75rem]/[2.6rem] tracking-[-0.02rem]">
              {item.title}
            </p>
            <p className=" ~py-[0.25rem]/3 font-inter text-midGray ~text-h9Copy5/h9Copy4 ~leading-[1.225rem]/[1.4rem]">
              {item?.desc}
            </p>
            <p className=" font-inter leading-[1.4rem] text-gray50">
              {item?.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
