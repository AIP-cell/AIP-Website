"use client";
import videoPlaySvg from "@public/svg/playButtonPurple.svg";
import LeftCurve from "@public/svg/products-and-services/collaborations/leftPeachCurve.svg";
import ReactPlayer from "react-player";
import Image from "next/image";
import { StorageUrl } from "@/utils/BaseUrl";
import useClient from "@/hooks/useClient";
import { ButtonAnimation } from "@/components/animations/ButtonAnimation";
type Props = {
  video?: string;
  videoLink?: string;
  linkOrVideo?: string;
};
const InnerCollaborationsVideo = ({ video, videoLink, linkOrVideo }: Props) => {
  const client = useClient();
  if (!client) {
    return;
  }

  return (
    <div className="relative ">
      <Image
        src={LeftCurve}
        alt=""
        className="hidden absolute left-0 bottom-[-15rem]"
      />

      <div className="~pt-[2rem]/[3.5rem]   container relative flex justify-center mx-auto">
        {linkOrVideo === "Video" ? (
          <div className="w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[35.313rem] overflow-hidden rounded-lg">
            <ReactPlayer
              className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center"
              url={StorageUrl + video}
              light="/images/upcoming.png"
              playing
              playIcon={
                <ButtonAnimation>
                  <Image src={videoPlaySvg} alt="" className="" />
                </ButtonAnimation>
              }
              controls
            />
          </div>
        ) : (
          <div className="w-[64.375rem] relative flex justify-center items-center ~h-[12.313rem]/[35.313rem] overflow-hidden rounded-lg">
            <ReactPlayer
              className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center cursor-pointer"
              url={StorageUrl + videoLink}
              playIcon={
                <ButtonAnimation>
                  <Image src={videoPlaySvg} alt="" className="" />
                </ButtonAnimation>
              }
              controls
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerCollaborationsVideo;
