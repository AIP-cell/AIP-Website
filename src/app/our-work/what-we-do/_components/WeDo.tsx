import OfferingCard from "@/components/cards/OfferingCards";
import Image from "next/image";
import TopLeftCurve from "@public/svg/products-and-services/offerings/peachTopLeftCurve.svg";
import TopRightCurve from "@public/svg/products-and-services/offerings/peachTopRightCurve.svg";
import BottomRightCurve from "@public/svg/products-and-services/offerings/peachRightBottomCurve.svg";
import BottomLeftCurve from "@public/svg/products-and-services/offerings/peachLeftBottomCurve.svg";
import React from "react";
import CardAnimation from "@/components/animations/CardAnimation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import FadeInAnimation from "@/components/animations/FadeInAnimation";
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
    desc: "We engage with philanthropists to help build purpose, perspective and their philanthropic portfolios  in their chosen area of interest. We foster connections with peers, subject matter experts and NPOs thus building personalized insights. We also work on the process of philanthropy and help with the right way to measure impact.",
  },
  {
    text1: "Thought",
    text2: "Leadership",
    desc: "We advance and promote philanthropy through thought leadership and help build an enabling environment, through research, workshops, blogs, articles, and engagement with subject matter experts.",
  },
];
const WeDo = () => {
  return (
    <div className="w-full relative">
      <div className="~pt-[4.625rem]/[6.63rem] ~pb-[5rem]/[7.5rem] relative">
        <div className="relative container mx-auto">
          <TextStaggerAnimation
            text="What <color>We Do</color>"
            className="font-playFair text-gray80 ~text-h4/h2 ~leading-[2.6rem]/[3.3rem] text-center"
          />
          <p className="~leading-[1.225rem]/[1.4rem] ~text-h9Copy5/h9Copy4 text-gray80 text-center ~pt-[0.75rem]/[1.25rem]">
            AIP has four core pillars of work supporting the journey of
            Philanthropy
          </p>
        </div>
        <div className=" relative">
          <FadeInAnimation delay={0.2} x1={-20} x2={0}>
            <Image
              src={TopLeftCurve}
              alt=""
              className="h-[26.663rem] lg:h-auto w-[17.498rem] lg:w-auto absolute top-[-7.5rem] left-0 z-[-1]"
            />
          </FadeInAnimation>
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
                  // text3={items.text3}
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
