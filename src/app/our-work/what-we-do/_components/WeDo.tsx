import OfferingCard from "@/components/cards/OfferingCards";
import Image from "next/image";
import TopLeftCurve from "@public/svg/products-and-services/offerings/peachTopLeftCurve.svg";
import TopRightCurve from "@public/svg/products-and-services/offerings/peachTopRightCurve.svg";
import BottomRightCurve from "@public/svg/products-and-services/offerings/peachRightBottomCurve.svg";
import BottomLeftCurve from "@public/svg/products-and-services/offerings/peachLeftBottomCurve.svg";
import React from "react";
import CardAnimation from "@/components/animations/CardAnimation";
const offeringsData = [
  {
    text1: "Networking &",
    text2: "Convening",
    desc: "We bring philanthropists together to share insights, inspire each other, and foster a collaborative community. Through thematic workshops and stakeholder-driven discussions, we facilitate knowledge exchange and drive innovative strategies to tackle pressing issues, creating a dynamic space for meaningful connections and growth.",
  },
  {
    text1: "Knowledge",
    text2: "Work",
    desc: " Our knowledge work empowers philanthropists with sector insights, case studies, and research to inform their giving journeys. These resources address knowledge gaps, inspiring and equipping philanthropists to deepen their engagement and amplify their impact across various causes.",
  },
  {
    text1: "Bespoke",
    text2: "Partnering",
    desc: "We engage with philanthropists helping them build perspective in their areas of interest, fostering connections with peers and subject matter experts. Through personalized insights and analysis, we enable philanthropists to embark on an informed, purpose-driven journey, transforming their passion into impactful action.",
  },
  {
    text1: "Advocacy &",
    text2: "Thought",
    text3: "Leadership",
    desc: "We advocate for a supportive regulatory environment that incentivizes philanthropy. Through forums, workshops, authored blogs and articles, and engagement with policymakers, we aim to facilitate a landscape that encourages thoughtful philanthropy.",
  },
];
const WeDo = () => {
  return (
    <div className="w-full relative">
      <div className="~pt-[4.625rem]/[6.63rem] ~pb-[5rem]/[7.5rem] relative">
        <div className="relative container mx-auto">
          <h2 className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center">
            What
            <span className="font-playFairItalic text-textPurple">
              &nbsp;We Do
            </span>
          </h2>
          <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-gray80 text-center ~pt-[0.75rem]/[1.25rem]">
            AIP has four core offerings for propelling and guiding <br />
            philanthropists in their giving journey
          </p>
        </div>
        <div className=" relative">
          <Image
            src={TopLeftCurve}
            alt=""
            className="h-[26.663rem] lg:h-auto w-[17.498rem] lg:w-auto absolute top-[-7.5rem] left-0 z-[-1]"
          />
          <Image
            src={TopRightCurve}
            alt=""
            className="h-[43.981rem] lg:h-auto w-[17.3rem] lg:w-auto absolute ~top-[34rem]/[12rem] right-0"
          />
          <Image
            src={BottomLeftCurve}
            alt=""
            className="h-[35.404rem] lg:h-auto w-[16.865rem] lg:w-auto absolute ~bottom-[-10rem]/[21rem] left-0"
          />
          <Image
            src={BottomRightCurve}
            alt=""
            className="hidden lg:block h-[35.404rem]  lg:h-auto w-[16.865rem] lg:w-auto absolute bottom-[-13rem] right-0"
          />
          <div className="~px-[1rem]/[7.8rem] ~pt-[1.5rem]/[5rem] flex flex-col justify-center ~gap-[3.5rem]/0 relative container mx-auto">
            {offeringsData.map((items, i) => (
              <CardAnimation index={i} delay={0.1} key={i}>
                <OfferingCard
                  index={i}
                  desc={items.desc}
                  text1={items.text1}
                  text2={items.text2}
                  text3={items.text3}
                />
              </CardAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
