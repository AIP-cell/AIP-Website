import OfferingCard from "@/components/cards/OfferingCards";
import Image from "next/image";
import TopLeftCurve from "@public/svg/products-and-services/offerings/peachTopLeftCurve.svg";
import TopRightCurve from "@public/svg/products-and-services/offerings/peachTopRightCurve.svg";
import BottomRightCurve from "@public/svg/products-and-services/offerings/peachRightBottomCurve.svg";
import BottomLeftCurve from "@public/svg/products-and-services/offerings/peachLeftBottomCurve.svg";
import React from "react";
const offeringsData = [
  {
    text1:
      "The primary goal of our network is to bring philanthropists together to share their stories, insights, and experiences. This collaborative environment helps inspire individuals and fosters a strong sense of community among philanthropists. By learning from each other's successes and challenges, members can enhance their own philanthropic efforts and make a more significant impact.",
  },
  {
    text1:
      "The primary goal of our network is to bring philanthropists together to share their stories, insights, and experiences. This collaborative environment helps inspire individuals and fosters a strong sense of community among philanthropists. By learning from each other's successes and challenges, members can enhance their own philanthropic efforts and make a more significant impact.",
    text2:
      "We host thematic workshops that focus on specific causes, inviting representation from various stakeholders, including experts, beneficiaries, and fellow philanthropists. These workshops provide a platform for in-depth discussions, knowledge exchange, and collaborative problem-solving. By convening diverse perspectives, we aim to drive innovation and develop comprehensive strategies to address the most pressing issues. Our network creates a supportive and dynamic space where philanthropists can connect, learn, and grow together.",
  },
  {
    text1:
      "The primary goal of our network is to bring philanthropists together to share their stories, insights, and experiences. This collaborative environment helps inspire individuals and fosters a strong sense of community among philanthropists. By learning from each other's successes and challenges, members can enhance their own philanthropic efforts and make a more significant impact.",
    text2:
      "We host thematic workshops that focus on specific causes, inviting representation from various stakeholders, including experts, beneficiaries, and fellow philanthropists. These workshops provide a platform for in-depth discussions, knowledge exchange, and collaborative problem-solving. By convening diverse perspectives, we aim to drive innovation and develop comprehensive strategies to address the most pressing issues. Our network creates a supportive and dynamic space where philanthropists can connect, learn, and grow together.",
    text3:
      "By advocating for a regulatory environment that incentivise philanthropy, we aim to remove barriers and create new opportunities for charitable giving.",
  },
  {
    text1:
      "The primary goal of our network is to bring philanthropists together to share their stories, insights, and experiences. This collaborative environment helps inspire individuals and fosters a strong sense of community among philanthropists. By learning from each other's successes and challenges, members can enhance their own philanthropic efforts and make a more significant impact.",
    text2:
      "We host thematic workshops that focus on specific causes, inviting representation from various stakeholders, including experts, beneficiaries, and fellow philanthropists. These workshops provide a platform for in-depth discussions, knowledge exchange, and collaborative problem-solving. By convening diverse perspectives, we aim to drive innovation and develop comprehensive strategies to address the most pressing issues. Our network creates a supportive and dynamic space where philanthropists can connect, learn, and grow together.",
    text3:
      "By advocating for a regulatory environment that incentivise philanthropy, we aim to remove barriers and create new opportunities for charitable giving.",
  },
];
const WeDo = () => {
  return (
    <div className="w-full relative">
      <Image
        src={TopLeftCurve}
        alt=""
        className="h-[26.663rem] lg:h-auto w-[17.498rem] lg:w-auto absolute top-[4.233rem] left-0 z-[-1]"
      />
      <Image
        src={TopRightCurve}
        alt=""
        className="h-[43.981rem] lg:h-auto w-[17.3rem] lg:w-auto absolute top-[32.639rem] right-0"
      />
      <Image
        src={BottomLeftCurve}
        alt=""
        className="h-[35.404rem] lg:h-auto w-[16.865rem] lg:w-auto absolute bottom-[28.8rem] left-0"
      />
      <Image
        src={BottomRightCurve}
        alt=""
        className="h-[35.404rem] lg:h-auto w-[16.865rem] lg:w-auto absolute bottom-0 right-0"
      />
      <div className="~pt-[4.625rem]/[6.63rem] ~pb-[5rem]/[7.5rem] relative container mx-auto">
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
        <div className="~px-[1rem]/[7.8rem] ~pt-[1.5rem]/[5rem] flex flex-col justify-center ~gap-[3.5rem]/0">
          {offeringsData.map((items, i) => (
            <OfferingCard
              key={i}
              index={i}
              text1={items.text1}
              text2={items.text2}
              text3={items.text3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeDo;
