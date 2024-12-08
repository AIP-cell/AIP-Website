import React from "react";

type Props = {
  agendaArray: any;
};
const Agenda = ({ agendaArray }: Props) => {
  return (
    <div className="~tw-pb-[3rem]/0 ">
      {agendaArray.map((item: any, i: number) => (
        <div
          key={i}
          className="tw-flex tw-flex-col lg:tw-flex-row tw-border-b ~tw-gap-[1.25rem]/[3.5rem] tw-border-gray10 ~tw-py-[1rem]/6"
        >
          <div className="tw-flex md:tw-flex-col tw-gap-[0.75rem] tw-w-full lg:tw-w-[7.5rem] tw-pt-[0.75rem]">
            <p className="tw-pb-[0.25rem] tw-leading-[1.4rem]  tw-font-inter tw-text-midGray">
              {item.date}
            </p>
            <p className=" tw-leading-[1.4rem] tw-font-inter tw-font-bold tw-text-midGray">
              {item.time}
            </p>
          </div>

          <div className="tw-w-full lg:tw-w-[53.375rem]">
            <p className=" tw-font-playFair ~tw-text-h5/h4 tw-text-gray80  ~tw-leading-[1.75rem]/[2.6rem] tw-tracking-[-0.02rem]">
              {item.title}
            </p>
            <p className=" ~tw-py-[0.25rem]/3 tw-font-inter tw-text-midGray ~tw-text-h9Copy5/h9Copy4 ~tw-leading-[1.225rem]/[1.4rem]">
              {item?.desc}
            </p>
            <p className=" tw-font-inter tw-leading-[1.4rem] tw-text-gray50">
              {item?.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
