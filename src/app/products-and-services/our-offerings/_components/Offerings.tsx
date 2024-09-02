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
    text2:
      "We host thematic workshops that focus on specific causes, inviting representation from various stakeholders, including experts, beneficiaries, and fellow philanthropists. These workshops provide a platform for in-depth discussions, knowledge exchange, and collaborative problem-solving. By convening diverse perspectives, we aim to drive innovation and develop comprehensive strategies to address the most pressing issues. Our network creates a supportive and dynamic space where philanthropists can connect, learn, and grow together.",
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
const Offerings = () => {
  return (
    <div className="tw-pt-[6.63rem] tw-pb-[7.5rem] tw-relative container tw-mx-auto">
      <Image
        src={TopLeftCurve}
        alt=""
        className="tw-absolute tw-top-[4.233rem] tw-left-0"
      />
      <Image
        src={TopRightCurve}
        alt=""
        className="tw-absolute tw-top-[32.639rem] tw-right-0"
      />
      <Image
        src={BottomLeftCurve}
        alt=""
        className="tw-absolute tw-bottom-[28.8rem] tw-left-0"
      />
      <Image
        src={BottomRightCurve}
        alt=""
        className="tw-absolute tw-bottom-0 tw-right-0"
      />
      <h2 className="tw-font-playFair tw-text-gray80 tw-text-h2 tw-leading-[3.3rem] tw-text-center">
        Our
        <span className="tw-font-playFairItalic tw-text-textPurple">
          Offerings
        </span>
      </h2>
      <div className="tw-px-[7.8rem] tw-pt-[8.5rem] tw-flex tw-flex-col tw-gap-[5rem]">
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
  );
};

export default Offerings;
