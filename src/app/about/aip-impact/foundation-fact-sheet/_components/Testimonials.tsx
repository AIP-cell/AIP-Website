"use client";
import React, { useState } from "react";
import LeftArrow from "@public/svg/leftArrow.svg";
import RightArrow from "@public/svg/rightArrow.svg";
import Image from "next/image";
import ASrc from "@public/images/aSample.png";

import ACard from "@/components/cards/aCards/ACard";
import PCard from "@/components/cards/pCards/PCard";
const testimonialsArray: any[] = [
  {
    a: {
      name: "Ashish Dhawan",
      work: "The Convergence Foundation",
      desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
    },
    p: {
      name: "Pritihi Jain",
      work: "Philanthrophy Partner, BLR, South",
      desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
    },
  },
  {
    a: {
      name: "2Ashish Dhawan",
      work: "The Convergence Foundation",
      desc: "“I believe a lot more needs to be done particularly to encourage first-time givers. AIP aims to fill this gap and spur philanthropy in a very structured manner.’’",
    },
    p: {
      name: "2Pritihi Jain",
      work: "Philanthrophy Partner, BLR, South",
      desc: "“I believe those who are already in philanthropy and enjoying it and making a difference have a responsibility to share their stories widely, and to be very transparent about their giving. By promoting such accountability, AIP is playing an essential role in building trust with the communities we serve.” ",
    },
  },
];
const arrayLenghth = testimonialsArray.length;
const Testimonials = () => {
  const [change, setChange] = useState<number>(0);
  const previous = () => {
    if (change == 0) {
      setChange(arrayLenghth - 1);
    } else {
      setChange(change - 1);
    }
  };
  const next = () => {
    setChange(change + 1);
    if (change == arrayLenghth - 1) {
      setChange(0);
    }
  };
  return (
    <div className="tw-pt-[5rem] container tw-mx-auto">
      <div className="tw-relative  tw-flex tw-justify-center tw-items-center">
        <div className="tw-w-[25rem]">
          <div className="tw-flex tw-justify-center tw-gap-[4.563rem]">
            <ACard
              image="/images/aSample.png"
              name={testimonialsArray.at(change).a.name}
              work={testimonialsArray.at(change).a.work}
              desc={testimonialsArray.at(change).a.desc}
            />
            <PCard
              image="/images/pSample.png"
              name={testimonialsArray.at(change).p.name}
              work={testimonialsArray.at(change).p.work}
              desc={testimonialsArray.at(change).p.desc}
            />
          </div>
        </div>
        <div className="tw-absolute tw-left-[8rem] tw-z-20 ">
            <button
              onClick={previous}
              className=" tw-text-midGray tw-leading-[22.4px] tw-font-inter tw-bg-darkPurple tw-rounded-tl-3xl tw-rounded-bl-3xl tw-rounded-tr-xl tw-rounded-br-xl tw-py-[1.15rem] tw-px-[0.92rem]"
            >
              <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]"> 
                <Image src={LeftArrow} alt="left-arrow" fill className="" />
              </div>
            </button>
        </div>
        <button
          onClick={next}
          className="tw-absolute tw-right-[8rem]  tw-bg-darkPurple tw-rounded-tr-3xl tw-rounded-br-3xl tw-rounded-tl-xl tw-rounded-bl-xl tw-py-[1.15rem] tw-px-[0.92rem]"
        >
          <div className="tw-relative tw-w-[1rem] tw-h-[0.57rem]">
            <Image src={RightArrow} alt="right-arrow" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
