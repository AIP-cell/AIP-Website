import React from "react";

const datas = [
  {
    title: "Title",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
    category: "People, designation, Organisation",
  },
  {
    title: "Title",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
 category:"People, designation, Organisation" ,
},
  {
    title: "Title",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
 category:"People, designation, Organisation" ,
},
  {
    title: "Title",
    date: "11 Jul 2024  ",
    time: "14:00 - 16:00 ",
    desc: "A short description on the what it is about. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward. Giving has lagged behind despite a growing pool of first-generation wealth creators who have the ability to give forward.",
    category:"People, designation, Organisation" ,
  },
];
const Agenda = () => {
  return (
    <div>
      {" "}
      {datas.map((item, i) => (
        <div
          key={i}
          className="tw-flex tw-border-b tw-gap-[3.5rem] tw-border-gray10 tw-py-6"
        >
          <div className="tw-w-[7.5rem] tw-pt-7">
            <p className="tw-pb-3 tw-leading-[1.4rem] tw-font-bold tw-font-inter tw-text-midGray">
              {item.date}
            </p>
            <p className=" tw-leading-[1.4rem] tw-font-inter tw-text-midGray">
              {item.time}
            </p>
          </div>

          <div className="tw-w-[53.375rem]">
            <p className=" tw-font-playFair  tw-text-gray80 tw-text-h4 tw-leading-[2.6rem] tw-tracking-[-0.02rem]"> {item.title}</p>
            <p className=" tw-py-3 tw-font-inter tw-text-midGray tw-leading-[1.4rem]">
              {item.desc}
            </p>
            <p className=" tw-font-inter tw-leading-[1.4rem] tw-text-gray50">
              {item.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agenda;
