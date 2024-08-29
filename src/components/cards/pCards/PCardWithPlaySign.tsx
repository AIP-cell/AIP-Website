import Image from "next/image";
import Src from "@public/images/pSample.png";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";

const PCardWithPlaySign = () => {
  return (
    <div className="tw-w-[18.43rem] tw-relative ">
      <div className="tw-relative tw-flex tw-justify-center">
        <Image src={Src} alt="" />
        <Image
          src={PlayButtonPurple}
          alt=""
          className="tw-absolute tw-bottom-[4rem]"
        />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-[0.75rem]">
        <h3 className="tw-text-h4 tw-leading-[2.6rem] tw-text-[#DFE0E5] tw-font-playFair">
          Ashish Dhawan
        </h3>
        <h4 className="tw-text-h5 tw-font-playFair tw-text-lightPurplePink tw-font-medium tw-italic">
          The Convergence Foundation
        </h4>
        <p className="tw-text-h9Copy4 tw-leading-[1.4rem] tw-font-inter tw-text-[#DFE0E5] ">
          “I believe a lot more needs to be done particularly to encourage
          first-time givers. AIP aims to fill this gap and spur philanthropy in
          a very structured manner.’’
        </p>
      </div>
    </div>
  );
};

export default PCardWithPlaySign;
