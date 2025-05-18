import Image from "next/image";
import React from "react";
import PlayButtonPurple from "@public/svg/playButtonPurple.svg";
import { StorageUrl } from "@/utils/BaseUrl";
import dayjs from "dayjs";
import ReactPlayer from "react-player";
import { ButtonAnimation } from "../animations/ButtonAnimation";

type Props = {
  video?: string;
  link?: string;
  date?: string;
  title?: string;
  desc2?: string;
  linkOrVideo?: string;
};
const GalleryVideo = ({
  video,
  date,
  title,
  desc2,
  linkOrVideo,
  link,
}: Props) => {
  const format = dayjs(date).format("D MMMM YYYY");
  return (
    <div className="w-full">
      <div className="relative shrink-0 w-full ~h-[14.3rem]/[20.698rem] rounded-xl overflow-hidden flex items-center justify-center">
        {linkOrVideo === "video" ? (
          <ReactPlayer
            className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center"
            url={StorageUrl + video}
            light="/images/upcoming.png"
            playing
            playIcon={
              <ButtonAnimation>
                <Image
                  src={PlayButtonPurple}
                  alt="video-icon"
                  className="size-[3.312rem]"
                />
              </ButtonAnimation>
            }
            controls
          />
        ) : (
          <ReactPlayer
            className="z-10 border-2 absolute inset-0 !w-full !h-full flex justify-center items-center"
            url={StorageUrl + link}
            light="/images/upcoming.png"
            playing
            playIcon={
              <ButtonAnimation>
                <Image
                  src={PlayButtonPurple}
                  alt="video-icon"
                  className="size-[3.312rem]"
                />
              </ButtonAnimation>
            }
            controls
          />
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between ~gap-[0.25rem]/[3rem] ~pt-[1rem]/[0.75rem]">
        <div className="leading-[1.4rem] font-bold  text-midGray">
          <p className="">{title}</p>
          <p className="">{desc2}</p>
        </div>
        <p className="leading-[1.4rem] text-midGray">{format}</p>
      </div>
    </div>
  );
};

export default GalleryVideo;
